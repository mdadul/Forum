import PostCard from "@/components/brand/post";
import {
  fetchPostsData,
} from "@/lib/fetchData";
import { PostWithComments } from "@/types";

export default async function Home() {
  const postData = await fetchPostsData();

  return (
    <div className="max-w-3xl mx-auto py-12 px-2 flex gap-2 flex-col">
      {postData.map((post: PostWithComments) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}
