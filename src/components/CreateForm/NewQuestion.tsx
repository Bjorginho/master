import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Question, QuestionKind } from "./CreateForm";
import ConstructQuestion from "./ConstructQuestion";

const NewQuestion = (props: {
  setQuestions: Dispatch<SetStateAction<Question[]>>;
}) => {
  const [showButtons, setShowButtons] = useState<boolean>(false);
  const [currentKind, setCurrentKind] = useState<QuestionKind>();

  return (
    <div className="flex justify-center">
      {showButtons ? (
        <>
          <div>
            <p className="text-center font-bold mb-2">Select kind</p>
            <div className="grid grid-cols-12 gap-2">
              <ChoiceButton text="Text" setCurrentQuestion={setCurrentKind} />
              <ChoiceButton
                text="Multiple choice"
                setCurrentQuestion={setCurrentKind}
              />
              <ChoiceButton
                text="Checkbox"
                setCurrentQuestion={setCurrentKind}
              />
              {currentKind && (
                <div className="col-span-full">
                  <ConstructQuestion
                    type={currentKind}
                    setQuestions={props.setQuestions}
                  />
                </div>
              )}
              <Button
                className="col-span-full w-fit justify-self-center"
                size="sm"
                onClick={() => setShowButtons(false)}
              >
                Undo
              </Button>
            </div>
          </div>
        </>
      ) : (
        <Button variant="outline" onClick={() => setShowButtons(true)}>
          <Plus /> Add question
        </Button>
      )}
    </div>
  );
};

const ChoiceButton = (props: {
  text: QuestionKind;
  setCurrentQuestion: Dispatch<SetStateAction<QuestionKind | undefined>>;
}) => {
  const { text, setCurrentQuestion } = props;

  return (
    <Button
      variant="outline"
      className="col-span-4"
      onClick={() => setCurrentQuestion(text)}
    >
      {text}
    </Button>
  );
};

export default NewQuestion;
