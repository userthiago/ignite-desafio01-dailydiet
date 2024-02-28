import { Box } from "@components/Box";
import { Icon } from "@components/Icon";
import { MealStatistic } from "@components/MealStatistic";
import { useNavigation } from "@react-navigation/native";
import { iconColorMap } from "@utils/icon-utils";
import { TouchableOpacity } from "react-native";

export function MealStatisticButton() {
  const navigation = useNavigation();

  const handleGoToStatisticPage = () => {
    navigation.navigate("statistics");
  };

  return (
    <TouchableOpacity onPress={handleGoToStatisticPage}>
      <Box variant="SUCCESS" style={{ height: 102 }}>
        <MealStatistic />
        <Icon
          name="arrowUpRight"
          color={iconColorMap["SUCCESS"]}
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
