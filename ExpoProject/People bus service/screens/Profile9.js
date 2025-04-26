import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import PasswordForm from "../components/PasswordForm";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Profile9 = () => {
  return (
    <View style={styles.profile9}>
      <Text style={styles.pleasePutYour}>
        Please put your finger in the fingerprint scanner to get started
      </Text>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["rgba(240, 0, 0, 0.96)", "#dc281e"]}
      >
        <Text style={[styles.continue, styles.continueFlexBox]}>Continue</Text>
      </LinearGradient>
      <View style={styles.rectangleParent}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <Image
          style={[styles.frameItem, styles.frameItemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-333.png")}
        />
        <Image
          style={styles.chatBubbleIcon}
          contentFit="cover"
          source={require("../assets/chat-bubble.png")}
        />
        <Text style={[styles.viaSms, styles.viaTypo]}>via SMS:</Text>
        <Text style={[styles.text, styles.textTypo]}>+1 111 *****99</Text>
        <View style={[styles.frameInner, styles.frameLayout]} />
        <Image
          style={[styles.ellipseIcon, styles.frameItemLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-333.png")}
        />
        <Text style={[styles.viaEmail, styles.viaTypo]}>via Email</Text>
        <Text style={[styles.andeyyourdomaincom, styles.textTypo]}>
          <Text style={styles.andeyyourdomaincomTxt}>
            and***ey@yourdomain.com
          </Text>
        </Text>
        <Image
          style={[styles.letterIcon, styles.statusBarLayout]}
          contentFit="cover"
          source={require("../assets/letter.png")}
        />
      </View>
      <View style={[styles.gender, styles.genderLayout]}>
        <View style={[styles.genderChild, styles.genderLayout]} />
        <Text style={[styles.female, styles.text1Typo]}>Female</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector39.png")}
        />
      </View>
      <View style={[styles.confirm, styles.genderLayout]}>
        <View style={[styles.genderChild, styles.genderLayout]} />
        <Text style={[styles.text1, styles.text1Typo]}>0312-3456789</Text>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector39.png")}
        />
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </View>
      <Text style={[styles.createNewPassword, styles.textTypo]}>
        Create New Password
      </Text>
      <Image
        style={styles.howItWorksStep22af33730f0Icon}
        contentFit="cover"
        source={require("../assets/howitworksstep22af33730f09c498707d76450918f220f2899c3da63b532847a71a16ea5b6d9dd-1.png")}
      />
      <Text style={[styles.createYourNew, styles.rememberMeTypo]}>
        Create Your New Password
      </Text>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector42.png")}
        />
        <Text style={[styles.rememberMe, styles.rememberMeTypo]}>
          Remember me
        </Text>
      </View>
      <PasswordForm />
      <PasswordForm propTop={645} />
      <View style={[styles.statusBar, styles.statusBarLayout]}>
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
  continueFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  frameLayout: {
    height: 132,
    borderWidth: 5,
    borderColor: Color.ew,
    borderRadius: Border.br_11xl,
    borderStyle: "solid",
    left: 0,
    width: 378,
    position: "absolute",
  },
  frameItemLayout: {
    height: 80,
    width: 81,
    left: 22,
    position: "absolute",
  },
  viaTypo: {
    width: 64,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    letterSpacing: 0.5,
    fontSize: FontSize.size_smi,
    left: 121,
    textAlign: "left",
    color: Color.ew,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  statusBarLayout: {
    height: 44,
    position: "absolute",
  },
  genderLayout: {
    height: 51,
    width: 355,
    position: "absolute",
  },
  text1Typo: {
    height: 24,
    width: 160,
    top: 13,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rememberMeTypo: {
    textAlign: "justify",
    left: 36,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.ew,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  pleasePutYour: {
    top: 703,
    left: 51,
    fontFamily: FontFamily.poppinsRegular,
    width: 327,
    height: 50,
    display: "none",
    textAlign: "center",
    fontSize: FontSize.size_base,
    color: Color.ew,
    position: "absolute",
  },
  continue: {
    marginLeft: -47.5,
    top: 12,
    fontSize: FontSize.size_xl,
    color: Color.colorsWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    left: "50%",
  },
  button: {
    top: 826,
    left: 53,
    width: 321,
    height: 54,
    backgroundColor: "transparent",
    borderRadius: Border.br_17xl,
    position: "absolute",
  },
  frameChild: {
    top: 0,
    height: 132,
    borderWidth: 5,
    borderColor: Color.ew,
    borderRadius: Border.br_11xl,
  },
  frameItem: {
    top: 24,
  },
  chatBubbleIcon: {
    top: 48,
    left: 46,
    width: 32,
    height: 32,
    position: "absolute",
  },
  viaSms: {
    top: 40,
  },
  text: {
    top: 70,
    letterSpacing: 0.6,
    width: 112,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.ew,
    position: "absolute",
    left: 121,
  },
  frameInner: {
    top: 150,
  },
  ellipseIcon: {
    top: 176,
  },
  viaEmail: {
    top: 192,
  },
  andeyyourdomaincomTxt: {
    lineBreak: "anywhere",
    width: "100%",
  },
  andeyyourdomaincom: {
    top: 222,
    left: 120,
    width: 226,
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: Color.ew,
    position: "absolute",
  },
  letterIcon: {
    top: 194,
    left: 40,
    width: 44,
  },
  rectangleParent: {
    top: 503,
    left: 25,
    height: 282,
    width: 378,
    display: "none",
    position: "absolute",
  },
  genderChild: {
    borderColor: Color.colorWhitesmoke_300,
    borderWidth: 1,
    width: 355,
    borderStyle: "solid",
    left: 0,
    top: 0,
    borderRadius: Border.br_17xl,
  },
  female: {
    left: 59,
    color: Color.colorDarkgray_100,
  },
  vectorIcon: {
    top: "45.1%",
    right: "88.87%",
    bottom: "38.76%",
    left: "7.04%",
    width: "4.09%",
    height: "16.15%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  gender: {
    top: 634,
    left: 37,
    width: 355,
    display: "none",
  },
  text1: {
    left: 73,
    color: Color.ew,
    width: 160,
    top: 13,
  },
  vectorIcon1: {
    top: "47.06%",
    right: "81.83%",
    bottom: "36.79%",
    left: "14.08%",
    width: "4.09%",
    height: "16.15%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  image1Icon: {
    top: 17,
    left: 14,
    width: 27,
    height: 16,
    position: "absolute",
  },
  confirm: {
    top: 564,
    left: 37,
    width: 355,
    display: "none",
  },
  createNewPassword: {
    top: 74,
    left: 55,
    fontSize: FontSize.size_7xl,
    color: Color.colorGray_600,
    width: 307,
    textAlign: "left",
    position: "absolute",
  },
  howItWorksStep22af33730f0Icon: {
    marginLeft: -170,
    top: 184,
    width: 340,
    height: 258,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  createYourNew: {
    top: 520,
    fontSize: FontSize.size_lg,
    width: 346,
    height: 14,
    overflow: "hidden",
  },
  vectorIcon2: {
    height: "100%",
    width: "14.3%",
    top: "0%",
    right: "85.7%",
    bottom: "0%",
    left: "0%",
  },
  rememberMe: {
    top: 6,
    fontSize: FontSize.size_base_5,
  },
  vectorParent: {
    top: 726,
    left: 150,
    width: 153,
    height: 22,
    position: "absolute",
  },
  time: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 0,
    width: 54,
    top: 0,
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
    left: "50%",
  },
  profile9: {
    backgroundColor: Color.colorsWhite,
    flex: 1,
    height: 929,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile9;
