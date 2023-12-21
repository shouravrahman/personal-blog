import Header from "@/components/Header";
import { client } from "@/sanity/lib/client";
import { ITag } from "@/utils/interface";
import Link from "next/link";

async function getAllTags() {
	const query = `
	*[_type == "tag"] 
	{
		name, 
		slug,
    _id ,
	 "postCount":count(*[_type == "post" && references("tags",^._id)] )
}`;
	const data = await client.fetch(query);
	return data;
}

const page = async () => {
	const tags: ITag[] = await getAllTags();

	return (
		<div>
			<Header title='Tags' />
			<div>
				{tags?.length > 0 &&
					tags.map((tag) => (
						<Link key={tag._id} href={`/tag/${tag.slug.current}`}>
							<span className='flex flex-col mb-2 p-2 text-lg lowercase dark:bg-gray-900 border dark:border-gray-900 hover:text-purple-500'>
								#{tag.name}({tag.postCount})
							</span>
						</Link>
					))}
			</div>
		</div>
	);
};

export default page;
