import ReportForm from "@/components/Form/Report/ReportForm";

const Report = () => {
  return (
    <div className="flex flex-col gap-2 mb-8">
      <h1 className="font-semibold flex-1">
        Experiencing Issues with Your Group Work?
      </h1>
      <p className="text-sm ">
        This page is specifically designed for students to communicate any
        challenges or issues they&apos;re experiencing within their group
        projects directly to their professors. It serves as a confidential and
        direct line of communication for reporting problems such as
        non-collaborative group members, conflicts, or any barriers to
        completing group assignments effectively. Our goal is to ensure that
        every student has a supportive and productive group work experience, and
        this tool facilitates timely intervention and guidance from professors
        when needed
      </p>
      <ReportForm />
    </div>
  );
};

export default Report;
