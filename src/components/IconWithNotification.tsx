"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

interface IconWithNotificationProps {
  iconSize: number;
  Icon: React.ElementType;
  notificationNumber: number | null;
  spanText: string;
  href: string;
}

const IconWithNotification: React.FC<IconWithNotificationProps> = ({
  iconSize,
  Icon,
  notificationNumber,
  spanText,
  href,
}) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center relative">
      <Button asChild size={"lg"} className="bg-transparent text-[#000]">
        <Link href={`${pathname}${href}`}>
          <Icon iconSize={iconSize} />
        </Link>
      </Button>
      <p>{spanText}</p>
      {notificationNumber && notificationNumber > 0 && (
        <span className="absolute top-0 right-0 mt-[-5px] mr-[-5px] bg-red-500 text-white rounded-full px-2 py-1 text-xs">
          {notificationNumber}
        </span>
      )}
    </div>
  );
};

export default IconWithNotification;
