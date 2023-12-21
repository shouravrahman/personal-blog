export const revalidate = 60;
import Header from "@/components/Header";
import Post from "@/components/Post";
import { client } from "@/sanity/lib/client";
import { IParams, IPost } from "@/utils/interface";

async function getPostsByTag(tag: string) {
	const query = `
	*[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]
   {
		title, 
		slug,
      body,
		publishedAt,
		excerpt,
		tags[] -> {_id,slug,name}  
}
   
	`;
	const data = await client.fetch(query);
	return data;
}

const page = async ({ params }: IParams) => {
	const posts: IPost[] = await getPostsByTag(params.slug);

	return (
		<div>
			<Header title={`#${params.slug}`} tags />

			<div>
				{posts?.map((post) => (
					<Post post={post} key={post._id} />
				))}
			</div>
		</div>
	);
};

export default page;
