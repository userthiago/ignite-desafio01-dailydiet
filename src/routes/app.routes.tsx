import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegisterMeal } from "@screens/AddMeal";

import { Home } from "@screens/Home";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="registermeal" component={RegisterMeal} />
    </Navigator>
  );
}
