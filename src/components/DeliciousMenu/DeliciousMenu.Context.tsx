import { createContext } from "react";

type DeliciousMenuContextValue = {
  selected?: string;
  onSelect?: (id: string) => void;
};

const DeliciousMenuContext = createContext({} as DeliciousMenuContextValue);

export default DeliciousMenuContext;
