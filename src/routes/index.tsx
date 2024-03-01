import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components/native";

import { DietContextProvider } from "@context/DietContext";

import { AppRoutes } from "./app.routes";

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
