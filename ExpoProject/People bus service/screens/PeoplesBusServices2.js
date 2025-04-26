import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PeoplesBusServices2 = () => {
  return (
    <LinearGradient
      style={styles.peoplesBusServices2}
      locations={[0, 0.84]}
      colors={["#f00000", "#dc281e"]}
    >
      <Text style={styles.pepolesBusServices}>Pepoles Bus Services</Text>
      <View style={styles.continueWithPhoneNumber}>
        <View style={styles.continueWithPhoneNumberChild} />
        <Text style={[styles.continueWithPhone, styles.continueFlexBox]}>
          Continue with phone number
        </Text>
        <LinearGradient
          style={styles.button}
          locations={[0, 1]}
          colors={["rgba(240, 0, 0, 0.96)", "#dc281e"]}
        >
          <Text style={[styles.continueWithPhone1, styles.continueFlexBox]}>
            Continue with phone number
          </Text>
        </LinearGradient>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  continueFlexBox: {
    textAlign: "left",
    color: Color.colorsWhite,
    position: "absolute",
  },
  pepolesBusServices: {
    top: 371,
    left: 56,
    fontSize: 32,
    letterSpacing: -0.5,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    color: Color.colorsWhite,
    position: "absolute",
  },
  continueWithPhoneNumberChild: {
    top: 34,
    left: 36,
    borderRadius: 69,
    backgroundColor: Color.colorTomato_100,
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
    borderRadius: Border.br_17xl,
    width: 364,
    height: 78,
    position: "absolute",
    backgroundColor: "transparent",
  },
  continueWithPhoneNumber: {
    top: 769,
    left: 0,
    borderTopLeftRadius: Border.br_22xl,
    borderTopRightRadius: Border.br_22xl,
    backgroundColor: Color.colorsWhite,
    width: 428,
    height: 158,
    position: "absolute",
  },
  peoplesBusServices2: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
});

export default PeoplesBusServices2;
