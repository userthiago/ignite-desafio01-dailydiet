import { useContext } from "react";
import { DietContext, DietContextData } from "src/context/dietContext";

export function useDietContext(): DietContextData {
  const context = useContext(DietContext);

  if (!context) {
    throw new Error("useDietContext must be used within a DietContext.");
  }

  return context;
}
