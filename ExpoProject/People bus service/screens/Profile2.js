import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Profile2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile2}>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["rgba(240, 0, 0, 0.96)", "#dc281e"]}
      >
        <Text style={styles.countinue}>Countinue</Text>
      </LinearGradient>
      <View style={[styles.gender, styles.phoneLayout]}>
        <Text style={[styles.female, styles.textTypo1]}>Female</Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector39.png")}
        />
      </View>
      <View style={[styles.confirm, styles.phoneLayout]}>
        <Text style={[styles.text, styles.textTypo1]}>0312-3456789</Text>
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector39.png")}
        />
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </View>
      <View style={[styles.password, styles.passwordLayout]}>
        <View style={[styles.passwordChild, styles.phoneLayout]} />
        <Text style={styles.text1}>02/3/2001</Text>
        <Text style={[styles.text4, styles.textTypo]} />
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector40.png")}
        />
      </View>
      <View style={[styles.phone, styles.phoneLayout]}>
        <Text style={[styles.rose, styles.roseTypo]}>{`Rose `}</Text>
      </View>
      <View style={[styles.userName, styles.phoneLayout]}>
        <Text style={[styles.lesa, styles.roseTypo]}>{`Lesa `}</Text>
      </View>
      <View style={[styles.userName1, styles.passwordLayout]}>
        <Text
          style={[styles.haha828087gmailcom, styles.fillYourProfilePosition]}
        >
          Haha828087@gmail.com
        </Text>
        <Text style={[styles.text3, styles.textTypo]} />
        <Image
          style={styles.userNameChild}
          contentFit="cover"
          source={require("../assets/group-69521.png")}
        />
      </View>
      <Image
        style={styles.profile2Child}
        contentFit="cover"
        source={require("../assets/group-69851.png")}
      />
      <Text style={[styles.fillYourProfile, styles.timeTypo]}>
        Fill Your Profile
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
  phoneLayout: {
    height: 51,
    width: 355,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_300,
    borderStyle: "solid",
    borderRadius: Border.br_17xl,
    position: "absolute",
  },
  textTypo1: {
    height: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  passwordLayout: {
    width: 355,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.ew,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  roseTypo: {
    left: 25,
    color: Color.ew,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  fillYourProfilePosition: {
    left: 55,
    textAlign: "left",
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
    marginLeft: -54.5,
    fontSize: FontSize.size_xl,
    color: Color.colorsWhite,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    left: "50%",
    top: 12,
    position: "absolute",
  },
  button: {
    top: 772,
    left: 53,
    width: 321,
    height: 54,
    backgroundColor: "transparent",
    borderRadius: Border.br_17xl,
    position: "absolute",
  },
  female: {
    color: Color.colorDarkgray_100,
    width: 160,
    height: 24,
    top: 13,
    textAlign: "left",
    position: "absolute",
    left: 59,
  },
  vectorIcon: {
    top: "45.1%",
    right: "88.87%",
    bottom: "38.76%",
    left: "7.04%",
    width: "4.09%",
    height: "16.15%",
    maxWidth: "100%",
    position: "absolute",
  },
  gender: {
    top: 682,
    left: 32,
  },
  text: {
    left: 73,
    color: Color.ew,
    width: 160,
    height: 24,
    top: 13,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon1: {
    top: "47.06%",
    right: "81.83%",
    bottom: "36.79%",
    left: "14.08%",
    width: "4.09%",
    height: "16.15%",
    maxWidth: "100%",
    position: "absolute",
  },
  image1Icon: {
    top: 17,
    left: 14,
    width: 27,
    height: 16,
    position: "absolute",
  },
  confirm: {
    top: 612,
    left: 32,
  },
  passwordChild: {
    top: 11,
    left: 0,
  },
  text1: {
    top: 25,
    color: Color.ew,
    fontSize: FontSize.size_base,
    left: 59,
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    position: "absolute",
  },
  text4: {
    left: 190,
    top: 0,
  },
  vectorIcon2: {
    height: "35.48%",
    width: "6.2%",
    top: "40.32%",
    right: "87.04%",
    bottom: "24.19%",
    left: "6.76%",
    position: "absolute",
  },
  password: {
    top: 530,
    height: 62,
    left: 32,
  },
  rose: {
    left: 25,
    top: 12,
  },
  phone: {
    top: 397,
    left: 32,
  },
  lesa: {
    top: 13,
    left: 25,
  },
  userName: {
    top: 326,
    left: 32,
  },
  haha828087gmailcom: {
    width: 212,
    top: 14,
    color: Color.ew,
    height: 24,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  text3: {
    left: 72,
    top: 14,
  },
  userNameChild: {
    top: 15,
    width: 22,
    height: 22,
    left: 20,
    position: "absolute",
  },
  userName1: {
    top: 468,
    left: 36,
    height: 53,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_300,
    borderStyle: "solid",
    width: 355,
    borderRadius: Border.br_17xl,
  },
  profile2Child: {
    top: 146,
    left: 141,
    width: 146,
    height: 146,
    position: "absolute",
  },
  fillYourProfile: {
    top: 74,
    fontSize: FontSize.size_7xl,
    color: Color.colorGray_600,
    width: 202,
    left: 55,
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
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
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 0,
    left: 0,
    color: Color.ew,
  },
  action: {
    height: 18,
    left: 20,
    top: 14,
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
  profile2: {
    backgroundColor: Color.colorsWhite,
    flex: 1,
    height: 928,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile2;
