import { useMemo, useState } from "react";
import { HeaderContainer } from "./styles";
import { MealStatistic } from "@components/MealStatistic";
import { LayoutContainer } from "@components/LayoutContainer";
import { AccomplishmentTypes } from "@utils/types/accomplishment-types";
import { ButtonIcon } from "@components/ButtonIcon";
import { useNavigation } from "@react-navigation/native";
import { iconColorMap } from "@utils/icon-utils";

export function Statistics() {
  const navigation = useNavigation();
  const [dietPercentage, setDietPercentage] = useState(90.86);
  const variant = useMemo<AccomplishmentTypes>(
    () => (dietPercentage > 50 ? "SUCCESS" : "NEUTRAL"),
    [dietPercentage]
  );

  const handleGoBackPage = () => {
    navigation.navigate("home");
  };

  return (
    <LayoutContainer variant={variant}>
      <HeaderContainer>
        <ButtonIcon
          name="arrowLeft"
          color={iconColorMap[variant]}
          onPress={handleGoBackPage}
        />
        <MealStatistic />
      </HeaderContainer>
    </LayoutContainer>
  );
}
