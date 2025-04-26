import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PersonalCenter = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.personalCenter}>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["rgba(240, 0, 0, 0.96)", "#dc281e"]}
      >
        <Text style={styles.login}>Login</Text>
      </LinearGradient>
      <View style={styles.sign}>
        <Text style={[styles.signInWith, styles.signInWithTypo]}>
          Sign in with
        </Text>
        <Image
          style={[styles.signChild, styles.signLayout]}
          contentFit="cover"
          source={require("../assets/group-6941.png")}
        />
        <Image
          style={[styles.signItem, styles.signLayout]}
          contentFit="cover"
          source={require("../assets/group-6942.png")}
        />
        <Image
          style={[styles.signInner, styles.signLayout]}
          contentFit="cover"
          source={require("../assets/group-6944.png")}
        />
      </View>
      <View style={[styles.signUp, styles.signUpLayout]}>
        <Text style={styles.signUp1}>Sign Up</Text>
        <Pressable
          style={[styles.wrapper, styles.signUpLayout]}
          onPress={() => navigation.navigate("LoginRegistration")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/group-6947.png")}
          />
        </Pressable>
      </View>
      <View style={styles.email}>
        <Text style={styles.alanlovelqgmailcom}>alanlovelq@gmail.com</Text>
        <Text style={[styles.eMailAddressphoneNumber, styles.password1Typo]}>
          E-mail address/Phone number
        </Text>
        <Image
          style={[styles.emailChild, styles.emailChildLayout]}
          contentFit="cover"
          source={require("../assets/group-281.png")}
        />
        <View style={[styles.emailItem, styles.emailItemLayout]} />
      </View>
      <View style={styles.password}>
        <Text style={styles.forgetPassword}>Forget Password?</Text>
        <View style={[styles.passwordChild, styles.emailItemLayout]} />
        <Image
          style={[styles.passwordItem, styles.emailChildLayout]}
          contentFit="cover"
          source={require("../assets/group-101.png")}
        />
        <Text style={styles.text}>**************</Text>
        <View style={[styles.eye, styles.eyePosition]} />
        <Image
          style={styles.eyePosition}
          contentFit="cover"
          source={require("../assets/eye.png")}
        />
        <Text style={[styles.password1, styles.password1Typo]}>Password</Text>
      </View>
      <View style={styles.pleaseChooseYourLoginOptioWrapper}>
        <Text style={styles.pleaseChooseYour}>
          Please choose your login option below
        </Text>
      </View>
      <Text style={[styles.welcomeToDiscover, styles.signInWithTypo]}>
        Welcome to Discover!
      </Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector35.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signInWithTypo: {
    color: Color.ew,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  signLayout: {
    height: 51,
    width: 50,
    top: 40,
    position: "absolute",
  },
  signUpLayout: {
    height: 60,
    position: "absolute",
  },
  password1Typo: {
    color: Color.colorDarkgray_300,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    top: 0,
    textAlign: "left",
    position: "absolute",
  },
  emailChildLayout: {
    height: 22,
    width: 22,
    left: 19,
    position: "absolute",
  },
  emailItemLayout: {
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_300,
    borderStyle: "solid",
    width: 355,
    height: 51,
    left: 0,
    borderRadius: Border.br_17xl,
    position: "absolute",
  },
  eyePosition: {
    height: 25,
    width: 25,
    left: 311,
    top: 42,
    position: "absolute",
    overflow: "hidden",
  },
  login: {
    top: 12,
    left: 137,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorsWhite,
    textAlign: "left",
    position: "absolute",
  },
  button: {
    top: 799,
    left: 48,
    width: 321,
    height: 54,
    backgroundColor: "transparent",
    borderRadius: Border.br_17xl,
    position: "absolute",
  },
  signInWith: {
    left: 63,
    fontSize: FontSize.size_mini,
    width: 140,
    height: 16,
    top: 0,
    textAlign: "left",
  },
  signChild: {
    left: 0,
  },
  signItem: {
    left: 83,
  },
  signInner: {
    left: 165,
  },
  sign: {
    top: 628,
    left: 104,
    width: 215,
    height: 91,
    position: "absolute",
  },
  signUp1: {
    top: 8,
    fontSize: FontSize.size_8xl,
    color: "#121212",
    width: 158,
    height: 44,
    left: 0,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 289,
    width: 60,
    top: 0,
  },
  signUp: {
    top: 496,
    left: 39,
    width: 349,
  },
  alanlovelqgmailcom: {
    top: 43,
    color: Color.colorGray_500,
    fontSize: FontSize.size_base,
    left: 52,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  eMailAddressphoneNumber: {
    left: 0,
  },
  emailChild: {
    top: 45,
  },
  emailItem: {
    top: 30,
  },
  email: {
    top: 212,
    height: 81,
    width: 355,
    left: 33,
    position: "absolute",
  },
  forgetPassword: {
    top: 98,
    left: 199,
    fontSize: FontSize.size_lg,
    color: "#ee0302",
    width: 167,
    height: 26,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  passwordChild: {
    top: 29,
  },
  passwordItem: {
    top: 44,
  },
  text: {
    top: 42,
    color: Color.colorGray_500,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    left: 52,
    textAlign: "left",
    position: "absolute",
  },
  eye: {
    backgroundColor: Color.colorGray_800,
  },
  password1: {
    left: 1,
  },
  password: {
    top: 330,
    width: 366,
    height: 124,
    left: 33,
    position: "absolute",
  },
  pleaseChooseYour: {
    fontSize: FontSize.size_smi,
    color: Color.colorGray_1000,
    textAlign: "center",
    fontFamily: FontFamily.poppinsRegular,
  },
  pleaseChooseYourLoginOptioWrapper: {
    top: 150,
    left: 86,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  welcomeToDiscover: {
    top: 96,
    left: 27,
    fontSize: FontSize.size_14xl,
    lineHeight: 54,
    textAlign: "center",
  },
  vectorIcon: {
    height: "1.68%",
    width: "2.35%",
    top: "6.14%",
    right: "91.13%",
    bottom: "92.19%",
    left: "6.52%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  personalCenter: {
    backgroundColor: Color.colorsWhite,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default PersonalCenter;
