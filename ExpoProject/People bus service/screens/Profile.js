import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <LinearGradient
        style={styles.button}
        locations={[0, 1]}
        colors={["rgba(240, 0, 0, 0.96)", "#dc281e"]}
      >
        <Text style={[styles.countinue, styles.countinueFlexBox]}>
          Countinue
        </Text>
      </LinearGradient>
      <View style={[styles.gender, styles.phoneLayout]}>
        <Text style={[styles.gender1, styles.gender1Typo]}>Gender</Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector37.png")}
        />
      </View>
      <View style={[styles.confirm, styles.phoneLayout]}>
        <Text style={[styles.phoneNumber, styles.gender1Typo]}>
          Phone Number
        </Text>
        <Image
          style={[styles.vectorIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector37.png")}
        />
        <Image
          style={styles.image1Icon}
          contentFit="cover"
          source={require("../assets/image-1.png")}
        />
      </View>
      <View style={[styles.password, styles.phoneLayout]}>
        <Text style={[styles.dateOfBirth, styles.emailTypo]}>
          Date of Birth
        </Text>
        <Image
          style={[styles.vectorIcon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector38.png")}
        />
      </View>
      <View style={[styles.phone, styles.phoneLayout]}>
        <Text style={[styles.lastName, styles.nameTypo]}>Last Name</Text>
      </View>
      <View style={[styles.userName, styles.phoneLayout]}>
        <Text style={[styles.firstName, styles.nameTypo]}>First Name</Text>
      </View>
      <View style={styles.userName1}>
        <Text style={[styles.email, styles.emailPosition]}>Email</Text>
        <Image
          style={styles.userNameChild}
          contentFit="cover"
          source={require("../assets/group-6952.png")}
        />
      </View>
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../assets/group-6985.png")}
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
  countinueFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  phoneLayout: {
    height: 51,
    left: 32,
    width: 355,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_300,
    borderStyle: "solid",
    borderRadius: Border.br_17xl,
    position: "absolute",
  },
  gender1Typo: {
    width: 160,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    top: 13,
    height: 24,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  emailTypo: {
    color: Color.colorSilver_200,
    top: 14,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
  },
  nameTypo: {
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    top: 13,
    textAlign: "left",
    position: "absolute",
  },
  emailPosition: {
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
    top: 12,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorsWhite,
    left: "50%",
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
  gender1: {
    height: 24,
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
  },
  phoneNumber: {
    left: 73,
    height: 24,
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
  },
  dateOfBirth: {
    left: 59,
    textAlign: "left",
    position: "absolute",
  },
  vectorIcon2: {
    height: "43.14%",
    width: "6.2%",
    top: "27.45%",
    right: "87.04%",
    bottom: "29.41%",
    left: "6.76%",
    position: "absolute",
  },
  password: {
    top: 541,
  },
  lastName: {
    left: 23,
  },
  phone: {
    top: 397,
  },
  firstName: {
    left: 25,
  },
  userName: {
    top: 326,
  },
  email: {
    width: 47,
    color: Color.colorSilver_200,
    top: 14,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    height: 24,
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
    width: 355,
    borderWidth: 1,
    borderColor: Color.colorWhitesmoke_300,
    borderStyle: "solid",
    borderRadius: Border.br_17xl,
    position: "absolute",
  },
  profileChild: {
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
    top: 0,
    left: 0,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    color: Color.ew,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  action: {
    height: 18,
    left: 20,
    top: 14,
    width: 54,
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
  profile: {
    backgroundColor: Color.colorsWhite,
    flex: 1,
    height: 928,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile;
