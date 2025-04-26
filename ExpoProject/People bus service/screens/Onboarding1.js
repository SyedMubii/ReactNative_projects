import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Onboarding1 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.onboarding1Icon}
      resizeMode="cover"
      source={require("../assets/onboarding1.png")}
    >
      <View style={[styles.cardStepParent, styles.statusBarLayout]}>
        <View style={[styles.cardStep, styles.cardStepPosition]}>
          <View style={[styles.onboardingCard, styles.buttonSpaceBlock]}>
            <View style={[styles.textButton, styles.buttonFlexBox]}>
              <View style={styles.titleSubtitle}>
                <Text style={[styles.getReadyFor, styles.getReadyForFlexBox]}>
                  Get ready for the next trip
                </Text>
                <Text
                  style={[styles.findThousansOf, styles.getReadyForFlexBox]}
                >
                  Find thousans of tourist destinations ready for you to visit
                </Text>
              </View>
              <Pressable
                style={[styles.button, styles.buttonFlexBox]}
                onPress={() => navigation.navigate("Onboarding2")}
              >
                <Text style={[styles.next, styles.nextFlexBox]}>Next</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.step}>
            <View style={[styles.stepChild, styles.stepLayout]} />
            <View style={[styles.stepItem, styles.stepLayout]} />
            <View style={[styles.stepItem, styles.stepLayout]} />
          </View>
        </View>
        <View style={[styles.statusBar, styles.cardStepPosition]}>
          <View style={[styles.action, styles.timeLayout]}>
            <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
          </View>
          <Image
            style={styles.containerIcon}
            contentFit="cover"
            source={require("../assets/container2.png")}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  statusBarLayout: {
    width: 375,
    top: 0,
  },
  cardStepPosition: {
    left: "50%",
    position: "absolute",
  },
  buttonSpaceBlock: {
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    borderRadius: Border.br_mini,
  },
  buttonFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  getReadyForFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  nextFlexBox: {
    textAlign: "center",
    color: Color.colorsWhite,
    lineHeight: 18,
    letterSpacing: 0,
  },
  stepLayout: {
    height: 6,
    borderRadius: Border.br_52xl,
    flex: 1,
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  getReadyFor: {
    fontSize: FontSize.size_11xl,
    lineHeight: 40,
    color: Color.ew,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  findThousansOf: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_1000,
    marginTop: 10,
    fontSize: FontSize.size_mini,
  },
  titleSubtitle: {
    width: 295,
  },
  next: {
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    flex: 1,
  },
  button: {
    backgroundColor: Color.colorTomato_100,
    justifyContent: "center",
    paddingVertical: Padding.p_mid,
    paddingHorizontal: Padding.p_xl,
    flexDirection: "row",
    borderRadius: Border.br_mini,
  },
  textButton: {
    justifyContent: "space-between",
  },
  onboardingCard: {
    height: 316,
    paddingVertical: Padding.p_11xl,
    backgroundColor: Color.colorsWhite,
  },
  stepChild: {
    backgroundColor: Color.colorsWhite,
  },
  stepItem: {
    backgroundColor: Color.colorGray_900,
    marginLeft: 5,
  },
  step: {
    paddingHorizontal: Padding.p_121xl,
    paddingVertical: 0,
    marginTop: 15,
    borderRadius: Border.br_52xl,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  cardStep: {
    marginLeft: -168.5,
    bottom: 0,
  },
  time: {
    left: 0,
    textAlign: "center",
    color: Color.colorsWhite,
    lineHeight: 18,
    letterSpacing: 0,
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 0,
    width: 54,
  },
  action: {
    top: 14,
    left: 20,
    height: 18,
  },
  containerIcon: {
    marginTop: -5.84,
    top: "50%",
    right: 15,
    width: 67,
    height: 12,
    position: "absolute",
  },
  statusBar: {
    marginLeft: -187.5,
    height: 44,
    width: 375,
    top: 0,
  },
  cardStepParent: {
    left: 27,
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
