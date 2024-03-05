import { useState } from "react";
import NewQuestion from "./NewQuestion";

type Options = string[];

type TextQuestion = {
  question: string;
};

type MultipleChoiceQuestion = {
  question: string;
  options: Options;
};

type CheckboxQuestion = {
  question: string;
  options: Options;
};

export type QuestionKind = "Text" | "Multiple choice" | "Checkbox";
export type Question = TextQuestion | MultipleChoiceQuestion | CheckboxQuestion;

const CreateForm = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [showButtons, setShowButtons] = useState<boolean>(false);

  const renderQuestion = (question: Question, index: number) => {
    return (
      <li key={index} className="flex gap-2 items-center">
        <p className="font-semibold">Q{index + 1}</p>

        <p>{question.question}</p>
      </li>
    );
  };

  return (
    <div className="flex gap-2 min-w-screen">
      <div className="flex flex-col gap-2 ">
        <h1>Create form</h1>
        <p className="text-sm font-light">
          You are going to create a form and add questions the students are
          required to fill out before they are placed in groups based on form
          results.
        </p>
        {/* Render questions */}
        <div className="flex flex-col gap-2">
          {questions.length > 0 && (
            <>
              <h2 className="">Questions added</h2>
              <ul>
                {questions.map((question, index) =>
                  renderQuestion(question, index)
                )}
              </ul>
            </>
          )}
        </div>

        <NewQuestion setQuestions={setQuestions} />
      </div>
    </div>
  );
};

export default CreateForm;
