import { useContext } from "react";
import { DietContext, DietContextData } from "@context/DietContext";

export function useDietContext(): DietContextData {
  const context = useContext(DietContext);

  if (!context) {
    throw new Error("useDietContext must be used within a DietContext.");
  }

  return context;
}
