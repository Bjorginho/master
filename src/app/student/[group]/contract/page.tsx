import GroupContract from "@/components/Contract/Contract";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { format, formatISO, parseISO } from "date-fns";
import { Check, UserRound } from "lucide-react";

export default function Contract() {
  return (
    <div className="container pb-12 flex gap-10 mt-5">
      <div className="flex-grow-2">
        <GroupContract />
      </div>
      <div className="flex flex-col gap-10 flex-grow">
        <Card className="h-min">
          <CardHeader>
            <h1>Your status</h1>
          </CardHeader>
          <CardContent className="flex justify-between gap-16">
            <div className="flex flex-col items-center">
              <Check color="#24d630" size={48} strokeWidth={3} />
              <p className="font-semibold">Signed</p>
              <p>{formatDate(new Date())}</p>
            </div>
            <div></div>
            <div></div>
          </CardContent>
        </Card>
        <Card className="h-min">
          <CardHeader>
            <h1>Status group members </h1>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center gap-16">
              <div>
                <h2 className="font-bold text-center">Signed</h2>
                <div className="flex justify-center gap-8">
                  <UserAvatar firstName="Kaja" signedDate={new Date()} />
                  <UserAvatar firstName="Per" signedDate={new Date()} />
                  <UserAvatar firstName="Anna" signedDate={new Date()} />
                  <UserAvatar firstName="Ola" signedDate={new Date()} />
                </div>
              </div>
              <div>
                <h2 className="font-bold text-center">Not signed</h2>
                <div className="flex justify-center gap-8">
                  <UserAvatar firstName="Jenny" />
                  <UserAvatar firstName="Terje" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

const formatDate = (date: Date) => {
  return format(parseISO(date.toISOString()), "MMM. dd ");
};

const UserAvatar = (props: { firstName: string; signedDate?: Date }) => {
  const date = props.signedDate ? formatDate(props.signedDate) : null;
  return (
    <div className="flex flex-col items-center">
      <UserRound className="w-14 h-14" />
      <p>{props.firstName}</p>
      {date && <p className="text-xs inline-block">{date}</p>}
    </div>
  );
};
