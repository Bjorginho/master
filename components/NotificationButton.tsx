"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
  CalendarDays,
  LucideIcon,
  MessageSquareWarning,
  MessagesSquare,
  ScrollText,
  UsersRound,
  UserRound,
} from "lucide-react";

interface Props {
  num: number | null;
  text: string;
  href: "/chat" | "/contract" | "/report" | "/calendar" | "/peer" | "/group";
}

const NotificationButton = (props: Props) => {
  const { num: notificationNumber, text: spanText, href } = props;
  const pathname = usePathname();
  const router = useRouter();

  const renderIcon = () => {
    let Icon: LucideIcon;
    switch (href) {
      case "/chat":
        Icon = MessagesSquare;
        break;
      case "/peer":
        Icon = UserRound;
        break;
      case "/group":
        Icon = UsersRound;
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
    <Button
      variant="ghost"
      onClick={() => router.push(pathname + href)}
      className="flex flex-col w-fit h-fit relative"
    >
      <div>{renderIcon()}</div>
      <p>{spanText}</p>
      {notificationNumber && notificationNumber > 0 && (
        <span className="absolute top-0 right-0 mt-[-5px] bg-red-500 text-white rounded-full px-2 py-1 text-xs">
          {notificationNumber}
        </span>
      )}
    </Button>
  );
};

export default NotificationButton;
