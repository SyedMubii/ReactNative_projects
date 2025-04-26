import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Property1Card from "../components/Property1Card";
import Property1White from "../components/Property1White";
import { Border, Color, Padding } from "../GlobalStyles";

const Onboarding1 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.onboarding1Icon}
      resizeMode="cover"
      source={require("../assets/onboarding1.png")}
    >
      <View style={styles.cardStepParent}>
        <View style={styles.cardStep}>
          <Property1Card
            getReadyForTheNextTrip="Get ready for the next trip"
            property1CardPosition="unset"
            getReadyForFontSize={30}
            buttonBackgroundColor="#dc281e"
            onButtonPress={() => navigation.navigate("Onboarding2")}
          />
          <View style={styles.step}>
            <View style={[styles.stepChild, styles.stepLayout]} />
            <View style={[styles.stepItem, styles.stepLayout]} />
            <View style={[styles.stepItem, styles.stepLayout]} />
          </View>
        </View>
        <Property1White
          container={require("../assets/container.png")}
          property1WhitePosition="absolute"
          property1WhiteMarginLeft={-187.5}
          property1WhiteTop={0}
          property1WhiteLeft="50%"
          property1WhiteWidth={375}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  stepLayout: {
    height: 6,
    borderRadius: Border.br_52xl,
    flex: 1,
  },
  stepChild: {
    backgroundColor: Color.colorsWhite,
  },
  stepItem: {
    backgroundColor: Color.colorGray_200,
    marginLeft: 5,
  },
  step: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: Padding.p_121xl,
    paddingVertical: 0,
    marginTop: 15,
    borderRadius: Border.br_52xl,
  },
  cardStep: {
    marginLeft: -168.5,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  cardStepParent: {
    top: 0,
    left: 27,
    width: 375,
    height: 891,
    position: "absolute",
  },
  onboarding1Icon: {
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
  },
});

export default Onboarding1;
