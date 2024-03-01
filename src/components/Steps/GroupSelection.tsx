import { Dispatch, SetStateAction, use } from "react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { AdminOptions } from "@/app/admin/course/register/page";

type GroupFormation = "Randomized" | "Form-Based" | "Student-Selected";

const groupOptions: { title: GroupFormation; description: string }[] = [
  {
    title: "Randomized",
    description:
      "This option will randomly distribute students into groups, ensuring a diverse mix of individuals in each group. Ideal for promoting new interactions and perspectives.",
  },
  {
    title: "Form-Based",
    description:
      "With this option, students will be grouped based on their responses to a form. This is useful for creating groups with similar interests, skill levels, or learning goals.",
  },
  {
    title: "Student-Selected",
    description:
      "This option allows students to form their own groups based on their preferences. Ideal for projects where students' personal interests or existing collaborations need to be considered.",
  },
];

type Props = {
  options: AdminOptions;
  setOptions: Dispatch<SetStateAction<AdminOptions>>;
};

const GroupSelection = (props: Props) => {
  const { options, setOptions } = props;

  const handleButtonClick = (option: GroupFormation) => {
    switch (option) {
      case "Randomized":
        setOptions({
          ...options,
          randomizedGroups: !options.randomizedGroups,
        });
        return;
      case "Form-Based":
        setOptions({
          ...options,
          formBasedGroups: !options.formBasedGroups,
        });
        return;
      case "Student-Selected":
        setOptions({
          ...options,
          studentSelectedGroups: !options.studentSelectedGroups,
        });
        return;
    }
  };

  const renderButtonText = (option: GroupFormation) => {
    switch (option) {
      case "Randomized":
        return options.randomizedGroups ? "Undo" : "Select";
      case "Form-Based":
        return options.formBasedGroups ? "Undo" : "Select";
      case "Student-Selected":
        return options.studentSelectedGroups ? "Undo" : "Select";
    }
  };

  const changeBackground = (option: GroupFormation) => {
    switch (option) {
      case "Randomized":
        return options.randomizedGroups;
      case "Form-Based":
        return options.formBasedGroups;
      case "Student-Selected":
        return options.studentSelectedGroups;
    }
  };

  return (
    <>
      <h2 className="font-semibold">
        Select how the student-groups should be formed
      </h2>
      <div className="flex gap-4 w-3/4">
        {groupOptions.map((option, index) => (
          <Card
            key={index}
            className={`w-1/3 ${
              changeBackground(option.title) ? "bg-gray-200" : ""
            }`}
          >
            <CardHeader>
              <h2 className="font-semibold">{option.title}</h2>
            </CardHeader>
            <CardContent>
              <p className="text-sm">{option.description}</p>
            </CardContent>
            <CardFooter className="justify-center">
              <Button onClick={() => handleButtonClick(option.title)}>
                {renderButtonText(option.title)}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {options.selectedGroupFormation && (
        <p className="text-xs font-light">
          You have selected {options.selectedGroupFormation}, click on
          <span className="font-bold"> next </span> when you are ready.
        </p>
      )}
    </>
  );
};

export default GroupSelection;
