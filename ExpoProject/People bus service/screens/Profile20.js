import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { FontFamily, FontSize, Border, Color } from "../GlobalStyles";

const Profile20 = () => {
  return (
    <View style={styles.profile20}>
      <View style={[styles.message, styles.messageLayout]}>
        <Image
          style={[styles.voiceBarIcon, styles.messageLayout]}
          contentFit="cover"
          source={require("../assets/voice-bar.png")}
        />
        <View style={styles.messageChild} />
        <Image
          style={styles.imageIcon}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
        <Text style={[styles.message1, styles.text2Typo]}>Message...</Text>
      </View>
      <View style={styles.ofCourseWeWillBeWaitingParent}>
        <Text
          style={[styles.ofCourseWe, styles.canIMakeTypo]}
        >{`Of course, we will be 
waiting for your offer 👍🏻`}</Text>
        <Text style={[styles.text, styles.textTypo1]}>09:41</Text>
      </View>
      <View style={styles.thankYouIWillMakeAnOffeParent}>
        <Text
          style={[styles.thankYouI, styles.youTypo]}
        >{`Thank you! I will make an
offer right now 😍
😍
`}</Text>
        <Text style={[styles.text1, styles.textTypo]}>09:41</Text>
      </View>
      <View style={styles.parent}>
        <Text style={[styles.text2, styles.text2Typo]}>09:41</Text>
        <Text
          style={[styles.ofCourseYou, styles.youTypo]}
        >{`Of course you can, please
make an offer. If the price
is still suitable. then we will
accept 😁
😁
`}</Text>
      </View>
      <View style={styles.group}>
        <Text style={[styles.text3, styles.textTypo]}>09:41</Text>
        <Text style={styles.helloGoodMorning}>Hello, good morning</Text>
      </View>
      <View
        style={[styles.canIMakeAnOfferToThePriParent, styles.parentPosition]}
      >
        <Text style={[styles.canIMake, styles.canIMakeTypo]}>
          Can I make an offer to the price? I think the current price is too
          high 😅 😅
        </Text>
        <Text style={[styles.text4, styles.textTypo1]}>09:41</Text>
      </View>
      <View
        style={[styles.hiGoodMorningIWantToBuyParent, styles.parentPosition]}
      >
        <Text style={[styles.thankYouI, styles.youTypo]}>
          Hi Good Morning, I want to buy a BMW M5 Series
        </Text>
        <Text style={[styles.text5, styles.textTypo1]}>09:41</Text>
      </View>
      <View style={styles.today}>
        <Text style={[styles.today1, styles.text2Typo]}>Today</Text>
      </View>
      <View style={styles.peopleBusService}>
        <Image
          style={[styles.vectorIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/vector19.png")}
        />
        <Image
          style={[styles.frameIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <Text style={[styles.peopleBusService1, styles.timeTypo]}>
          People Bus Service
        </Text>
      </View>
      <View style={styles.statusBar}>
        <View style={[styles.action, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
        <Image
          style={styles.containerIcon}
          contentFit="cover"
          source={require("../assets/container1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageLayout: {
    height: 56,
    position: "absolute",
  },
  text2Typo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    position: "absolute",
  },
  canIMakeTypo: {
    width: 213,
    alignItems: "center",
    display: "flex",
    top: 12,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  textTypo1: {
    left: 233,
    textAlign: "left",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  youTypo: {
    top: 11,
    width: 213,
    alignItems: "center",
    display: "flex",
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    left: 232,
    textAlign: "left",
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  parentPosition: {
    left: 123,
    width: 283,
    borderTopLeftRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_mini,
    position: "absolute",
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  timeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 18,
    letterSpacing: 0,
    color: Color.ew,
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  voiceBarIcon: {
    left: 325,
    width: 56,
    top: 0,
  },
  messageChild: {
    top: 1,
    borderRadius: Border.br_mini,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    width: 314,
    height: 55,
    opacity: 0.1,
    left: 0,
    position: "absolute",
  },
  imageIcon: {
    top: 20,
    left: 275,
    width: 16,
    height: 16,
    position: "absolute",
  },
  message1: {
    top: 18,
    left: 22,
    color: "#a3a3a3",
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  message: {
    top: 822,
    left: 25,
    width: 381,
  },
  ofCourseWe: {
    color: Color.ew,
    left: 20,
  },
  text: {
    color: Color.colorWhitesmoke_100,
    top: 36,
  },
  ofCourseWeWillBeWaitingParent: {
    top: 666,
    height: 68,
    width: 284,
    backgroundColor: Color.colorWhitesmoke_100,
    borderBottomLeftRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    left: 26,
    position: "absolute",
  },
  thankYouI: {
    color: Color.colorsWhite,
    left: 20,
  },
  text1: {
    color: Color.colorsWhite,
    top: 36,
  },
  thankYouIWillMakeAnOffeParent: {
    top: 574,
    left: 124,
    width: 283,
    borderTopLeftRadius: Border.br_mini,
    backgroundColor: Color.ew,
    height: 68,
    borderBottomLeftRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_mini,
    position: "absolute",
  },
  text2: {
    top: 79,
    left: 231,
    color: Color.ew,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
  },
  ofCourseYou: {
    left: 18,
    color: "#040404",
  },
  parent: {
    top: 439,
    left: 27,
    width: 282,
    height: 110,
    backgroundColor: Color.colorWhitesmoke_100,
    borderBottomLeftRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    position: "absolute",
  },
  text3: {
    top: 15,
    color: Color.ew,
  },
  helloGoodMorning: {
    top: 13,
    color: Color.ew,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_mini,
    left: 20,
    textAlign: "left",
    position: "absolute",
  },
  group: {
    top: 379,
    height: 48,
    width: 284,
    left: 26,
    backgroundColor: Color.colorWhitesmoke_100,
    borderBottomLeftRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    position: "absolute",
  },
  canIMake: {
    left: 19,
    color: Color.colorsWhite,
  },
  text4: {
    top: 58,
    color: Color.colorsWhite,
  },
  canIMakeAnOfferToThePriParent: {
    top: 266,
    backgroundColor: "#191919",
    height: 90,
  },
  text5: {
    color: Color.colorsWhite,
    top: 36,
  },
  hiGoodMorningIWantToBuyParent: {
    top: 188,
    backgroundColor: Color.ew,
    left: 123,
    height: 68,
  },
  today1: {
    top: 6,
    left: 11,
    fontSize: 9,
    color: Color.ew,
  },
  today: {
    top: 140,
    left: 191,
    borderRadius: 5,
    backgroundColor: Color.colorWhitesmoke_200,
    width: 50,
    height: 24,
    position: "absolute",
  },
  vectorIcon: {
    height: "40.84%",
    width: "6.4%",
    top: "29.86%",
    right: "93.6%",
    bottom: "29.3%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  frameIcon: {
    left: 289,
    width: 52,
    height: 52,
    top: 0,
  },
  peopleBusService1: {
    top: 17,
    left: 23,
    fontSize: 21,
    width: 229,
    position: "absolute",
  },
  peopleBusService: {
    top: 67,
    left: 29,
    width: 342,
    height: 52,
    position: "absolute",
  },
  time: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    lineHeight: 18,
    letterSpacing: 0,
    color: Color.ew,
    fontSize: FontSize.size_mini,
    width: 54,
    left: 0,
    top: 0,
  },
  action: {
    top: 14,
    height: 18,
    left: 20,
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
    left: "50%",
    width: 375,
    height: 44,
    position: "absolute",
  },
  profile20: {
    backgroundColor: Color.colorsWhite,
    flex: 1,
    width: "100%",
    height: 926,
  },
});

export default Profile20;
