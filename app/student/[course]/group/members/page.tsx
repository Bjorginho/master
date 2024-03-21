"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useStudentData } from "@/context/StudentContext";
import { Member } from "@/hooks/useGroup";
import { Send, UserRound } from "lucide-react";
import Link from "next/link";

const Members = () => {
  const { groupData } = useStudentData();
  const members = groupData.members;

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

const MemberSection = ({ member }: { member: Member }) => {
  const { firstName, lastName, email, fieldOfStudy, year } = member;

  function getInitials() {
    return firstName.charAt(0) + lastName.charAt(0);
  }

  return (
    <div className="flex flex-col items-center text-xs">
      <Avatar>
        <AvatarImage src="" />
        <AvatarFallback>
          <p className="text-lg">{getInitials()}</p>
        </AvatarFallback>
      </Avatar>
      <p className="text-sm">{firstName}</p>
      <Button size="sm" variant={"ghost"} className="gap-1" asChild>
        <Link href={"mailto:" + email}>
          <Send />
          <p className="text-xs">Mail</p>
        </Link>
      </Button>
      {fieldOfStudy && <p>{fieldOfStudy}</p>}
      {year && <p>{year}th grade</p>}
    </div>
  );
};

export default Members;
