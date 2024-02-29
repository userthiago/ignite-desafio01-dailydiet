import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { MealStatistic } from "@components/MealStatistic";
import { LayoutContainer } from "@components/LayoutContainer";
import { ButtonIcon } from "@components/ButtonIcon";
import { ScreenContent } from "@components/ScreenContent";
import { Box } from "@components/Box";
import { StatisticText } from "@components/StatisticText";

import { iconColorMap } from "@utils/icon-utils";
import { useDietContext } from "@hooks/use-diet-context";
import { HeaderContainer, StatisticsGroupRow, StatisticsTitle } from "./styles";

export function Statistics() {
  const { dietStatistics } = useDietContext();
  const navigation = useNavigation();

  const handleGoBackPage = () => {
    navigation.navigate("home");
  };

  return (
    <LayoutContainer variant={dietStatistics.accomplishmentStatus}>
      <HeaderContainer>
        <ButtonIcon
          name="arrowLeft"
          color={iconColorMap[dietStatistics.accomplishmentStatus]}
          onPress={handleGoBackPage}
        />
        <MealStatistic />
      </HeaderContainer>
      <ScreenContent style={{ gap: 12 }}>
        <StatisticsTitle>Estatísticas gerais</StatisticsTitle>
        <Box variant="NEUTRAL">
          <StatisticText
            title={dietStatistics.bestSequenceOfMeals}
            subtitle="melhor sequência de pratos dentro da dieta"
          />
        </Box>
        <Box variant="NEUTRAL">
          <StatisticText
            title={dietStatistics.totalMealRegistered}
            subtitle="refeições registradas"
          />
        </Box>
        <StatisticsGroupRow>
          <Box
            variant="SUCCESS"
            style={{ width: Dimensions.get("window").width / 2 - 30 }}
          >
            <StatisticText
              title={dietStatistics.totalMealWithinDiet}
              subtitle="refeições dentro da dieta"
            />
          </Box>
          <Box
            variant="FAILURE"
            style={{ width: Dimensions.get("window").width / 2 - 30 }}
          >
            <StatisticText
              title={dietStatistics.totalMealOutsideDiet}
              subtitle="refeições fora da dieta"
            />
          </Box>
        </StatisticsGroupRow>
      </ScreenContent>
    </LayoutContainer>
  );
}
