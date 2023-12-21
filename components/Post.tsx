import { IPost } from "@/utils/interface";
import { ADLaM_Display, VT323 } from "next/font/google";
import Link from "next/link";
import React from "react";

const headline = ADLaM_Display({ weight: ["400"], subsets: ["latin"] });
const date = VT323({ weight: ["400"], subsets: ["latin"] });

const Post = ({ post }: { post: IPost }) => {
	return (
		<div className={cardStyle}>
			<Link href={`/posts/${post?.slug?.current}`}>
				<h2 className={`${headline.className} text-2xl dark:text-slate-300`}>
					{post?.title}
				</h2>
				<p className={`${date.className} my-2 text-purple-400`}>
					{new Date(post?.publishedAt).toDateString()}
				</p>
				<p className='dark:text-gray-400 mb-4 line-clamp-2'>{post?.excerpt}</p>
			</Link>
			{/* tags */}

			<div>
				{post?.tags?.map((tag) => (
					<span
						key={tag._id}
						className='mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-900 border dark:border-gray-900'
					>
						#{tag.name}
					</span>
				))}
			</div>
		</div>
	);
};

export default Post;

const cardStyle = ` 
mb-8
p-4
border
border-gray-300
rounded-md
shadow-sm
shadow-purple-500
hover:text-white
hover:dark:bg-gray-700
`;
