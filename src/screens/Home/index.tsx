import { Alert, SectionList } from "react-native";
import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { HomeHeader } from "@components/HomeHeader";
import { Button } from "@components/Button";
import { LayoutContainer } from "@components/LayoutContainer";
import { MealStatisticButton } from "@components/MealStatisticButton";
import { MealListItem } from "@components/MealListItem";
import { MealListHeader } from "@components/MealListHeader";
import { MaskedView } from "@components/MaskedView";
import { MaskedElement } from "@components/MaskedElement";

import { mealGetAllAndGroupByDate } from "@storage/meal/meal-get-all-and-group-by-date";
import { MealGroupStorageDTO } from "@storage/meal/meal-group-storage-dto";

import { NewMealContainer, NewMealTitle } from "./styles";

export function Home() {
  const [isLoading, setLoading] = useState(false);
  const [mealList, setMealList] = useState<MealGroupStorageDTO[]>([]);
  const navigation = useNavigation();

  const handleGoToAddMealScreen = () => {
    navigation.navigate("registermeal");
  };

  const fetchMealList = async () => {
    try {
      setLoading(true);
      const data = await mealGetAllAndGroupByDate();
      setMealList(data);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Refeições",
        "Não foi possível carregar as refeições cadastradas."
      );
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchMealList();
    }, [])
  );

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
