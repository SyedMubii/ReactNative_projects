import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Button1 = memo(
  ({
    buttonPosition,
    buttonAlignSelf,
    buttonBackgroundColor,
    onButtonPress,
  }) => {
    const buttonStyle = useMemo(() => {
      return {
        ...getStyleValue("position", buttonPosition),
        ...getStyleValue("alignSelf", buttonAlignSelf),
        ...getStyleValue("backgroundColor", buttonBackgroundColor),
      };
    }, [buttonPosition, buttonAlignSelf, buttonBackgroundColor]);

    return (
      <View style={[styles.button, buttonStyle]} onPress={onButtonPress}>
        <Text style={styles.next}>Next</Text>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  next: {
    flex: 1,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorsWhite,
    textAlign: "center",
  },
  button: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.primaryBlueSky,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_mid,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default Button1;
