import PostCard from "@/components/brand/post";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto py-5 flex gap-4 flex-col">
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
}
