"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PostWithComments } from "@/types";
import { Chrome, PhoneCallIcon, User2 } from "lucide-react";
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
        <HoverCard>
          <HoverCardTrigger>
            <h4 className="font-semibold text-sm ">{post.user.name}</h4>
          </HoverCardTrigger>
          <HoverCardContent>
            <div className="space-y-1">
              <p className="text-sm font-medium">{post.user.email}</p>
              <p className="text-sm inline-flex gap-2">
                <PhoneCallIcon className="size-4" /> {post.user.phone}
              </p>
              <p className="text-sm inline-flex gap-2 items-center text-primary">
                <Chrome className="size-4" />
                {post.user.website}
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
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

      <div className="hidden md:flex gap-1 items-center justify-end text-primary hover:underline cursor-pointer">
        <Dialog>
          <DialogTrigger>{post.comments.length + " comments"}</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Comments for post: {post.title.slice(0, 30)}...
              </DialogTitle>
              <DialogDescription>
                {post.comments.length} comments
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-[calc(90vh-8rem)] pb-6">
              <div className="flex flex-col gap-2 ">
                {post.comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="flex flex-col gap-4 border hover:shadow-md p-2 rounded-lg"
                  >
                    <div className="flex gap-2 items-center">
                      <User2 className="size-8 border rounded-full p-1" />
                      <h4 className="font-semibold text-gray-800 text-sm ">
                        {comment.email}
                      </h4>
                    </div>
                    <p className="text-sm">{comment.body}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </DialogContent>
        </Dialog>
      </div>

      <div className="md:hidden flex gap-1 items-center justify-end text-primary hover:underline cursor-pointer">
        <Drawer>
          <DrawerTrigger>{post.comments.length + " Comments"} </DrawerTrigger>
          <DrawerContent className="bg-muted">
            <DrawerHeader>
              <DrawerTitle>
                Comments for post: {post.title.slice(0, 30)}...
              </DrawerTitle>
              <DrawerDescription>
                {post.comments.length} comments
              </DrawerDescription>
            </DrawerHeader>
            <ScrollArea className="h-[calc(90vh-8rem)] pb-6">
              <div className="flex flex-col gap-2 px-4">
                {post.comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="flex flex-col gap-4 border bg-white hover:shadow-md p-2 rounded-lg"
                  >
                    <div className="flex gap-2 items-center">
                      <User2 className="size-8 border rounded-full p-1" />
                      <h4 className="font-semibold text-gray-800 text-sm ">
                        {comment.email}
                      </h4>
                    </div>
                    <p className="text-sm">{comment.body}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
