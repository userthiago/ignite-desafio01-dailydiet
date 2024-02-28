import { HomeHeader } from "@components/HomeHeader";
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
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();

  const handleGoToAddMealScreen = () => {
    navigation.navigate("registermeal");
  };

  return (
    <LayoutContainer
      style={{ paddingTop: 24, paddingLeft: 24, paddingRight: 24 }}
    >
      <HomeHeader />
      <MealStatisticButton />
      <NewMealContainer>
        <NewMealTitle>Refeições</NewMealTitle>
        <Button
          label="Nova refeição"
          icon="plus"
          onPress={handleGoToAddMealScreen}
        />
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
