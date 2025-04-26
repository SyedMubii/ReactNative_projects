import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1White = memo(
  ({
    container,
    property1WhitePosition,
    property1WhiteMarginLeft,
    property1WhiteTop,
    property1WhiteLeft,
    property1WhiteWidth,
  }) => {
    const property1WhiteStyle = useMemo(() => {
      return {
        ...getStyleValue("position", property1WhitePosition),
        ...getStyleValue("marginLeft", property1WhiteMarginLeft),
        ...getStyleValue("top", property1WhiteTop),
        ...getStyleValue("left", property1WhiteLeft),
        ...getStyleValue("width", property1WhiteWidth),
      };
    }, [
      property1WhitePosition,
      property1WhiteMarginLeft,
      property1WhiteTop,
      property1WhiteLeft,
      property1WhiteWidth,
    ]);

    return (
      <View style={[styles.property1white, property1WhiteStyle]}>
        <View style={[styles.action, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
        <Image
          style={styles.containerIcon}
          contentFit="cover"
          source={container}
        />
      </View>
    );
  }
);

const styles = StyleSheet.create({
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  time: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.colorsWhite,
    textAlign: "center",
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
  property1white: {
    width: 375,
    height: 44,
  },
});

export default Property1White;
