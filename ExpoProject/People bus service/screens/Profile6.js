import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Profile6 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile6}>
      <Text style={styles.pleasePutYour}>
        Please put your finger in the fingerprint scanner to get started
      </Text>
      <Text style={[styles.addAFingerprint, styles.continueFlexBox]}>
        Select which contact details should we use to reset your password
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
      <Image
        style={styles.undrawMobileEncryptionReYwIcon}
        contentFit="cover"
        source={require("../assets/undraw-mobile-encryption-re-yw3o-1.png")}
      />
      <Text style={[styles.forgetPassword, styles.textTypo]}>
        Forget Password
      </Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("LoginRegistrationPage")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector34.png")}
        />
      </Pressable>
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
    borderStyle: "solid",
    borderRadius: Border.br_11xl,
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
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  pleasePutYour: {
    top: 703,
    left: 51,
    fontSize: FontSize.size_base,
    width: 327,
    display: "none",
    height: 50,
    textAlign: "center",
    color: Color.ew,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  addAFingerprint: {
    top: 433,
    fontSize: FontSize.size_lg,
    width: 392,
    left: 25,
    textAlign: "left",
    height: 50,
    color: Color.ew,
    fontFamily: FontFamily.poppinsRegular,
  },
  continue: {
    marginLeft: -47.5,
    top: 12,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorsWhite,
    left: "50%",
  },
  button: {
    top: 826,
    left: 53,
    borderRadius: Border.br_17xl,
    width: 321,
    height: 54,
    backgroundColor: "transparent",
    position: "absolute",
  },
  frameChild: {
    top: 0,
    height: 132,
    borderWidth: 5,
    borderColor: Color.ew,
    borderStyle: "solid",
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
    height: 282,
    width: 378,
    left: 25,
    position: "absolute",
  },
  undrawMobileEncryptionReYwIcon: {
    marginLeft: -151,
    top: 134,
    width: 302,
    height: 274,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  forgetPassword: {
    top: 74,
    left: 55,
    fontSize: FontSize.size_7xl,
    color: Color.colorGray_600,
    width: 265,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    width: "100%",
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
  profile6: {
    backgroundColor: Color.colorsWhite,
    flex: 1,
    height: 928,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile6;
