// import { GroupData } from "@/hooks/useGroup";
import { createContext, useContext } from "react";

interface Props {
  course: string;
  setCurrentCourse: React.Dispatch<React.SetStateAction<string>>;
  groupData: any;
  setGroupData: React.Dispatch<React.SetStateAction<any>>;
}

export const StudentContext = createContext<Props>({
  course: "",
  setCurrentCourse: () => {},
  groupData: { id: "", members: [] },
  setGroupData: () => {},
});

export const useStudentData = () => useContext(StudentContext);
