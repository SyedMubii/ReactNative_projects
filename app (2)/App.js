const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import PeoplesBusServicesTravelAp from "./screens/PeoplesBusServicesTravelAp";
import Onboarding3 from "./screens/Onboarding3";
import Onboarding2 from "./screens/Onboarding2";
import Property1White from "./components/Property1White";
import Button1 from "./components/Button1";
import Property1Card from "./components/Property1Card";
import Onboarding1 from "./screens/Onboarding1";
import PeoplesBusServices2 from "./screens/PeoplesBusServices2";
import HomeOffine from "./screens/HomeOffine";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="PeoplesBusServicesTravelAp"
              component={PeoplesBusServicesTravelAp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding3"
              component={Onboarding3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding2"
              component={Onboarding2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PeoplesBusServices2"
              component={PeoplesBusServices2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeOffine"
              component={HomeOffine}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
