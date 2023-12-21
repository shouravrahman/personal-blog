export const revalidate = 60;

import Header from "@/components/Header";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { IParams, IPost } from "@/utils/interface";
import { PortableText } from "@portabletext/react";
import { VT323 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation";
const date = VT323({ weight: ["400"], subsets: ["latin"] });
async function getPost(slug: string) {
	const query = `
	*[_type == "post" && slug.current == "${slug}"][0] 
	{
		title, 
		slug,
      body,
		publishedAt,
		excerpt,
		tags[] -> {_id,slug,name}  
}`;
	const data = await client.fetch(query);
	return data;
}

const page = async ({ params }: IParams) => {
	const post: IPost = await getPost(params.slug);

	if (!post) {
		notFound();
	}

	return (
		<div>
			<Header title={post?.title} />
			<div className='text-center'>
				<span className={`${date.className} my-2 text-purple-500`}>
					{new Date(post?.publishedAt).toDateString()}
				</span>
				<div className='mt-5'>
					{post?.tags?.map((tag) => (
						<Link
							href={`/tag/${tag.slug.current}`}
							key={tag._id}
							className='mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-900 border dark:border-gray-900'
						>
							#{tag.name}
						</Link>
					))}
				</div>
				<div className={richTextStyles}>
					<PortableText value={post?.body} components={ImageComponent} />
				</div>
			</div>
		</div>
	);
};

export default page;

const richTextStyles = `   
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-p:ml-4

`;
const ImageComponent = {
	types: {
		image: ({ value }: any) => (
			<Image src={urlForImage(value)} alt='Post' width={700} height={700} />
		),
	},
};
