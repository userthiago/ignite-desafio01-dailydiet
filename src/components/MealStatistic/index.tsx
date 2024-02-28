import { useState } from "react";
import { MealStatisticContainer, Percentage, Text } from "./styles";

export function MealStatistic() {
  const [dietPercentage, setDietPercentage] = useState(90.86);

  return (
    <MealStatisticContainer>
      <Percentage>{dietPercentage}%</Percentage>
      <Text>das refeições dentro da dieta</Text>
    </MealStatisticContainer>
  );
}
