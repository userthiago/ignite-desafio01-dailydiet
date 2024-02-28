import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { LayoutContainer } from "@components/LayoutContainer";
import { MealStatisticButton } from "@components/MealStatisticButton";

import { NewMealContainer, NewMealTitle } from "./styles";
import { MealListItem } from "@components/MealListItem";
import { SectionList } from "react-native";
import { mealList } from "@storage/meals/temp";
import { MealListHeader } from "@components/MealListHeader";
import { MaskedView } from "@components/MaskedView";
import { MaskedElement } from "@components/MaskedElement";

export function Home() {
  return (
    <LayoutContainer
      style={{ paddingTop: 24, paddingLeft: 24, paddingRight: 24 }}
    >
      <Header />
      <MealStatisticButton />
      <NewMealContainer>
        <NewMealTitle>Refeições</NewMealTitle>
        <Button label="Nova refeição" icon="plus" />
      </NewMealContainer>
      <MaskedView maskElement={<MaskedElement />}>
        <SectionList
          sections={mealList}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          renderItem={({ item }) => (
            <MealListItem
              time={item.time}
              title={item.title}
              status={item.status}
            />
          )}
          renderSectionHeader={({ section }) => (
            <MealListHeader title={section.title} />
          )}
        />
      </MaskedView>
    </LayoutContainer>
  );
}
