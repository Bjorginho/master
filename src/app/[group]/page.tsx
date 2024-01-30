"use client";
import Header from "@/components/Header";
import IconWithNotification from "@/components/IconWithNotification";
import WeeklyNotifications from "@/components/WeeklyNotifications";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useUser } from "@/context/UserContext";
import { useCourse } from "@/hooks/useCourse";
import { useGroup } from "@/hooks/useGroup";
import {
  MessageSquareWarning,
  MessagesSquare,
  MoveLeft,
  ScrollText,
  Sticker,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Group() {
  const iconSize = 48;
  const pathname = usePathname();
  const { user } = useUser();
  const { data, loading } = useGroup(pathname, user.name);
  const { course, loadingCourse } = useCourse(pathname);

  const getInitials = () => {
    try {
      const username = user.name.split(" ");
      return username[0].charAt(0) + username[1].charAt(0);
    } catch (error) {
      return user.name.charAt(0);
    }
  };

  return (
    <>
      <Header text={course ? course.name : "loading"} />
      <main className="container mx-auto mt-8">
        {loading && loadingCourse && <p>Loading...</p>}
        {data && course && (
          <>
            <div className="flex justify-between w-full">
              <Link href={"/"}>
                <Button variant={"outline"} className="rounded-full">
                  <MoveLeft />
                </Button>
              </Link>
              <h1 className="text-xl">Group {data && data.id}</h1>
              <Link href="#">
                <Avatar>
                  <AvatarFallback>{getInitials()}</AvatarFallback>
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
                  {data.members.map((member, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2"
                    >
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
          </>
        )}
      </main>
    </>
  );
}
