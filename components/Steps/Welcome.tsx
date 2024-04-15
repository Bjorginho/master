// import { renderSemesterText } from "@/app/admin/course/page";

type WelcomeProps = {
  code: string | null;
  semester?: string | null;
  year?: string | null;
};

const Welcome = (props: WelcomeProps) => {
  return (
    <>
      <h1 className="font-semibold">
        Welcome to the &qout;Create Course Portal&qout;
      </h1>
      <p className="font-light">Selected course:</p>
      <h2 className="font-bold">{props.code && props.code}</h2>
      {/* <p>
        {props.semester &&
          props.year &&
          renderSemesterText(props.semester, props.year)}
      </p> */}
      <p>
        Click on <span className="font-bold italic">next</span> when you are
        ready!
      </p>
    </>
  );
};

export default Welcome;
