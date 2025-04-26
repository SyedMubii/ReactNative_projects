import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PasswordForm = ({ propTop }) => {
  const passwordStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.password, passwordStyle]}>
      <Text style={styles.text}>************</Text>
      <Image
        style={styles.passwordChild}
        contentFit="cover"
        source={require("../assets/group-69471.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector36.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: -13.5,
    top: "50%",
    left: 50,
    fontSize: FontSize.size_7xl,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.ew,
    textAlign: "left",
    width: 158,
    height: 28,
    position: "absolute",
  },
  passwordChild: {
    top: 15,
    left: 20,
    width: 22,
    height: 22,
    position: "absolute",
  },
  vectorIcon: {
    height: "32.68%",
    width: "7.04%",
    top: "35.29%",
    right: "5.35%",
    bottom: "32.03%",
    left: "87.61%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  password: {
    top: 564,
    left: 36,
    borderRadius: Border.br_17xl,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_300,
    borderWidth: 1,
    width: 355,
    height: 51,
    position: "absolute",
  },
});

export default PasswordForm;
