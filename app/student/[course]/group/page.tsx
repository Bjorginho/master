"use client";
import NotificationButton from "@/components/NotificationButton";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  FileText,
  LucideIcon,
  MessageSquareMore,
  UserRound,
  UsersRound,
} from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";
import { usePageHeader } from "@/context/PageHeaderContext";
import { Button } from "@/components/ui/button";
import { useStudentData } from "@/context/StudentContext";
import Link from "next/link";
import PeerReview from "./peer/page";

export default function Group() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const { setHeaderText } = usePageHeader();
  const { groupData, course: currentCourse } = useStudentData();

  useEffect(() => {
    if (id) setHeaderText("Group " + id);
  }, [id, setHeaderText]);

  return (
    <>
      <main className="mx-auto mt-8">
        {groupData && currentCourse && (
          <>
            <div className="grid grid-cols-12 gap-6 my-8">
              <Card className="col-span-6">
                <CardHeader>
                  <h2 className="text-center font-bold ">Status Group</h2>
                </CardHeader>
                <CardContent className="flex items-stretch justify-between">
                  <NotificationButton
                    disabled
                    num={null}
                    text={"Chat"}
                    href="/chat"
                  />
                  <NotificationButton
                    num={null}
                    text={"Calendar"}
                    href="/calendar"
                  />
                  <NotificationButton
                    num={4}
                    text={"Contract"}
                    href="/contract"
                  />
                  <NotificationButton
                    num={4}
                    text={"Peer Reviews"}
                    href="/peer"
                  />
                  <NotificationButton
                    num={4}
                    text={"Group Reviews"}
                    href="/group"
                  />
                </CardContent>
              </Card>
              <div className="col-span-6 place-self-center w-full h-full flex flex-col gap-4">
                <h2 className="font-semibold text-center">Upcoming tasks</h2>
                <div className="grid grid-cols-4 gap-2 ">
                  {groupData?.peerReviews?.map((pr, index) => (
                    <Test key={index} kind="peer" task={pr} Icon={UserRound} />
                  ))}
                  {groupData?.assignments?.map((assignment, index) => (
                    <Test
                      key={index + 99}
                      kind="assignment"
                      task={assignment}
                      Icon={FileText}
                    />
                  ))}
                  {groupData?.groupReviews?.map((gr, index) => (
                    <Test
                      key={index + 999}
                      kind="group"
                      task={gr}
                      Icon={UsersRound}
                    />
                  ))}
                </div>
              </div>

              <Card className="col-span-6 h-fit">
                <CardHeader>
                  <h2 className="text-center font-bold">Group members</h2>
                </CardHeader>
                <CardContent className="flex items-stretch justify-between">
                  {groupData.members.map((member, index) => (
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
                <CardFooter className="flex justify-end">
                  <Button
                    variant="ghost"
                    className="text-sm"
                    onClick={() => router.push(pathname + "/members")}
                  >
                    Go to group
                  </Button>
                </CardFooter>
              </Card>
              <div className="col-span-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center gap-4">
                      <MessageSquareMore />
                      <h2 className="flex-grow font-bold">
                        Messages from administrator
                      </h2>
                    </div>
                  </CardHeader>
                  <CardContent>
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
            <div className="flex justify-center mb-4">
              <Link href={pathname + "/report"}>
                <p className="text-xs">
                  Do you experience any issues with the group?{" "}
                  <span className="underline">Report it here.</span>
                </p>
              </Link>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export interface Assignment {
  name: string;
  dueDate: Date;
}

export interface PeerReview {
  name: string;
  dueDate: Date;
}

export interface GroupReview {
  name: string;
  dueDate: Date;
}

const Test = ({
  kind,
  task,
  Icon,
}: {
  kind: "peer" | "assignment" | "group";
  task: PeerReview | Assignment | GroupReview;
  Icon: LucideIcon;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    switch (kind) {
      case "peer":
        router.push(pathname + "/peer");
        break;
      case "assignment":
        router.push(pathname + "/assignment");
        break;
      case "group":
        router.push(pathname + "/group");
        console.log("group");
        break;
    }
  };

  return (
    <div
      className="flex flex-col gap-2 items-center hover:bg-gray-100 hover:shadow-md p-2 rounded-md cursor-pointer"
      onClick={handleClick}
    >
      <Icon size={48} />
      <div className="flex flex-col items-center ">
        <h3 className="font-semibold text-sm">{task.name}</h3>
        <p className="text-sm">{task.dueDate.toLocaleDateString()}</p>
        <p className="text-sm">{"16:30"}</p>
      </div>
    </div>
  );
};
