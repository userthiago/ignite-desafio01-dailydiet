import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Box } from "@components/Box";
import { Icon } from "@components/Icon";
import { MealStatistic } from "@components/MealStatistic";

import { useDietContext } from "@hooks/use-diet-context";
import { iconColorMap } from "@utils/icon-utils";

export function MealStatisticButton() {
  const { dietStatistics } = useDietContext();
  const navigation = useNavigation();

  const handleGoToStatisticPage = () => {
    navigation.navigate("statistics");
  };

  return (
    <TouchableOpacity onPress={handleGoToStatisticPage}>
      <Box
        variant={dietStatistics.accomplishmentStatus}
        style={{ height: 102 }}
      >
        <MealStatistic />
        <Icon
          name="arrowUpRight"
          color={iconColorMap[dietStatistics.accomplishmentStatus]}
          style={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
        />
      </Box>
    </TouchableOpacity>
  );
}
