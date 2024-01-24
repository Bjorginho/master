import {
  MessageSquareWarning,
  MessagesSquare,
  ScrollText,
  Sticker,
} from "lucide-react";
import IconWithNotification from "./IconWithNotification";

interface StatusGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  iconSize: number;
}

const StatusGroup: React.FC<StatusGroupProps> = ({
  iconSize,
  className,
  ...props
}) => {
  return (
    <div className={`${className}`}>
      <h2 className="mb-3 text-center">Status Group</h2>
      <div className={`flex items-stretch justify-between px-7`} {...props}>
        <IconWithNotification
          iconSize={iconSize}
          Icon={MessagesSquare}
          notificationNumber={1}
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
      </div>
    </div>
  );
};
export default StatusGroup;
