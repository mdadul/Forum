"use client";

import { PostWithComments } from "@/types";
import { MessageCircle, User2 } from "lucide-react";
import React from "react";

export default function PostCard({ post }: { post: PostWithComments }) {
  const [showFull, setShowFull] = React.useState(false);

  const showFullPost = () => {
    setShowFull(true);
  };

  return (
    <div className="border p-3 rounded-lg bg-white" key={post.id}>
      <div className="flex gap-2 items-center">
        <User2 className="size-8 border rounded-full p-1" />
        <h4 className="font-semibold text-sm ">{post.user.name}</h4>
      </div>

      <div className="p-2">
        <p className="text-md font-medium mb-2">{post.title}</p>

        <p className="text-sm">
          {showFull ? (
            post.body
          ) : post.body.length > 100 ? (
            <>
              {post.body.slice(0, 100)}...
              <span
                className="text-primary hover:underline cursor-pointer font-semibold"
                onClick={showFullPost}
              >
                Read more
              </span>
            </>
          ) : (
            post.body
          )}
        </p>
      </div>

      <div className="flex gap-1 items-center justify-end text-primary hover:underline cursor-pointer">
        <MessageCircle className="size-6" />
        <p>{post.comments.length}</p>
      </div>
    </div>
  );
}
