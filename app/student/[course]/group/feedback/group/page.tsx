import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Smile, Meh, Frown } from "lucide-react";

const Group = () => {
  return (
    <div>
      <Card className="col-span-full lg:col-span-6 h-min">
        <CardHeader>
          <h2>Status week 11-13</h2>
        </CardHeader>
        <CardContent className="flex justify-between px-12">
          <StatusWithEmoji value={2.3} description="Participation" />
          <StatusWithEmoji value={3.1} description="Communication" />
          <StatusWithEmoji value={1} description="Collaboration" />
        </CardContent>
      </Card>
    </div>
  );
};

const StatusWithEmoji = (props: { value: number; description: string }) => {
  let icon: React.ReactNode;
  const iconSize = 48;
  if (props.value >= 3) {
    icon = <Smile color="#29ff37" size={iconSize} />;
  } else if (props.value >= 2) {
    icon = <Meh color="#ffbe33" size={iconSize} />;
  } else {
    icon = <Frown color="#ff3333" size={iconSize} />;
  }

  return (
    <div className="flex flex-col items-center">
      {icon}
      <p className="text-xl font-bold">{props.value}</p>
      <p>{props.description}</p>
    </div>
  );
};

export default Group;
