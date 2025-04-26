import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const LocationForm = () => {
  return (
    <View style={[styles.info, styles.infoLayout]}>
      <View style={[styles.inform, styles.informPosition]} />
      <View style={[styles.offlineButton, styles.offlineLayout]}>
        <View style={[styles.offlineButtonChild, styles.offlineLayout]} />
        <Text style={[styles.useMyLocation, styles.skipForNowTypo]}>
          Use my location
        </Text>
        <Text style={[styles.skipForNow, styles.yourFlexBox]}>
          Skip for now
        </Text>
      </View>
      <Image
        style={styles.infoChild}
        contentFit="cover"
        source={require("../assets/ellipse-37.png")}
      />
      <Text style={[styles.enableYourLocation, styles.yourFlexBox]}>
        Enable your location
      </Text>
      <Text
        style={[styles.chooseYourLocation, styles.yourFlexBox]}
      >{`Choose your location to start find the 
request around you`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoLayout: {
    height: 463,
    width: 336,
    position: "absolute",
  },
  informPosition: {
    left: 0,
    top: 0,
  },
  offlineLayout: {
    width: 280,
    position: "absolute",
  },
  skipForNowTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsRegular,
  },
  yourFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  inform: {
    borderRadius: Border.br_20xl,
    backgroundColor: Color.colorSnow,
    shadowColor: "rgba(55, 36, 144, 0.31)",
    shadowOffset: {
      width: -4,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 463,
    width: 336,
    position: "absolute",
  },
  offlineButtonChild: {
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorTomato_100,
    height: 52,
    left: 0,
    top: 0,
  },
  useMyLocation: {
    top: 11,
    left: 63,
    color: Color.colorsWhite,
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  skipForNow: {
    top: 62,
    left: 80,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xl,
  },
  offlineButton: {
    top: 322,
    left: 28,
    height: 92,
  },
  infoChild: {
    top: 43,
    left: 134,
    width: 74,
    height: 74,
    position: "absolute",
  },
  enableYourLocation: {
    top: 194,
    left: 33,
    fontSize: FontSize.size_7xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.ew,
  },
  chooseYourLocation: {
    top: 241,
    left: 16,
    fontSize: FontSize.size_mini,
    color: Color.colorDarkslategray_200,
    width: 306,
    fontFamily: FontFamily.poppinsRegular,
  },
  info: {
    top: 244,
    left: 46,
  },
});

export default LocationForm;
