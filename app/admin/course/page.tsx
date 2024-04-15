"use client";

import { useSearchParams } from "next/navigation";

// export const renderSemesterText = (semester: string, year: string) => {
//   try {
//     const sem = parseInt(semester);
//     const y = parseInt(year);
//     if (sem === 1) {
//       return `Spring ${y}`;
//     } else if (sem === 2) {
//       return `Fall ${y}`;
//     } else {
//       return "Not found: Invalid semester or year";
//     }
//   } catch (error) {}
// };

function CourseAdminPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const semester = searchParams.get("semester");
  const year = searchParams.get("year");

  return (
    <div>
      <div className="flex justify-between">
        <p>{code}</p>
        {/* <p>{semester && year && renderSemesterText(semester, year)}</p> */}
      </div>
      <h1>Dashboard </h1>
      <div>
        <h2>Attention needed</h2>
        {/* <GroupsTable /> */}
      </div>
    </div>
  );
}

export default CourseAdminPage;
