const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import PeoplesBusServicesTravelAp from "./screens/PeoplesBusServicesTravelAp";
import Outgoing from "./screens/Outgoing";
import Ongoing from "./screens/Ongoing";
import Profile21 from "./screens/Profile21";
import Profile11 from "./screens/Profile11";
import Profile10 from "./screens/Profile10";
import Profile6 from "./screens/Profile6";
import Profile5 from "./screens/Profile5";
import LoginRegistrationPage from "./screens/LoginRegistrationPage";
import PersonalCenter from "./screens/PersonalCenter";
import Onboarding1 from "./screens/Onboarding1";
import ProfilePage from "./screens/ProfilePage";
import Profile15 from "./screens/Profile15";
import Schedules from "./screens/Schedules";
import Profile12 from "./screens/Profile12";
import Profile9 from "./screens/Profile9";
import Profile8 from "./screens/Profile8";
import Profile7 from "./screens/Profile7";
import Profile4 from "./screens/Profile4";
import Profile3 from "./screens/Profile3";
import Profile2 from "./screens/Profile2";
import Profile from "./screens/Profile";
import LoginRegistration from "./screens/LoginRegistration";
import PeoplesBusServices2 from "./screens/PeoplesBusServices2";
import HomeOffine from "./screens/HomeOffine";
import Onboarding3 from "./screens/Onboarding3";
import Onboarding2 from "./screens/Onboarding2";
import Profile13 from "./screens/Profile13";
import Profile20 from "./screens/Profile20";
import Profile14 from "./screens/Profile14";
import Profile18 from "./screens/Profile18";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

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
              name="Outgoing"
              component={Outgoing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Ongoing"
              component={Ongoing}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile21"
              component={Profile21}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile11"
              component={Profile11}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile10"
              component={Profile10}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile6"
              component={Profile6}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile5"
              component={Profile5}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginRegistrationPage"
              component={LoginRegistrationPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PersonalCenter"
              component={PersonalCenter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfilePage"
              component={ProfilePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile15"
              component={Profile15}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Schedules"
              component={Schedules}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile12"
              component={Profile12}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile9"
              component={Profile9}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile8"
              component={Profile8}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile7"
              component={Profile7}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile4"
              component={Profile4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile3"
              component={Profile3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile2"
              component={Profile2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginRegistration"
              component={LoginRegistration}
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
              name="Profile13"
              component={Profile13}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile20"
              component={Profile20}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile14"
              component={Profile14}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile18"
              component={Profile18}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
