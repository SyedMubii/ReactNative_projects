import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const RejectedOfferContainer = ({ offerStatusMessage, propTop }) => {
  const g3Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.g3, g3Style]}>
      <View style={styles.g3Child} />
      <View style={styles.g3Item} />
      <Text style={styles.viewDetails}>View Details</Text>
      <Text style={[styles.congratsYourOfferContainer, styles.yourTypo]}>
        <Text
          style={styles.congratsYourOffer}
        >{`Congrats! your offer has been accepted
`}</Text>
        <Text style={styles.byTheSeller}>by the seller for Rs170,00</Text>
      </Text>
      <Text style={[styles.yourOfferHas, styles.yourTypo]}>
        {offerStatusMessage}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  yourTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    left: 104,
    position: "absolute",
  },
  g3Child: {
    top: 16,
    left: 16,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.ew,
    width: 68,
    height: 68,
    position: "absolute",
  },
  g3Item: {
    top: 98,
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_100,
    borderWidth: 2,
    width: 132,
    height: 38,
    left: 104,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  viewDetails: {
    top: 103,
    left: 124,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    display: "flex",
    alignItems: "center",
    width: 103,
    textAlign: "left",
    color: Color.colorGray_700,
    lineHeight: 30,
    position: "absolute",
  },
  congratsYourOffer: {
    lineHeight: 30,
  },
  byTheSeller: {
    lineHeight: 20,
  },
  congratsYourOfferContainer: {
    top: 41,
    fontSize: FontSize.size_smi,
    color: Color.colorDimgray_300,
    width: 261,
    height: 25,
  },
  yourOfferHas: {
    top: 12,
    fontSize: FontSize.size_mid,
    width: 255,
    color: Color.colorGray_700,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 30,
  },
  g3: {
    top: 348,
    left: 0,
    backgroundColor: Color.colorsWhite,
    width: 378,
    height: 152,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
});

export default RejectedOfferContainer;
