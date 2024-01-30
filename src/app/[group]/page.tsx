import IconWithNotification from "@/components/IconWithNotification";
import WeeklyNotifications from "@/components/WeeklyNotifications";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  MessageSquareWarning,
  MessagesSquare,
  MoveLeft,
  ScrollText,
  Sticker,
} from "lucide-react";
import Link from "next/link";

const members = [
  { firstName: "Andreas", lastName: "Berg" },
  { firstName: "John", lastName: "" },
  { firstName: "Sverre", lastName: "" },
  { firstName: "Maggy", lastName: "" },
  { firstName: "Bruno", lastName: "" },
];

export default function Page({ params }: { params: { group: string } }) {
  const iconSize = 48;

  return (
    <main className="container mx-auto mt-8">
      <div className="flex justify-between w-full">
        <Link href={"/"}>
          <Button variant={"outline"} className="rounded-full">
            <MoveLeft />
          </Button>
        </Link>
        <h1 className="text-xl">Group {params.group}</h1>
        <Link href="#">
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </Link>
      </div>
      <div className="grid grid-cols-12 gap-6 my-8">
        <Card className="col-span-6 bg-cardX">
          <CardHeader>
            <h2 className="text-center font-bold ">Status Group</h2>
          </CardHeader>
          <CardContent className="flex items-stretch justify-between">
            <IconWithNotification
              iconSize={iconSize}
              Icon={MessagesSquare}
              notificationNumber={null}
              spanText={"Chat"}
            />
            <IconWithNotification
              iconSize={iconSize}
              Icon={Sticker}
              notificationNumber={4}
              spanText={"Feedback"}
            />
            <IconWithNotification
              iconSize={iconSize}
              Icon={ScrollText}
              notificationNumber={4}
              spanText={"Contract"}
            />
            <IconWithNotification
              iconSize={iconSize}
              Icon={MessageSquareWarning}
              notificationNumber={4}
              spanText={"Report"}
            />
          </CardContent>
        </Card>
        <WeeklyNotifications className="col-span-6 rounded-lg container py-6" />
        <Card className="col-span-6 bg-cardX">
          <CardHeader>
            <h2 className="text-center font-bold">Group members</h2>
          </CardHeader>
          <CardContent className="flex items-stretch justify-between">
            {members.map((member, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <Avatar>
                  <AvatarFallback>
                    {member.firstName.charAt(0)}
                    {member.lastName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                {member.firstName}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
