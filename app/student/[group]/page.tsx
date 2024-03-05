"use client";
import { CourseCarousel } from "@/components/Carousel/Carousel";
import IconWithNotification from "@/components/IconWithNotification";
import WeeklyNotifications from "@/components/WeeklyNotifications";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useUser } from "@/context/UserContext";
import { useCourse } from "@/hooks/useCourse";
import { useGroup } from "@/hooks/useGroup";
import { MessageSquareMore } from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
              <div className="col-span-6 place-self-center ">
                <CourseCarousel />
              </div>
              <div className="col-span-6">
                <Card>
                  <CardHeader className="">
                    <div className="flex justify-between items-center gap-4">
                      <MessageSquareMore />
                      <h2 className="flex-grow font-bold">Announcements</h2>
                    </div>
                  </CardHeader>
                  <CardContent className="">
                    <Accordion className="grow" type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>
                          Happy holiday students!
                        </AccordionTrigger>
                        <AccordionContent>
                          Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>
                          Remember to evaluate before the holiday
                        </AccordionTrigger>
                        <AccordionContent>
                          Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>
                          No lecture this week.
                        </AccordionTrigger>
                        <AccordionContent>
                          Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
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
