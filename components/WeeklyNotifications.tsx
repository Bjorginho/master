import { FileText, UsersRound } from "lucide-react";
import React from "react";
import { ReactElement } from "react"; // Add the import statement for ReactElement

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const WeeklyNotifications: React.FC<Props> = ({ className, ...props }) => {
  const iconSize = 64;
  return (
    <div className={`${className} `}>
      <h2 className="font-bold text-center text-lg">Due within this week</h2>
      <div className="flex justify-center gap-8">
        <IconWithText
          icon={<FileText />}
          title={"Øving 5"}
          due={"10. oktober"}
        />
        <IconWithText
          icon={<UsersRound />}
          title={"Peer Review"}
          due={"13. oktober"}
        />
      </div>
    </div>
  );
};

interface IconWithTextProps {
  icon: ReactElement;
  title: string;
  due: string;
}

const IconWithText: React.FC<IconWithTextProps> = ({ icon, title, due }) => {
  const iconSize = 64;
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2">{React.cloneElement(icon, { size: iconSize })}</div>
      <p className="font-bold text-md">{title}</p>
      <p>{due}</p>
    </div>
  );
};

export default WeeklyNotifications;
