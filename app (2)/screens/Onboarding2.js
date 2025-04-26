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

const Onboarding2 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.onboarding2Icon}
      resizeMode="cover"
      source={require("../assets/onboarding2.png")}
    >
      <View style={styles.cardParent}>
        <View style={styles.card}>
          <Property1Card
            getReadyForTheNextTrip="Visit tourist attractions"
            property1CardPosition="unset"
            getReadyForFontSize={33}
            buttonBackgroundColor="#dc281e"
            onButtonPress={() => navigation.navigate("Onboarding3")}
          />
          <View style={styles.rectangleParent}>
            <View style={styles.frameChild} />
            <View style={[styles.frameItem, styles.frameLayout]} />
            <View style={[styles.frameInner, styles.frameLayout]} />
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
  frameLayout: {
    marginLeft: 5,
    height: 6,
    borderRadius: Border.br_52xl,
    flex: 1,
  },
  frameChild: {
    height: 6,
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_52xl,
    flex: 1,
  },
  frameItem: {
    backgroundColor: Color.colorsWhite,
  },
  frameInner: {
    backgroundColor: Color.colorGray_200,
    marginLeft: 5,
  },
  rectangleParent: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: Padding.p_121xl,
    paddingVertical: 0,
    marginTop: 15,
    borderRadius: Border.br_52xl,
  },
  card: {
    marginLeft: -168.5,
    bottom: 0,
    left: "50%",
    position: "absolute",
  },
  cardParent: {
    top: 0,
    left: 27,
    width: 375,
    height: 891,
    position: "absolute",
  },
  onboarding2Icon: {
    width: "100%",
    height: 926,
    overflow: "hidden",
    flex: 1,
  },
});

export default Onboarding2;
