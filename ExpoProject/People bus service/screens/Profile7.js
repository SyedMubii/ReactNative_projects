import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Profile7 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.profile7, styles.iconLayout1]}>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["rgba(240, 0, 0, 0.96)", "#dc281e"]}
      >
        <Text style={[styles.countinue, styles.countinueFlexBox]}>
          Countinue
        </Text>
      </LinearGradient>
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <Text style={styles.text}>{`1                   2                   3

4                   5                   6

7                   8                   9

*                   0                                `}</Text>
        <Image
          style={styles.frameItem}
          contentFit="cover"
          source={require("../assets/vector-26.png")}
        />
        <Image
          style={[styles.closeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/close.png")}
        />
      </View>
      <View style={[styles.wrapper, styles.wrapperLayout]}>
        <Text style={styles.text1}>4</Text>
      </View>
      <View style={[styles.container, styles.wrapperLayout]}>
        <Text style={styles.text1}>7</Text>
      </View>
      <View style={[styles.profile7Child, styles.profile7Border]} />
      <View style={[styles.profile7Item, styles.profile7Border]} />
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
        onPress={() => navigation.navigate("Profile6")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector34.png")}
        />
      </Pressable>
      <View style={styles.statusBar}>
        <View style={[styles.action, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
        <Image
          style={[styles.containerIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/container3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    overflow: "hidden",
    width: "100%",
  },
  countinueFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 12,
    position: "absolute",
  },
  wrapperLayout: {
    height: 61,
    width: 83,
    borderWidth: 1,
    borderColor: Color.ew,
    borderStyle: "solid",
    top: 296,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_200,
    position: "absolute",
  },
  profile7Border: {
    borderColor: Color.colorWhitesmoke_200,
    height: 61,
    width: 83,
    borderWidth: 1,
    borderStyle: "solid",
    top: 296,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_200,
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
  countinue: {
    marginLeft: -54.5,
    top: 12,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorsWhite,
    left: "50%",
  },
  button: {
    top: 540,
    left: 53,
    borderRadius: Border.br_17xl,
    width: 321,
    height: 54,
    backgroundColor: "transparent",
    position: "absolute",
  },
  frameChild: {
    top: 292,
    left: 147,
    backgroundColor: Color.colorDimgray_100,
    width: 134,
    height: 5,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  text: {
    top: 22,
    left: 70,
    fontSize: FontSize.size_6xl,
    lineHeight: 32,
    fontFamily: FontFamily.openSansSemiBold,
    width: 290,
    color: Color.ew,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  frameItem: {
    top: 225,
    left: 341,
    width: 22,
    height: 15,
    position: "absolute",
  },
  closeIcon: {
    top: 226,
    left: 347,
    width: 12,
  },
  rectangleParent: {
    top: 622,
    left: 1,
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    width: 428,
    height: 306,
    backgroundColor: Color.colorGray_200,
    position: "absolute",
  },
  text1: {
    top: 8,
    left: 33,
    fontSize: FontSize.size_11xl,
    width: 27,
    height: 34,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.ew,
    textAlign: "left",
    position: "absolute",
  },
  wrapper: {
    left: 121,
  },
  container: {
    left: 22,
  },
  profile7Child: {
    left: 320,
  },
  profile7Item: {
    left: 220,
  },
  codeHasBeen: {
    marginLeft: -164,
    top: 216,
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
    top: 416,
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
  },
  statusBar: {
    marginLeft: -183,
    top: 9,
    width: 375,
    height: 44,
    left: "50%",
    position: "absolute",
  },
  profile7: {
    backgroundColor: Color.colorsWhite,
    flex: 1,
    height: 928,
  },
});

export default Profile7;
