import { User2 } from "lucide-react";

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
import { ScrollArea } from "@/components/ui/scroll-area";
import { PostWithComments } from "@/types";

export function Comments({
  post,
  isDrawer,
}: {
  post: PostWithComments;
  isDrawer: boolean;
}) {
  const Wrapper = isDrawer ? Drawer : Dialog;
  const WrapperTrigger = isDrawer ? DrawerTrigger : DialogTrigger;
  const WrapperContent = isDrawer ? DrawerContent : DialogContent;
  const WrapperHeader = isDrawer ? DrawerHeader : DialogHeader;
  const WrapperTitle = isDrawer ? DrawerTitle : DialogTitle;
  const WrapperDescription = isDrawer ? DrawerDescription : DialogDescription;

  return (
    <Wrapper>
      <WrapperTrigger>{`${post.comments.length} comments`}</WrapperTrigger>
      <WrapperContent className={isDrawer ? "bg-muted" : ""}>
        <WrapperHeader>
          <WrapperTitle>
            Comments for post: {post.title.slice(0, 30)}...
          </WrapperTitle>
          <WrapperDescription>{`${post.comments.length} comments`}</WrapperDescription>
        </WrapperHeader>
        <ScrollArea className="h-[calc(90vh-8rem)] pb-6">
          <div className="flex flex-col gap-2 px-4">
            {post.comments.map((comment) => (
              <div
                key={comment.id}
                className="flex flex-col gap-4 border bg-white hover:shadow-md p-2 rounded-lg"
              >
                <div className="flex gap-2 items-center">
                  <User2 className="size-8 border rounded-full p-1" />
                  <h4 className="font-semibold text-gray-800 text-sm">
                    {comment.email}
                  </h4>
                </div>
                <p className="text-sm">{comment.body}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </WrapperContent>
    </Wrapper>
  );
}
