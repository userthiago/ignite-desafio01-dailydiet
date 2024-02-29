import { useDietContext } from "@hooks/use-diet-context";

import { MealStatisticContainer, Percentage, Text } from "./styles";

export function MealStatistic() {
  const { dietStatistics } = useDietContext();

  return (
    <MealStatisticContainer>
      <Percentage>{dietStatistics.generalPercentage}</Percentage>
      <Text>das refeições dentro da dieta</Text>
    </MealStatisticContainer>
  );
}
