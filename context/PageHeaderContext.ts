import { createContext, useContext } from "react";

interface Props {
  headerText: string;
  setHeaderText: (text: string) => void;
}

export const PageHeaderContext = createContext<Props>({
  headerText: "",
  setHeaderText: () => {},
});
export const usePageHeader = () => useContext(PageHeaderContext);
