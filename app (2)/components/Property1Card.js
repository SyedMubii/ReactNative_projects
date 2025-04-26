import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import Button1 from "./Button1";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Card = memo(
  ({
    getReadyForTheNextTrip,
    property1CardPosition,
    getReadyForFontSize,
    buttonBackgroundColor,
    onButtonPress,
  }) => {
    const property1CardStyle = useMemo(() => {
      return {
        ...getStyleValue("position", property1CardPosition),
      };
    }, [property1CardPosition]);

    const getReadyForStyle = useMemo(() => {
      return {
        ...getStyleValue("fontSize", getReadyForFontSize),
      };
    }, [getReadyForFontSize]);

    const buttonStyle = useMemo(() => {
      return {
        ...getStyleValue("backgroundColor", buttonBackgroundColor),
      };
    }, [buttonBackgroundColor]);

    return (
      <View style={[styles.property1card, property1CardStyle]}>
        <View style={styles.textButton}>
          <View style={styles.titleSubtitle}>
            <Text
              style={[
                styles.getReadyFor,
                styles.getReadyForFlexBox,
                getReadyForStyle,
              ]}
            >
              {getReadyForTheNextTrip}
            </Text>
            <Text style={[styles.findThousansOf, styles.getReadyForFlexBox]}>
              Find thousans of tourist destinations ready for you to visit
            </Text>
          </View>
          <Button1
            buttonPosition="unset"
            buttonAlignSelf="stretch"
            buttonBackgroundColor="#0fa3e2"
          />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  getReadyForFlexBox: {
    textAlign: "left",
    letterSpacing: 0,
    alignSelf: "stretch",
  },
  getReadyFor: {
    fontSize: FontSize.size_11xl,
    lineHeight: 40,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorBlack,
  },
  findThousansOf: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorGray_100,
    marginTop: 10,
  },
  titleSubtitle: {
    width: 295,
  },
  textButton: {
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  property1card: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorsWhite,
    height: 316,
    flexDirection: "row",
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_11xl,
  },
});

export default Property1Card;
