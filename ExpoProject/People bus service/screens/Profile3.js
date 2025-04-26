import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Profile3 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.profile3, styles.iconLayout1]}>
      <View style={styles.button}>
        <LinearGradient
          style={styles.buttonChild}
          locations={[0, 1]}
          colors={["rgba(240, 0, 0, 0.96)", "#dc281e"]}
        />
        <Text style={[styles.countinue, styles.countinueFlexBox]}>
          Countinue
        </Text>
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={styles.groupItem} />
        <Text
          style={[styles.text, styles.textClr]}
        >{`1                   2                   3

4                   5                   6

7                   8                   9

*                   0                                `}</Text>
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/vector-26.png")}
        />
        <Image
          style={[styles.closeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/close.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout]}>
        <View style={[styles.rectangleView, styles.childLayout]} />
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-314.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.groupLayout]}>
        <View style={[styles.rectangleView, styles.childLayout]} />
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-314.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild3, styles.childLayout]} />
        <Text style={[styles.text1, styles.text1Typo]}>7</Text>
      </View>
      <View style={[styles.profile3Child, styles.childLayout]} />
      <Text style={[styles.addAPin, styles.timeFlexBox]}>
        Add a PIN number to make your account more secure.
      </Text>
      <Text style={[styles.createNewPin, styles.timeTypo]}>Create New PIN</Text>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("PersonalCenter")}
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
  textClr: {
    color: Color.ew,
    textAlign: "left",
  },
  iconLayout: {
    height: 12,
    position: "absolute",
  },
  groupLayout: {
    height: 61,
    width: 83,
    top: 363,
    position: "absolute",
  },
  childLayout: {
    borderWidth: 1,
    borderStyle: "solid",
    height: 61,
    width: 83,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGray_200,
    position: "absolute",
  },
  text1Typo: {
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
  },
  timeFlexBox: {
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
  buttonChild: {
    marginLeft: -160.5,
    borderRadius: Border.br_17xl,
    backgroundColor: "transparent",
    top: 0,
    height: 54,
    width: 321,
    left: "50%",
    position: "absolute",
  },
  countinue: {
    marginLeft: -54.5,
    top: 12,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorsWhite,
    fontSize: FontSize.size_xl,
    left: "50%",
  },
  button: {
    marginLeft: -166,
    top: 540,
    height: 54,
    width: 321,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    borderTopLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    backgroundColor: Color.colorGray_200,
    left: 0,
    height: 306,
    width: 428,
    top: 0,
    position: "absolute",
  },
  groupItem: {
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
    fontFamily: FontFamily.openSansRegular,
    width: 290,
    position: "absolute",
  },
  groupInner: {
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
    height: 306,
    width: 428,
    position: "absolute",
  },
  rectangleView: {
    borderColor: Color.colorWhitesmoke_200,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  ellipseIcon: {
    top: 19,
    left: 29,
    width: 25,
    height: 24,
    position: "absolute",
  },
  rectangleGroup: {
    left: 22,
  },
  rectangleContainer: {
    left: 121,
  },
  groupChild3: {
    borderColor: Color.ew,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
    top: 0,
  },
  text1: {
    top: 8,
    left: 33,
    fontSize: FontSize.size_11xl,
    width: 27,
    height: 34,
    color: Color.ew,
    textAlign: "left",
  },
  groupView: {
    left: 220,
  },
  profile3Child: {
    left: 320,
    borderColor: Color.colorWhitesmoke_200,
    borderWidth: 1,
    borderStyle: "solid",
    top: 363,
  },
  addAPin: {
    top: 233,
    left: 51,
    width: 327,
    height: 50,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
    fontSize: FontSize.size_xl,
  },
  createNewPin: {
    top: 74,
    left: 55,
    fontSize: FontSize.size_7xl,
    color: Color.colorGray_600,
    width: 202,
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
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "center",
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
  },
  statusBar: {
    marginLeft: -183,
    top: 9,
    width: 375,
    height: 44,
    left: "50%",
    position: "absolute",
  },
  profile3: {
    backgroundColor: Color.colorsWhite,
    flex: 1,
    height: 928,
  },
});

export default Profile3;
