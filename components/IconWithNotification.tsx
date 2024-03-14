"use client";

import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  CalendarDays,
  LucideIcon,
  MessageSquareWarning,
  MessagesSquare,
  ScrollText,
  Sticker,
} from "lucide-react";

interface Props {
  notificationNumber: number | null;
  spanText: string;
  href: "/chat" | "/feedback" | "/contract" | "/report" | "/calendar";
}

const IconWithNotification = (props: Props) => {
  const { notificationNumber, spanText, href } = props;
  const pathname = usePathname();

  const renderIcon = () => {
    let Icon: LucideIcon;
    switch (href) {
      case "/chat":
        Icon = MessagesSquare;
        break;
      case "/feedback":
        Icon = Sticker;
        break;
      case "/contract":
        Icon = ScrollText;
        break;
      case "/report":
        Icon = MessageSquareWarning;
        break;
      case "/calendar":
        Icon = CalendarDays;
        break;
    }
    return <Icon size={48} className="text-foreground" />;
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
