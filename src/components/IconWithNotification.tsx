interface IconWithNotificationProps {
  iconSize: number;
  Icon: React.ElementType;
  notificationNumber: number | null;
  spanText: string;
}

const IconWithNotification: React.FC<IconWithNotificationProps> = ({
  iconSize,
  Icon,
  notificationNumber,
  spanText,
}) => {
  return (
    <div className="flex flex-col items-center relative">
      <Icon size={iconSize} />
      {notificationNumber && notificationNumber > 0 && (
        <span className="absolute top-0 right-0 mt-[-5px] mr-[-5px] bg-red-500 text-white rounded-full px-2 py-1 text-xs">
          {notificationNumber}
        </span>
      )}
      <span>{spanText}</span>
    </div>
  );
};

export default IconWithNotification;
