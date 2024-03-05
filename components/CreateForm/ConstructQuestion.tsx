import { Dispatch, SetStateAction } from "react";
import TextQuestionForm from "../Form/Questions/TextQuestionForm";
import { Question, QuestionKind } from "./CreateForm";
import MultipleChoiceQuestionForm from "../Form/Questions/MultipleChoiceQuestion";

const ConstructQuestion = (props: {
  type: QuestionKind;
  setQuestions: Dispatch<SetStateAction<Question[]>>;
}) => {
  const renderQuestion = () => {
    switch (props.type) {
      case "Text":
        return <TextQuestionForm setQuestions={props.setQuestions} />;
      case "Multiple choice":
        return <MultipleChoiceQuestionForm setQuestions={props.setQuestions} />;
      case "Checkbox":
        return <div>todo</div>;
    }
  };

  return <div className="w-full">{renderQuestion()}</div>;
};

export default ConstructQuestion;
