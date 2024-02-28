import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { LayoutContainer } from "@components/LayoutContainer";
import { MealStatisticButton } from "@components/MealStatisticButton";

import { NewMealContainer, NewMealTitle } from "./styles";

export function Home() {
  return (
    <LayoutContainer style={{ padding: 24 }}>
      <Header />
      <MealStatisticButton />
      <NewMealContainer>
        <NewMealTitle>Refeições</NewMealTitle>
        <Button label="Nova refeição" icon="plus" />
      </NewMealContainer>
    </LayoutContainer>
  );
}
