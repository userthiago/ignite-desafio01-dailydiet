import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { AppRoutes } from "./app.routes";
import { useTheme } from "styled-components/native";
import { DietContextProvider } from "src/context/dietContext";

export function Routes() {
  const { COLORS } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <NavigationContainer>
        <DietContextProvider>
          <AppRoutes />
        </DietContextProvider>
      </NavigationContainer>
    </View>
  );
}
