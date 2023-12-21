export const revalidate = 60;
import Header from "@/components/Header";
import Post from "@/components/Post";
import { client } from "@/sanity/lib/client";
import { IPost } from "@/utils/interface";

async function getPosts() {
	const query = `
	*[_type == "post"]
	{
		title, 
		slug,
		publishedAt,
		excerpt,
		tags[] -> {_id,slug,name}  
}`;
	const data = await client.fetch(query);
	return data;
}

export default async function Home() {
	const posts: IPost[] = await getPosts();

	return (
		<div>
			<Header title='articles' tags />
			<div>
				{posts?.length > 0 &&
					posts?.map((post) => <Post key={post?._id} post={post} />)}
			</div>
		</div>
	);
}
