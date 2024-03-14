"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  MessageSquareWarning,
  MessagesSquare,
  ScrollText,
  Sticker,
} from "lucide-react";

interface IconWithNotificationProps {
  notificationNumber: number | null;
  spanText: string;
  href: string;
}

const IconWithNotification: React.FC<IconWithNotificationProps> = ({
  notificationNumber,
  spanText,
  href,
}) => {
  const pathname = usePathname();
  const iconSize = 48;

  const renderIcon = () => {
    if (href === "/chat") {
      return <MessagesSquare size={iconSize} className="text-foreground" />;
    } else if (href === "/feedback") {
      return <Sticker size={iconSize} className="text-foreground" />;
    } else if (href === "/contract") {
      return <ScrollText size={iconSize} className="text-foreground" />;
    } else if (href === "/report") {
      return (
        <MessageSquareWarning size={iconSize} className="text-foreground" />
      );
    }
  };

  return (
    <div className="flex flex-col items-center relative">
      <Button asChild size={"icon"} variant={"ghost"}>
        <Link href={`${pathname}${href}`}>{renderIcon()}</Link>
      </Button>
      <p>{spanText}</p>
      {notificationNumber && notificationNumber > 0 && (
        <span className="absolute top-0 right-0 mt-[-5px] bg-red-500 text-white rounded-full px-2 py-1 text-xs">
          {notificationNumber}
        </span>
      )}
    </div>
  );
};

export default IconWithNotification;
