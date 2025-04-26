import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const LoginRegistrationPage = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.loginRegistrationPage, styles.iconLayout]}>
      <View
        style={[styles.forgotPasswordParent, styles.passwordParentPosition]}
      >
        <Text style={[styles.forgotPassword, styles.passwordFlexBox]}>
          Forgot Password
        </Text>
        <View style={[styles.frameChild, styles.passwordChildLayout]} />
        <Image
          style={[styles.frameItem, styles.itemLayout]}
          contentFit="cover"
          source={require("../assets/group-282.png")}
        />
        <Text style={[styles.enterYourEmail, styles.password1Typo]}>
          Enter your Email address
        </Text>
        <Text style={[styles.enterYourEmail1, styles.yourTypo]}>
          Enter your email or phone we will send the verification code to reset
          your password
        </Text>
        <Text style={[styles.sendCode, styles.sendCodeTypo]}>Send code</Text>
        <Image
          style={styles.frameInner}
          contentFit="cover"
          source={require("../assets/group-6951.png")}
        />
        <View style={styles.frameParent}>
          <View style={[styles.wrapper, styles.frameLayout]}>
            <Text style={[styles.text, styles.textTypo]}>6</Text>
          </View>
          <View style={[styles.container, styles.frameLayout]}>
            <Text style={[styles.text1, styles.textTypo]}>7</Text>
          </View>
          <View style={[styles.frame, styles.frameLayout]}>
            <Text style={[styles.text2, styles.textTypo]}>8</Text>
          </View>
          <View style={[styles.frameView, styles.frameLayout]}>
            <Text style={[styles.text2, styles.textTypo]}>9</Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/vector-23.png")}
          />
          <Image
            style={[styles.frameChild1, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/vector-23.png")}
          />
          <Image
            style={[styles.frameChild2, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/vector-23.png")}
          />
          <Text style={styles.haveNotRecieve}>Have not recieve the code?</Text>
        </View>
      </View>
      <View
        style={[styles.createNewPasswordParent, styles.passwordParentPosition]}
      >
        <Text style={[styles.forgotPassword, styles.passwordFlexBox]}>
          Create New Password
        </Text>
        <View style={[styles.password, styles.passwordChildLayout]}>
          <View style={[styles.passwordChild, styles.passwordChildLayout]} />
          <Image
            style={[styles.passwordItem, styles.itemLayout]}
            contentFit="cover"
            source={require("../assets/group-101.png")}
          />
          <Text style={[styles.keepYourAccount, styles.yourTypo]}>
            Keep your account secure by creating a strong password
          </Text>
          <Text style={styles.text4}>**************</Text>
          <View style={[styles.eye, styles.eyePosition]} />
          <Image
            style={styles.eyePosition}
            contentFit="cover"
            source={require("../assets/eye1.png")}
          />
          <Text style={[styles.password1, styles.password1Typo]}>Password</Text>
        </View>
      </View>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["rgba(240, 0, 0, 0.96)", "#dc281e"]}
      >
        <Text style={[styles.createNewPassword1, styles.passwordFlexBox]}>
          Create New Password
        </Text>
      </LinearGradient>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("LoginRegistration")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector34.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  passwordParentPosition: {
    left: 40,
    position: "absolute",
  },
  passwordFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  passwordChildLayout: {
    width: 355,
    position: "absolute",
  },
  itemLayout: {
    width: 22,
    position: "absolute",
  },
  password1Typo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  yourTypo: {
    width: 323,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  sendCodeTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  frameLayout: {
    height: 40,
    width: 40,
    borderColor: Color.colorRed_100,
    backgroundColor: Color.colorSnow,
    borderRadius: Border.br_7xs,
    borderWidth: 1,
    borderStyle: "solid",
    top: 0,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
    top: 10,
    color: Color.ew,
    textAlign: "left",
    position: "absolute",
  },
  frameChildLayout: {
    height: 2,
    width: 12,
    top: 18,
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
  forgotPassword: {
    fontSize: FontSize.size_11xl,
    color: Color.colorGray_600,
    width: 342,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 0,
    top: 0,
  },
  frameChild: {
    top: 75,
    height: 50,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_300,
    borderStyle: "solid",
    width: 355,
    borderRadius: Border.br_17xl,
    left: 1,
  },
  frameItem: {
    top: 90,
    height: 21,
    left: 20,
  },
  enterYourEmail: {
    top: 88,
    left: 53,
    color: "#b7b7b7",
    width: 197,
    height: 23,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsRegular,
  },
  enterYourEmail1: {
    top: 150,
    color: Color.ew,
    left: 19,
  },
  sendCode: {
    top: 232,
    fontSize: FontSize.size_8xl,
    color: Color.colorRed_100,
    textAlign: "justify",
    width: 154,
    height: 30,
    left: 14,
    position: "absolute",
  },
  frameInner: {
    top: 233,
    left: 296,
    width: 60,
    height: 60,
    position: "absolute",
  },
  text: {
    left: 15,
  },
  wrapper: {
    left: 0,
  },
  text1: {
    left: 13,
  },
  container: {
    left: 63,
  },
  text2: {
    left: 14,
  },
  frame: {
    left: 126,
  },
  frameView: {
    left: 189,
  },
  vectorIcon: {
    left: 45,
  },
  frameChild1: {
    left: 108,
  },
  frameChild2: {
    left: 171,
  },
  haveNotRecieve: {
    top: 47,
    left: 2,
    fontFamily: FontFamily.openSansRegular,
    color: Color.ew,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  frameParent: {
    top: 269,
    width: 228,
    height: 61,
    left: 20,
    position: "absolute",
  },
  forgotPasswordParent: {
    top: 78,
    width: 356,
    height: 330,
  },
  passwordChild: {
    top: 29,
    height: 51,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_300,
    borderStyle: "solid",
    width: 355,
    borderRadius: Border.br_17xl,
    left: 0,
  },
  passwordItem: {
    top: 44,
    height: 22,
    left: 19,
  },
  keepYourAccount: {
    top: 98,
    left: 16,
    color: Color.colorGray_1100,
  },
  text4: {
    left: 52,
    color: Color.colorGray_500,
    top: 42,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  eye: {
    backgroundColor: Color.colorGray_800,
  },
  password1: {
    fontSize: FontSize.size_sm,
    color: Color.colorDarkgray_300,
    left: 1,
    top: 0,
  },
  password: {
    top: 66,
    left: 3,
    height: 134,
  },
  createNewPasswordParent: {
    top: 478,
    width: 358,
    height: 200,
  },
  createNewPassword1: {
    top: 12,
    left: 49,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorsWhite,
  },
  button: {
    top: 772,
    left: 55,
    width: 321,
    height: 54,
    backgroundColor: "transparent",
    borderRadius: Border.br_17xl,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "7.94%",
    top: "3.78%",
    right: "89.7%",
    bottom: "94.53%",
    width: "2.36%",
    height: "1.69%",
    position: "absolute",
  },
  loginRegistrationPage: {
    backgroundColor: Color.colorsWhite,
    flex: 1,
    height: 926,
  },
});

export default LoginRegistrationPage;
