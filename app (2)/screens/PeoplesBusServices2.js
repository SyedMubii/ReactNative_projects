import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import PhoneFormContainer from "../components/PhoneFormContainer";
import { FontFamily, Color } from "../GlobalStyles";

const PeoplesBusServices2 = () => {
  return (
    <LinearGradient
      style={styles.peoplesBusServices2}
      locations={[0, 0.84]}
      colors={["#f00000", "#dc281e"]}
      useAngle={true}
      angle={180}
    >
      <Text style={styles.pepolesBusServices}>Pepoles Bus Services</Text>
      <PhoneFormContainer />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  pepolesBusServices: {
    position: "absolute",
    top: 371,
    left: 56,
    fontSize: 32,
    letterSpacing: -0.5,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorsWhite,
    textAlign: "center",
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
