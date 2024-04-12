"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  CalendarDays,
  FileText,
  LucideIcon,
  MessageSquareMore,
  MessageSquareWarning,
  MessagesSquare,
  ScrollText,
  UserRound,
  UsersRound,
} from "lucide-react";
import {
  usePathname,
  useSearchParams,
  useRouter,
  useParams,
} from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import { usePageHeader } from "@/context/PageHeaderContext";
import { useStudentData } from "@/context/StudentContext";
import Link from "next/link";
import ChannelButton from "@/components/Button/Channel";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Announcement,
  Assignment,
  AssignmentReview,
  Channel,
  GroupReview,
  Student,
} from "@prisma/client";
import {
  fetchAllAssignmentReviews,
  fetchAllGroupReviews,
  fetchAnnouncements,
  fetchAssignments,
} from "@/services/fetch";
import { format } from "date-fns";

export default function GroupPage() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const studentId = searchParams.get("studentId");
  const params = useParams<{ course: string; studentId: string }>();
  const { setHeaderText } = usePageHeader();
  const { groupData } = useStudentData();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [members, setMembers] = useState<Student[]>([]);
  const [channels, setChannels] = useState<Channel[]>([]);
  const [allAssignments, setAllAssignments] = useState<Assignment[]>([]);
  const [allAssignmentReviews, setAllAssignmentReviews] = useState<
    AssignmentReview[]
  >([]);
  const [allGroupReviews, setAllGroupReviews] = useState<GroupReview[]>([]);

  const fetchData = async () => {
    // Assignments
    if (allAssignments.length === 0 && id) {
      const assignments: Assignment[] = await fetchAssignments(id);
      setAllAssignments(assignments);
    }
    // Announcements
    if (params.course && announcements.length === 0) {
      const announcements: Announcement[] = await fetchAnnouncements(
        params.course
      );
      setAnnouncements(announcements);
    }
    // Assignment Reviews
    if (allAssignmentReviews.length === 0 && id && studentId) {
      const reviews: AssignmentReview[] = await fetchAllAssignmentReviews(
        id,
        studentId
      );
      setAllAssignmentReviews(reviews);
    }
    // Group Reviews
    if (allGroupReviews.length === 0 && id) {
      const reviews: GroupReview[] = await fetchAllGroupReviews(id);
      setAllGroupReviews(reviews);
    }
    // Group Data
    const res = await fetch(`/api/group/data?groupId=${id}`);
    const data = await res.json();
    if (data) {
      setChannels(data.channels);
      // setAllAssignments(data.deliveredAssignments);
      const members = data.students.map(
        (student: any) => student.studentClass.student
      );
      setMembers(members);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (id) {
      setHeaderText("Group " + id);
    }
  }, [id, setHeaderText]);

  return (
    <>
      <main className="mx-auto mt-8">
        {groupData && (
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
                    Icon={MessagesSquare}
                  />
                  <NotificationButton
                    num={null}
                    text={"Calendar"}
                    href="/calendar"
                    Icon={CalendarDays}
                  />
                  <NotificationButton
                    num={4}
                    text={"Contract"}
                    href={`/contract?groupId=${id}`}
                    Icon={ScrollText}
                  />
                  <NotificationButton
                    num={4}
                    text={"Peer Reviews"}
                    href="/peer"
                    Icon={UserRound}
                  />
                  <NotificationButton
                    num={4}
                    text={"Group Reviews"}
                    href="/group"
                    Icon={UsersRound}
                  />
                </CardContent>
              </Card>
              <div className="col-span-6 place-self-center w-full h-full flex flex-col gap-4">
                <h2 className="font-semibold text-center">Upcoming tasks</h2>
                <div className="grid grid-cols-4 gap-2">
                  {allAssignmentReviews.map((assignmentReview, index) => (
                    <Link
                      key={index}
                      href={{
                        pathname: pathname + "/peer",
                        query: { id: assignmentReview.id, groupId: id },
                      }}
                      className="flex flex-col gap-2 items-center hover:bg-gray-100 hover:shadow-md p-2 rounded-md cursor-pointer"
                    >
                      <UserRound size={48} />
                      <div className="flex flex-col items-center ">
                        <h3 className="font-semibold text-sm">
                          {"Review Ass." + assignmentReview.id}
                        </h3>
                        <p className="text-sm">
                          {new Date(
                            assignmentReview.dueDate
                          ).toLocaleDateString()}
                        </p>
                        <p className="text-sm">
                          {format(new Date(assignmentReview.dueDate), "HH:mm")}
                        </p>
                      </div>
                    </Link>
                  ))}
                  {allAssignments.map((assignment, index) => (
                    <Link
                      key={index}
                      href={{
                        pathname: pathname + "/assignment",
                        query: { id: assignment.id, groupId: id },
                      }}
                      className="flex flex-col gap-2 items-center hover:bg-gray-100 hover:shadow-md p-2 rounded-md cursor-pointer"
                    >
                      <FileText size={48} />
                      <div className="flex flex-col items-center ">
                        <h3 className="font-semibold text-sm">
                          {assignment.title}
                        </h3>
                        <p className="text-sm">
                          {new Date(assignment.dueDate).toLocaleDateString()}
                        </p>
                        <p className="text-sm">
                          {format(new Date(assignment.dueDate), "HH:mm")}
                        </p>
                      </div>
                    </Link>
                  ))}
                  {allGroupReviews.map((gr, index) => (
                    <Link
                      key={index}
                      href={{
                        pathname: pathname + "/group",
                        query: { reviewId: gr.id },
                      }}
                      className="flex flex-col gap-2 items-center hover:bg-gray-100 hover:shadow-md p-2 rounded-md cursor-pointer"
                    >
                      <FileText size={48} />
                      <div className="flex flex-col items-center ">
                        <h3 className="font-semibold text-sm">
                          {"Group review " + gr.id}
                        </h3>
                        <p className="text-sm">
                          {new Date(gr.dueDate).toLocaleDateString()}
                        </p>
                        <p className="text-sm">
                          {format(new Date(gr.dueDate), "HH:mm")}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Card className="col-span-4 h-full">
                <CardHeader>
                  <h2 className="text-center font-bold">Channels</h2>
                </CardHeader>
                <CardContent className="flex justify-center gap-2">
                  {channels.length === 0 && (
                    <div className="flex flex-col gap-2 items-center">
                      <p>No linked channels!</p>
                      <Button variant={"outline"} asChild>
                        <Link href={pathname + "/channels"}>
                          Link channel here
                        </Link>
                      </Button>
                    </div>
                  )}
                  {channels.map((channel, index) => (
                    <ChannelButton key={index} channel={channel} />
                  ))}
                </CardContent>
                <CardFooter className="justify-center">
                  <Link
                    href={{
                      pathname: pathname + "/channels",
                      query: { groupId: id },
                    }}
                    className={cn(channels.length === 0 && "hidden")}
                  >
                    <p className="text-sm">Manage channels</p>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="col-span-4 h-full">
                <CardHeader>
                  <h2 className="text-center font-bold">Group members</h2>
                </CardHeader>
                <CardContent className="flex items-stretch justify-between">
                  {members.map((member, index) => (
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
                <CardFooter className="justify-center">
                  <Link
                    href={{
                      pathname: pathname + "/members",
                      query: { groupId: id },
                    }}
                  >
                    <p className="text-sm">Go to group page</p>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="col-span-4 h-full">
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
                    {announcements.slice(0, 2).map((announcement, index) => (
                      <AccordionItem
                        key={index}
                        value={announcement.id.toString()}
                      >
                        <AccordionTrigger>
                          <h3>{announcement.title}</h3>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p>{announcement.content}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
                <CardFooter className="justify-center">
                  <Link
                    href={{ pathname: pathname + "/announcements", query: {} }}
                  >
                    <p className="text-sm">View all announcements</p>
                  </Link>
                </CardFooter>
              </Card>
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

const NotificationButton = (props: {
  disabled?: boolean;
  num: number | null;
  text: string;
  href: string;
  Icon: LucideIcon;
}) => {
  const { num: notificationNumber, text: spanText, href, Icon } = props;
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Button
      disabled={props.disabled}
      variant="ghost"
      onClick={() => router.push(pathname + href)}
      className="flex flex-col w-fit h-fit relative"
    >
      <div>
        <Icon size={48} className="text-foreground" />
      </div>
      <p>{spanText}</p>
      {notificationNumber && notificationNumber > 0 && (
        <span className="absolute top-0 right-0 mt-[-5px] bg-red-500 text-white rounded-full px-2 py-1 text-xs">
          {notificationNumber}
        </span>
      )}
    </Button>
  );
};

// const Test = ({
//   kind,
//   task,
//   Icon,
// }: {
//   kind: "peer" | "assignment" | "group";
//   task: PeerReview | Assignment | GroupReview;
//   Icon: LucideIcon;
// }) => {
//   const router = useRouter();
//   const pathname = usePathname();

//   const handleClick = () => {
//     switch (kind) {
//       case "peer":
//         router.push(pathname + "/peer");
//         break;
//       case "assignment":
//         router.push(pathname + "/assignment");
//         break;
//       case "group":
//         router.push(pathname + "/group");
//         console.log("group");
//         break;
//     }
//   };

//   return (
//     <div
//       className="flex flex-col gap-2 items-center hover:bg-gray-100 hover:shadow-md p-2 rounded-md cursor-pointer"
//       onClick={handleClick}
//     >
//       <Icon size={48} />
//       <div className="flex flex-col items-center ">
//         <h3 className="font-semibold text-sm">{task.dueDate}</h3>
//         <p className="text-sm">{task.dueDate.toLocaleDateString()}</p>
//         <p className="text-sm">{"16:30"}</p>
//       </div>
//     </div>
//   );
// };
