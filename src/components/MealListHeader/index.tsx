import { MealListHeaderText } from "./styles";

type MealListHeaderProps = {
  title: string;
};

export function MealListHeader({ title }: MealListHeaderProps) {
  return <MealListHeaderText>{title}</MealListHeaderText>;
}
