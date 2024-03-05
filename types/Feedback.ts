import { FeedbackKind, FeedbackQuestion } from "./FeedbackQuestion";

export interface Feedback {
  id: string;
  kind: FeedbackKind;
  title: string;
  desription: string;
  questions: FeedbackQuestion[];
}
