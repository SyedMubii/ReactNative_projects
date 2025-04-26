import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Profile4 = () => {
  return (
    <View style={styles.profile4}>
      <LinearGradient
        style={[styles.button, styles.buttonLayout]}
        locations={[0, 1]}
        colors={["rgba(240, 0, 0, 0.96)", "#dc281e"]}
      >
        <Text style={[styles.countinue, styles.skipTypo]}>Countinue</Text>
      </LinearGradient>
      <View style={[styles.button1, styles.buttonLayout]}>
        <Text style={[styles.skip, styles.skipTypo]}>Skip</Text>
      </View>
      <Image
        style={styles.fingerprintIcon}
        contentFit="cover"
        source={require("../assets/fingerprint.png")}
      />
      <Text style={[styles.pleasePutYour, styles.pleasePutYourLayout]}>
        Please put your finger in the fingerprint scanner to get started
      </Text>
      <Text style={[styles.addAFingerprint, styles.pleasePutYourLayout]}>
        Add a fingerprint to make your account more secure.
      </Text>
      <Text style={[styles.setYourFingerprint, styles.timeTypo]}>
        Set your Fingerprint
      </Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector34.png")}
      />
      <View style={styles.statusBar}>
        <View style={[styles.action, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
        <Image
          style={styles.containerIcon}
          contentFit="cover"
          source={require("../assets/container3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonLayout: {
    height: 58,
    width: 184,
    borderRadius: Border.br_17xl,
    top: 821,
    position: "absolute",
  },
  skipTypo: {
    textAlign: "center",
    color: Color.colorsWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
    top: 16,
    left: "50%",
    position: "absolute",
  },
  pleasePutYourLayout: {
    height: 50,
    width: 327,
    fontFamily: FontFamily.poppinsRegular,
    left: 51,
    color: Color.ew,
    textAlign: "center",
    position: "absolute",
  },
  timeTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  countinue: {
    marginLeft: -46,
  },
  button: {
    left: 220,
    backgroundColor: "transparent",
  },
  skip: {
    marginLeft: -19,
  },
  button1: {
    left: 22,
    backgroundColor: Color.ew,
  },
  fingerprintIcon: {
    top: 354,
    left: 108,
    width: 221,
    height: 221,
    position: "absolute",
    overflow: "hidden",
  },
  pleasePutYour: {
    top: 693,
    fontSize: FontSize.size_base,
  },
  addAFingerprint: {
    top: 183,
    fontSize: FontSize.size_xl,
  },
  setYourFingerprint: {
    top: 74,
    left: 55,
    fontSize: FontSize.size_7xl,
    color: Color.colorGray_600,
    textAlign: "left",
    width: 265,
    position: "absolute",
  },
  vectorIcon: {
    height: "1.68%",
    width: "2.36%",
    top: "9.38%",
    right: "91.57%",
    bottom: "88.94%",
    left: "6.07%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  time: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.ew,
    width: 54,
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
  statusBar: {
    marginLeft: -183,
    top: 9,
    width: 375,
    height: 44,
    left: "50%",
    position: "absolute",
  },
  profile4: {
    backgroundColor: Color.colorsWhite,
    flex: 1,
    width: "100%",
    height: 928,
    overflow: "hidden",
  },
});

export default Profile4;
