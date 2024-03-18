import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Frown, Meh, Smile } from "lucide-react";

const upcomingFeedback = [
  {
    title: "Feedback on your work",
    description:
      "You will receive feedback from your group members on your work. This is a good opportunity to get feedback on your work and to improve your work.",
  },
  {
    title: "Feedback on your work",
    description:
      "You will receive feedback from your group members on your work. This is a good opportunity to get feedback on your work and to improve your work.",
  },
];

const givenFeedback = [
  {
    title: "Feedback on your work",
    description:
      "You will receive feedback from your group members on your work. This is a good opportunity to get feedback on your work and to improve your work.",
  },
  {
    title: "Feedback on your work",
    description:
      "You will receive feedback from your group members on your work. This is a good opportunity to get feedback on your work and to improve your work.",
  },
];

export default function Feedback() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <Card className="col-span-full lg:col-span-6">
        <CardHeader>
          <h2>Upcoming feedback</h2>
        </CardHeader>
        <CardContent>
          {upcomingFeedback.map((feedback, index) => (
            <FeedbackBox
              key={index}
              title={feedback.title}
              description={feedback.description}
            />
          ))}
        </CardContent>
      </Card>
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
      <Card className="col-span-full lg:col-span-6">
        <CardHeader>
          <h2>Previous feedbacks</h2>
        </CardHeader>
        <CardContent>
          {givenFeedback.map((feedback, index) => (
            <FeedbackBox
              key={index}
              title={feedback.title}
              description={feedback.description}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

const FeedbackBox = (props: { title: string; description: string }) => {
  return (
    <Card className="mb-3">
      <CardHeader>
        <h3>{props.title}</h3>
      </CardHeader>
      <CardContent>
        <p>{props.description}</p>
      </CardContent>
    </Card>
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
