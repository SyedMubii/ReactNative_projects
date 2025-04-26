import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import PasswordForm from "../components/PasswordForm";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Profile10 = () => {
  return (
    <View style={styles.profile10}>
      <Text style={styles.pleasePutYour}>
        Please put your finger in the fingerprint scanner to get started
      </Text>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["rgba(240, 0, 0, 0.96)", "#dc281e"]}
      >
        <Text style={styles.continue}>Continue</Text>
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
      <Text style={[styles.createNewPassword, styles.congratulationsTypo]}>
        Create New Password
      </Text>
      <Image
        style={styles.howItWorksStep22af33730f0Icon}
        contentFit="cover"
        source={require("../assets/howitworksstep22af33730f09c498707d76450918f220f2899c3da63b532847a71a16ea5b6d9dd-11.png")}
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
      <PasswordForm propTop={564} />
      <PasswordForm propTop={645} />
      <View style={[styles.profile10Child, styles.informChildPosition]} />
      <View style={[styles.info, styles.informLayout]}>
        <View style={[styles.inform, styles.informLayout]}>
          <View style={[styles.informChild, styles.informLayout]} />
        </View>
        <View style={[styles.offlineButton, styles.offlineLayout]}>
          <View style={[styles.offlineButtonChild, styles.offlineLayout]} />
          <Text style={styles.skipForNow}>Skip for now</Text>
        </View>
        <Image
          style={styles.infoChild}
          contentFit="cover"
          source={require("../assets/ellipse-371.png")}
        />
        <Image
          style={styles.infoItem}
          contentFit="cover"
          source={require("../assets/ellipse-38.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector43.png")}
        />
        <Text style={[styles.congratulations, styles.congratulationsTypo]}>
          Congratulations
        </Text>
        <Text style={[styles.yourAccountIs, styles.timeTypo]}>
          Your account is ready to use. You will be redirected to the Home Page
          in a few Second
        </Text>
      </View>
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
    letterSpacing: 0.5,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 121,
    textAlign: "left",
    color: Color.ew,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.ew,
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
  congratulationsTypo: {
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  rememberMeTypo: {
    textAlign: "justify",
    left: 36,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.ew,
    position: "absolute",
  },
  informChildPosition: {
    left: 0,
    top: 0,
  },
  informLayout: {
    height: 478,
    width: 336,
    position: "absolute",
  },
  offlineLayout: {
    height: 52,
    width: 280,
    position: "absolute",
  },
  timeTypo: {
    fontSize: FontSize.size_mini,
    textAlign: "center",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  pleasePutYour: {
    top: 703,
    left: 51,
    width: 327,
    height: 50,
    display: "none",
    fontSize: FontSize.size_base,
    textAlign: "center",
    color: Color.ew,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  continue: {
    marginLeft: -47.5,
    textAlign: "left",
    color: Color.colorsWhite,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    top: 12,
    left: "50%",
    position: "absolute",
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
  },
  frameItem: {
    top: 24,
  },
  chatBubbleIcon: {
    top: 48,
    width: 32,
    height: 32,
    left: 46,
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
    color: Color.colorGray_600,
    width: 307,
    textAlign: "left",
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
  profile10Child: {
    backgroundColor: "rgba(83, 88, 97, 0.9)",
    width: 428,
    height: 928,
    position: "absolute",
  },
  informChild: {
    borderRadius: Border.br_20xl,
    left: 0,
    top: 0,
    backgroundColor: Color.colorsWhite,
  },
  inform: {
    shadowColor: "rgba(55, 36, 144, 0.31)",
    shadowOffset: {
      width: -4,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    left: 0,
    top: 0,
  },
  offlineButtonChild: {
    marginLeft: -140,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorTomato_100,
    top: 0,
    left: "50%",
  },
  skipForNow: {
    marginLeft: -61,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorsWhite,
    fontSize: FontSize.size_xl,
    left: "50%",
    top: 12,
    textAlign: "center",
    position: "absolute",
  },
  offlineButton: {
    top: 397,
    left: 28,
  },
  infoChild: {
    top: 61,
    left: 101,
    width: 140,
    height: 140,
    position: "absolute",
  },
  infoItem: {
    top: 68,
    left: 108,
    width: 126,
    height: 126,
    position: "absolute",
  },
  vectorIcon3: {
    height: "9.84%",
    width: "13.99%",
    top: "22.25%",
    right: "41.96%",
    bottom: "67.91%",
    left: "44.05%",
  },
  congratulations: {
    top: 244,
    left: 63,
    textAlign: "center",
    fontSize: FontSize.size_7xl,
    color: Color.ew,
  },
  yourAccountIs: {
    top: 297,
    left: 24,
    color: Color.colorDarkslategray_200,
    width: 295,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  info: {
    top: 225,
    left: 46,
  },
  time: {
    letterSpacing: 0,
    lineHeight: 18,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.ew,
    left: 0,
    top: 0,
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
  profile10: {
    flex: 1,
    height: 929,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorsWhite,
  },
});

export default Profile10;
