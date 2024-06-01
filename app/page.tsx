import PostCard from "@/components/brand/post";
import { getComment, getPosts, getUsers } from "@/lib/fetchData";
import { Comment, Post, PostWithComments, PostWithUser, User } from "@/types";
import { MessageCircle, User2 } from "lucide-react";

export default async function Home() {
  const posts = await getPosts();
  const users = await getUsers();
  const comments = await getComment();

  const postsWithUser = posts.map((post: Post) => {
    const user = users.find((user: User) => user.id === post.userId);
    return { ...post, user };
  });

  const postsWithComments = postsWithUser.map((post: PostWithUser) => {
    const commentsForPost = comments.filter(
      (comment: Comment) => comment.postId === post.id
    );
    return { ...post, comments: commentsForPost };
  });

  return (
    <div className="max-w-6xl mx-auto py-12 flex gap-4 flex-col">
      {postsWithComments.map((post: PostWithComments) => (
        <PostCard post={post} key={post.id} />
      ))}
    </div>
  );
}
