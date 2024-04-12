"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GroupMember, Student } from "@prisma/client";
import { Send, UserRound } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Members = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("groupId");
  const [members, setMembers] = useState<Student[]>([]);

  const fetchData = async () => {
    if (!id) return;
    const res = await fetch(`/api/group/data?groupId=${id}`);
    const data = await res.json();
    if (data) {
      const members = data.students.map(
        (student: any) => student.studentClass.student
      );
      setMembers(members);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="flex justify-center">
      <Card className="w-fit">
        <CardHeader>
          <h1 className="text-center font-semibold">Members</h1>
        </CardHeader>
        <CardContent>
          <div className="flex gap-8 justify-center">
            {members.map((member, index) => (
              <MemberSection key={index} member={member} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const MemberSection = ({ member }: { member: Student }) => {
  // const { firstName, lastName, email, fieldOfStudy, year } = member;

  function getInitials() {
    return member.firstName.charAt(0) + member.lastName.charAt(0);
  }

  return (
    <div className="flex flex-col items-center text-xs">
      <Avatar>
        <AvatarImage src="" />
        <AvatarFallback>
          <p className="text-lg">{getInitials()}</p>
        </AvatarFallback>
      </Avatar>
      <p className="text-sm">{member.firstName}</p>
      <Button size="sm" variant={"ghost"} className="gap-1" asChild>
        <Link href={"mailto:" + member.email}>
          <Send />
          <p className="text-xs">Mail</p>
        </Link>
      </Button>
      {/* {fieldOfStudy && <p>{fieldOfStudy}</p>}
      {year && <p>{year}th grade</p>} */}
    </div>
  );
};

export default Members;
