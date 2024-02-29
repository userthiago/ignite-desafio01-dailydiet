import { useNavigation } from "@react-navigation/native";

import { MealStatistic } from "@components/MealStatistic";
import { LayoutContainer } from "@components/LayoutContainer";
import { ButtonIcon } from "@components/ButtonIcon";

import { iconColorMap } from "@utils/icon-utils";
import { useDietContext } from "@hooks/use-diet-context";

import { HeaderContainer } from "./styles";

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
    </LayoutContainer>
  );
}
