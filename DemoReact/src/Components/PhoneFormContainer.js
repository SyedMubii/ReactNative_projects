import React, { memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const PhoneFormContainer = memo(() => {
  return (
    <View style={[styles.continueWithPhoneNumber, styles.continueLayout]}>
      <View
        style={[styles.continueWithPhoneNumberChild, styles.childPosition]}
      />
      <View style={styles.continueWithPhoneNumberItem} />
      <Text style={[styles.continueWithPhone, styles.continueFlexBox]}>
        Continue with phone number
      </Text>
      <View style={[styles.button, styles.buttonLayout]}>
        <LinearGradient
          style={[styles.buttonChild, styles.buttonLayout]}
          locations={[0, 1]}
          colors={["rgba(240, 0, 0, 0.96)", "#dc281e"]}
        />
        <Text style={[styles.continueWithPhone1, styles.continueFlexBox]}>
          Continue with phone number
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  continueLayout: {
    height: 158,
    width: 428,
    position: "absolute",
  },
  childPosition: {
    top: 0,
    left: 0,
  },
  continueFlexBox: {
    textAlign: "left",
    color: Color.colorsWhite,
    position: "absolute",
  },
  buttonLayout: {
    height: 78,
    width: 364,
    position: "absolute",
  },
  continueWithPhoneNumberChild: {
    borderTopLeftRadius: Border.br_22xl,
    borderTopRightRadius: Border.br_22xl,
    backgroundColor: Color.colorsWhite,
    height: 158,
    width: 428,
    position: "absolute",
  },
  continueWithPhoneNumberItem: {
    top: 34,
    left: 36,
    borderRadius: Border.br_50xl,
    backgroundColor: Color.colorTomato,
    width: 355,
    height: 70,
    display: "none",
    position: "absolute",
  },
  continueWithPhone: {
    top: 53,
    left: 99,
    fontSize: FontSize.size_base,
    letterSpacing: -0.2,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    width: 230,
    height: 31,
  },
  buttonChild: {
    borderRadius: Border.br_17xl,
    backgroundColor: "transparent",
    top: 0,
    left: 0,
  },
  continueWithPhone1: {
    top: 24,
    left: 35,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    width: 308,
  },
  button: {
    top: 40,
    left: 32,
  },
  continueWithPhoneNumber: {
    top: 769,
    left: 0,
    height: 158,
    width: 428,
  },
});

export default PhoneFormContainer;
