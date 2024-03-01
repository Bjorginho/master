"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Welcome from "@/components/Steps/Welcome";
import GroupSelectionResults from "@/components/Steps/GroupSelectionResults";
import ContractSelection from "@/components/Steps/ContractSelection";
import Steps from "@/components/Steps/Steps";
import GroupSelection from "@/components/Steps/GroupSelection";

type GroupFormation = "Randomized" | "Form-Based" | "Student-Selected";

export interface AdminOptions {
  selectedGroupFormation?: GroupFormation;
  useGroupContract?: boolean;
  randomizedGroups: boolean;
  formBasedGroups: boolean;
  studentSelectedGroups: boolean;
}

function Course() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const semester = searchParams.get("semester");
  const year = searchParams.get("year");

  // Steps
  const [step, setStep] = useState<number>(0);
  const [options, setOptions] = useState<AdminOptions>({
    formBasedGroups: false,
    randomizedGroups: false,
    studentSelectedGroups: false,
  });

  const renderContent = () => {
    switch (step) {
      case 0:
        return <Welcome code={code} semester={semester} year={year} />;
      case 1:
        return <GroupSelection options={options} setOptions={setOptions} />;
      case 2:
        return <GroupSelectionResults options={options} />;
      case 3:
        return <ContractSelection />;
    }

    return (
      <>
        <h1>Error</h1>
      </>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <Steps value={(step / 5) * 100} step={step} setStep={setStep} />
      {renderContent()}
    </div>
  );
}

export default Course;
