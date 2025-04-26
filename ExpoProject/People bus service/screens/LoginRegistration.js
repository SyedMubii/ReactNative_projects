import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const LoginRegistration = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginRegistration}>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["rgba(240, 0, 0, 0.96)", "#dc281e"]}
      >
        <Text style={styles.createAccount}>Create Account</Text>
      </LinearGradient>
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("LoginRegistrationPage")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/group-6950.png")}
        />
      </Pressable>
      <Text style={styles.register}>Register</Text>
      <View style={styles.byClickingTheRegisterButtoParent}>
        <Text style={[styles.byClickingTheContainer, styles.theTypo]}>
          <Text style={styles.byClickingThe}>{`By clicking the `}</Text>
          <Text style={styles.register1}>Register</Text>
          <Text style={styles.byClickingThe}> button, you agree to</Text>
        </Text>
        <Text style={[styles.thePublicOffer, styles.theTypo]}>
          the public offer
        </Text>
      </View>
      <View style={[styles.confirm, styles.phoneLayout]}>
        <Text style={[styles.confirmPassword, styles.passwordTypo]}>
          Confirm Password
        </Text>
        <Image
          style={[styles.confirmChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/group-6946.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector36.png")}
        />
      </View>
      <View style={[styles.password, styles.phoneLayout]}>
        <Text style={[styles.password1, styles.passwordTypo]}>Password</Text>
        <Image
          style={[styles.confirmChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/group-101.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector36.png")}
        />
      </View>
      <View style={[styles.phone, styles.phoneLayout]}>
        <Image
          style={[styles.phoneChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/group-6952.png")}
        />
        <Text style={[styles.phoneNumber, styles.passwordTypo]}>
          Phone Number
        </Text>
      </View>
      <View style={[styles.userName, styles.phoneLayout]}>
        <Image
          style={[styles.phoneChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/group-6952.png")}
        />
        <Text style={[styles.phoneNumber, styles.passwordTypo]}>
          Username or Email
        </Text>
      </View>
      <Text style={styles.signUp}>Sign Up</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("PersonalCenter")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector34.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  theTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: 13,
    left: 0,
    textAlign: "justify",
    position: "absolute",
  },
  phoneLayout: {
    height: 51,
    width: 355,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_300,
    borderStyle: "solid",
    left: 32,
    borderRadius: Border.br_17xl,
    position: "absolute",
  },
  passwordTypo: {
    fontSize: FontSize.size_base,
    left: 53,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  childLayout: {
    height: 22,
    width: 22,
    left: 20,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  createAccount: {
    top: 12,
    left: 89,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorsWhite,
    textAlign: "left",
    position: "absolute",
  },
  button: {
    top: 765,
    left: 48,
    width: 321,
    height: 54,
    backgroundColor: "transparent",
    borderRadius: Border.br_17xl,
    position: "absolute",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 338,
    top: 591,
    width: 60,
    height: 60,
    position: "absolute",
  },
  register: {
    top: 608,
    left: 34,
    fontSize: FontSize.size_8xl,
    color: "#1a1919",
    width: 118,
    height: 30,
    textAlign: "justify",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  byClickingThe: {
    color: Color.ew,
  },
  register1: {
    color: Color.colorRed_100,
  },
  byClickingTheContainer: {
    top: 0,
    height: 14,
    width: 346,
    overflow: "hidden",
  },
  thePublicOffer: {
    top: 19,
    width: 102,
    height: 17,
    color: Color.ew,
  },
  byClickingTheRegisterButtoParent: {
    top: 525,
    left: 41,
    height: 36,
    width: 346,
    position: "absolute",
  },
  confirmPassword: {
    color: Color.colorDarkgray_100,
    width: 160,
    height: 24,
    top: 13,
  },
  confirmChild: {
    top: 15,
  },
  vectorIcon: {
    height: "32.68%",
    width: "7.04%",
    top: "35.29%",
    right: "5.35%",
    bottom: "32.03%",
    left: "87.61%",
    position: "absolute",
  },
  confirm: {
    top: 447,
  },
  password1: {
    top: 14,
    color: Color.colorSilver_200,
  },
  password: {
    top: 353,
  },
  phoneChild: {
    top: 13,
  },
  phoneNumber: {
    color: Color.colorDarkgray_200,
    top: 13,
  },
  phone: {
    top: 260,
  },
  userName: {
    top: 173,
  },
  signUp: {
    top: 74,
    left: 35,
    fontSize: 40,
    color: Color.colorGray_600,
    width: 158,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "6.07%",
    top: "3.99%",
    right: "91.57%",
    bottom: "94.33%",
    width: "2.36%",
    height: "1.68%",
    position: "absolute",
  },
  loginRegistration: {
    backgroundColor: Color.colorsWhite,
    flex: 1,
    height: 928,
    overflow: "hidden",
    width: "100%",
  },
});

export default LoginRegistration;
