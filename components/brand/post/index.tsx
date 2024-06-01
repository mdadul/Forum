"use client";

import React, { useState } from "react";

import { PostWithComments } from "@/types";
import { Chrome, PhoneCallIcon, User2 } from "lucide-react";
import UserInfoHoverCard from "../user/hover-card";
import { Comments } from "../comments";

export default function PostCard({ post }: { post: PostWithComments }) {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="border p-3 rounded-lg bg-white" key={post.id}>
      <div className="flex gap-2 items-center">
        <User2 className="size-8 border rounded-full p-1" />
        <UserInfoHoverCard user={post.user} />
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
                onClick={() => setShowFull(true)}
              >
                Read more
              </span>
            </>
          ) : (
            post.body
          )}
        </p>
      </div>

      <div className="hidden md:flex gap-1 items-center justify-end text-primary hover:underline cursor-pointer">
        <Comments post={post} isDrawer={false} />
      </div>

      <div className="md:hidden flex gap-1 items-center justify-end text-primary hover:underline cursor-pointer">
        <Comments post={post} isDrawer={true} />
      </div>
    </div>
  );
}
