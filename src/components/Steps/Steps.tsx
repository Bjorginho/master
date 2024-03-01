import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Dispatch, SetStateAction } from "react";

type StepsProps = {
  value: number;
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
};

const Steps = ({ value, step, setStep }: StepsProps) => {
  const MAX_STEPS = 5;

  const handleStepUp = () => {
    if (step === MAX_STEPS) return;
    setStep(step + 1);
  };

  const handleStepDown = () => {
    if (step === 0) return;
    setStep(step - 1);
  };

  return (
    <div className="flex w-3/4 gap-4 items-center">
      <Button variant={"outline"} size={"sm"} onClick={handleStepDown}>
        Previous
      </Button>
      <Progress value={value} />
      <Button variant={"outline"} size={"sm"} onClick={handleStepUp}>
        Next
      </Button>
    </div>
  );
};

export default Steps;
