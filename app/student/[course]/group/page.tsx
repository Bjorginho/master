"use client";
import NotificationButton from "@/components/NotificationButton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useUser } from "@/context/UserContext";
import { useCourse } from "@/hooks/useCourse";
import { useGroup } from "@/hooks/useGroup";
import { FileText, MessageSquareMore, UsersRound } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";
import { usePageHeader } from "@/context/PageHeaderContext";

export default function Group() {
  const pathname = usePathname();
  const { user } = useUser();
  const { data, loading } = useGroup(pathname, user.name);
  const { course, loadingCourse } = useCourse(pathname);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { setHeaderText } = usePageHeader();

  useEffect(() => {
    if (id) {
      setHeaderText("Group " + id);
    }
  }, [id, setHeaderText]);

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
                  <NotificationButton
                    notificationNumber={null}
                    spanText={"Chat"}
                    href="/chat"
                  />
                  <NotificationButton
                    notificationNumber={null}
                    spanText={"Calendar"}
                    href="/calendar"
                  />
                  <NotificationButton
                    notificationNumber={4}
                    spanText={"Feedback"}
                    href="/feedback"
                  />
                  <NotificationButton
                    notificationNumber={4}
                    spanText={"Contract"}
                    href="/contract"
                  />
                  <NotificationButton
                    notificationNumber={4}
                    spanText={"Report"}
                    href="/report"
                  />
                </CardContent>
              </Card>
              <div className="col-span-6 place-self-center w-full h-full flex flex-col gap-4">
                <h2 className="font-semibold text-center">Upcoming tasks</h2>
                <div className="flex gap-4 justify-center">
                  <Task
                    kind={"assignment"}
                    name={"Assignment 5"}
                    date={new Date()}
                  />
                  <Task
                    kind={"peer review"}
                    name={"Peer review 3"}
                    date={new Date()}
                  />
                </div>
              </div>

              <Card className="col-span-6 h-fit">
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
              <div className="col-span-6">
                <Card>
                  <CardHeader className="">
                    <div className="flex justify-between items-center gap-4">
                      <MessageSquareMore />
                      <h2 className="flex-grow font-bold">
                        Messages from administrator
                      </h2>
                    </div>
                  </CardHeader>
                  <CardContent className="">
                    <Accordion className="grow" type="single" collapsible>
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Update Assignment 5</AccordionTrigger>
                        <AccordionContent>
                          Some changes are made in the description. Please have
                          a look, I have updated the deadline with 2 more days.
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
                    </Accordion>
                  </CardContent>
                </Card>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}

const Task = (props: {
  kind: "assignment" | "peer review";
  name: string;
  date: Date;
}) => {
  const renderIcon = () => {
    switch (props.kind) {
      case "assignment":
        return <FileText size={48} />;
      case "peer review":
        return <UsersRound size={48} />;
    }
  };

  return (
    <div className="flex flex-col gap-2 items-center">
      {renderIcon()}
      <div className="flex flex-col items-center ">
        <h3 className="font-semibold ">{props.name}</h3>
        <p className="text-sm">{props.date.toLocaleDateString()}</p>
        <p className="text-sm">{"16:30"}</p>
      </div>
    </div>
  );
};
