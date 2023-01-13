import { Clock, Timer } from "phosphor-react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Crono } from "../screens/Crono";
import { Relogio } from "../screens/Relogio";

const { Navigator, Screen } = createBottomTabNavigator();

export function RouterButton() {
  return (
    <Navigator>
      <Screen
        name="cronometro"
        component={Crono}
        options={{ tabBarIcon: () => <Timer /> }}
      />
      <Screen
        name="relogio"
        component={Relogio}
        options={{ tabBarIcon: () => <Clock /> }}
      />
    </Navigator>
  );
}
