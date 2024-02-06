export type FeedbackKind = "person" | "group";

export interface FeedbackQuestion {
  question: string;
  answerKind: "text" | "choice" | "number";
}
