import React from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface Member {
  firstName: string;
  lastName: string;
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  members: Member[];
}

const Members: React.FC<Props> = ({ className, members, ...props }) => {
  return (
    <div className={`${className}`}>
      <h2 className="mb-3 text-center">Group Members</h2>
      <div className={`flex gap-3  items-stretch justify-between `} {...props}>
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
      </div>
    </div>
  );
};

export default Members;
