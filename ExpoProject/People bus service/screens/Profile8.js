import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Profile8 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.profile8, styles.iconLayout]}>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["rgba(240, 0, 0, 0.96)", "#dc281e"]}
      >
        <Text style={[styles.verify, styles.verifyFlexBox]}>Verify</Text>
      </LinearGradient>
      <View style={[styles.wrapper, styles.frameLayout]}>
        <Text style={styles.text}>4</Text>
      </View>
      <View style={[styles.container, styles.frameLayout]}>
        <Text style={styles.text}>7</Text>
      </View>
      <View style={[styles.frame, styles.frameLayout]}>
        <Text style={styles.text}>8</Text>
      </View>
      <View style={[styles.frameView, styles.frameLayout]}>
        <Text style={styles.text}>5</Text>
      </View>
      <Text style={[styles.codeHasBeen, styles.codeFlexBox]}>
        Code has been send to +1 11******99
      </Text>
      <Text style={[styles.resendCodeIn, styles.codeFlexBox]}>
        Resend code in 55s
      </Text>
      <Text style={[styles.forgotPassword, styles.timeTypo]}>
        Forgot Password
      </Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Profile7")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector34.png")}
        />
      </Pressable>
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
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  verifyFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  frameLayout: {
    height: 61,
    width: 83,
    backgroundColor: Color.colorGray_200,
    borderRadius: Border.br_3xs,
    top: 436,
    position: "absolute",
  },
  codeFlexBox: {
    textAlign: "center",
    color: Color.ew,
  },
  timeTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  verify: {
    marginLeft: -31.5,
    top: 12,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorsWhite,
    left: "50%",
  },
  button: {
    top: 821,
    left: 53,
    borderRadius: Border.br_17xl,
    width: 321,
    height: 54,
    backgroundColor: "transparent",
    position: "absolute",
  },
  text: {
    top: 8,
    left: 33,
    fontSize: FontSize.size_11xl,
    width: 27,
    height: 34,
    color: Color.ew,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  wrapper: {
    left: 121,
  },
  container: {
    left: 22,
  },
  frame: {
    left: 319,
  },
  frameView: {
    left: 220,
  },
  codeHasBeen: {
    marginLeft: -164,
    top: 356,
    width: 327,
    height: 50,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    position: "absolute",
  },
  resendCodeIn: {
    marginLeft: -101,
    top: 556,
    width: 202,
    height: 27,
    fontSize: FontSize.size_lg,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
    left: "50%",
    position: "absolute",
  },
  forgotPassword: {
    top: 74,
    left: 55,
    fontSize: FontSize.size_7xl,
    color: Color.colorGray_600,
    width: 225,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "6.07%",
    top: "9.38%",
    right: "91.57%",
    bottom: "88.94%",
    width: "2.36%",
    height: "1.68%",
    position: "absolute",
  },
  time: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
    color: Color.ew,
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
  profile8: {
    backgroundColor: Color.colorsWhite,
    flex: 1,
    height: 928,
  },
});

export default Profile8;
