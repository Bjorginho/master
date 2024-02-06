"use client";
import IconWithNotification from "@/components/IconWithNotification";
import WeeklyNotifications from "@/components/WeeklyNotifications";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useUser } from "@/context/UserContext";
import { useCourse } from "@/hooks/useCourse";
import { useGroup } from "@/hooks/useGroup";
import { usePathname } from "next/navigation";

export default function Group() {
  const iconSize = 48;
  const pathname = usePathname();
  const { user } = useUser();
  const { data, loading } = useGroup(pathname, user.name);
  const { course, loadingCourse } = useCourse(pathname);

  return (
    <>
      <main className="container mx-auto mt-8">
        {loading && loadingCourse && <p>Loading...</p>}
        {data && course && (
          <>
            <div className="grid grid-cols-12 gap-6 my-8">
              <Card className="col-span-6">
                <CardHeader>
                  <h2 className="text-center font-bold ">Status Group</h2>
                </CardHeader>
                <CardContent className="flex items-stretch justify-between">
                  <IconWithNotification
                    notificationNumber={null}
                    spanText={"Chat"}
                    href="/chat"
                  />
                  <IconWithNotification
                    notificationNumber={4}
                    spanText={"Feedback"}
                    href="/feedback"
                  />
                  <IconWithNotification
                    notificationNumber={4}
                    spanText={"Contract"}
                    href="/contract"
                  />
                  <IconWithNotification
                    notificationNumber={4}
                    spanText={"Report"}
                    href="/report"
                  />
                </CardContent>
              </Card>
              <WeeklyNotifications className="col-span-6 rounded-lg container py-6" />
              <Card className="col-span-6 ">
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
                        <AvatarFallback className="text-foreground">
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
