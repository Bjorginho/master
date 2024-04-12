"use client";
import { PageHeaderContext } from "@/context/PageHeaderContext";
import { ThemeProvider } from "@/components/theme-provider";
import { useState } from "react";
import { GroupData } from "@/hooks/useGroup";
import { StudentContext } from "@/context/StudentContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [headerText, setHeaderText] = useState("");

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <PageHeaderContext.Provider
        value={{ headerText: headerText, setHeaderText: setHeaderText }}
      >
        {children}
      </PageHeaderContext.Provider>
    </ThemeProvider>
  );
};

export const AdminProviders = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const StudentProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentCourse, setCurrentCourse] = useState<string>("");
  const [groupData, setGroupData] = useState<GroupData>({
    id: "",
    members: [],
  });

  return (
    <StudentContext.Provider
      value={{
        course: currentCourse,
        setCurrentCourse,
        groupData,
        setGroupData,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
