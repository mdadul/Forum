import { Chrome, PhoneCallIcon } from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { User } from "@/types";

export default function UserInfoHoverCard({ user }: { user: User }) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <h4 className="font-semibold text-sm ">{user.name}</h4>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-1">
          <p className="text-sm font-medium">{user.email}</p>
          <p className="text-sm inline-flex gap-2">
            <PhoneCallIcon className="size-4" /> {user.phone}
          </p>
          <p className="text-sm inline-flex gap-2 items-center text-primary">
            <Chrome className="size-4" /> {user.website}
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
