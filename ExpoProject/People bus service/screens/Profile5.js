import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const Profile5 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile5}>
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
        style={[styles.fingerprintIcon, styles.infoItemPosition]}
        contentFit="cover"
        source={require("../assets/fingerprint.png")}
      />
      <Text style={[styles.pleasePutYour, styles.pleasePutYourLayout]}>
        Please put your finger in the fingerprint scanner to get started
      </Text>
      <Text style={[styles.addAFingerprint, styles.skipForNowTypo]}>
        Add a fingerprint to make your account more secure.
      </Text>
      <Text style={[styles.setYourFingerprint, styles.timeTypo1]}>
        Set your Fingerprint
      </Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("PersonalCenter")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector34.png")}
        />
      </Pressable>
      <View style={[styles.info, styles.infoLayout]}>
        <View style={[styles.inform, styles.timePosition]} />
        <View style={[styles.offlineButton, styles.statusBarPosition]}>
          <Pressable
            style={[styles.skipForNowContainer, styles.statusBarPosition]}
            onPress={() => navigation.navigate("Profile12")}
          >
            <Text style={[styles.skipForNow, styles.skipForNowTypo]}>
              Skip for now
            </Text>
          </Pressable>
        </View>
        <Image
          style={styles.infoChild}
          contentFit="cover"
          source={require("../assets/ellipse-371.png")}
        />
        <Image
          style={[styles.infoItem, styles.infoItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-38.png")}
        />
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector41.png")}
        />
        <Text style={[styles.congratulations, styles.timeTypo1]}>
          Congratulations
        </Text>
        <Text style={[styles.yourAccountIs, styles.timeTypo]}>
          Your account is ready to use. You will be redirected to the Home Page
          in a few Second
        </Text>
      </View>
      <Image
        style={styles.profile5Child}
        contentFit="cover"
        source={require("../assets/group-6991.png")}
      />
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={[styles.action, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
        <Image
          style={styles.containerIcon}
          contentFit="cover"
          source={require("../assets/container4.png")}
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
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
    top: 16,
    textAlign: "center",
    color: Color.colorsWhite,
    position: "absolute",
  },
  infoItemPosition: {
    left: 108,
    position: "absolute",
  },
  pleasePutYourLayout: {
    height: 50,
    width: 327,
    left: 51,
    color: Color.ew,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  skipForNowTypo: {
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  timeTypo1: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  infoLayout: {
    height: 478,
    width: 336,
    position: "absolute",
  },
  timePosition: {
    left: 0,
    top: 0,
  },
  statusBarPosition: {
    left: "50%",
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
  countinue: {
    left: 49,
    textAlign: "center",
    color: Color.colorsWhite,
  },
  button: {
    left: 220,
    backgroundColor: "transparent",
  },
  skip: {
    left: 76,
    textAlign: "center",
    color: Color.colorsWhite,
  },
  button1: {
    left: 22,
    backgroundColor: Color.ew,
  },
  fingerprintIcon: {
    top: 354,
    width: 221,
    height: 221,
    overflow: "hidden",
  },
  pleasePutYour: {
    top: 693,
    fontSize: FontSize.size_base,
    textAlign: "center",
  },
  addAFingerprint: {
    top: 183,
    height: 50,
    width: 327,
    left: 51,
    color: Color.ew,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  setYourFingerprint: {
    top: 74,
    left: 55,
    color: Color.colorGray_600,
    textAlign: "left",
    width: 265,
    fontSize: FontSize.size_7xl,
    fontWeight: "600",
    position: "absolute",
  },
  icon: {
    height: "100%",
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
  inform: {
    borderRadius: Border.br_20xl,
    shadowColor: "rgba(55, 36, 144, 0.31)",
    shadowOffset: {
      width: -4,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 478,
    width: 336,
    position: "absolute",
    backgroundColor: Color.colorsWhite,
  },
  skipForNow: {
    marginLeft: -61,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorsWhite,
  },
  skipForNowContainer: {
    top: 12,
  },
  offlineButton: {
    marginLeft: -140,
    top: 397,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorTomato_100,
    width: 280,
    height: 52,
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
    width: 126,
    height: 126,
  },
  vectorIcon: {
    height: "9.83%",
    width: "13.99%",
    top: "22.18%",
    right: "41.96%",
    bottom: "67.99%",
    left: "44.05%",
    position: "absolute",
  },
  congratulations: {
    top: 244,
    left: 63,
    fontSize: FontSize.size_7xl,
    fontWeight: "600",
    position: "absolute",
    color: Color.ew,
    textAlign: "center",
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
  profile5Child: {
    top: 266,
    left: 124,
    width: 186,
    height: 181,
    position: "absolute",
  },
  time: {
    letterSpacing: 0,
    lineHeight: 18,
    fontSize: FontSize.size_mini,
    textAlign: "center",
    left: 0,
    top: 0,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
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
  },
  profile5: {
    flex: 1,
    height: 928,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorsWhite,
  },
});

export default Profile5;
