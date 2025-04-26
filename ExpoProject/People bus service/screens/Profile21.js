import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, FontSize, Color } from "../GlobalStyles";

const Profile21 = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.profile21Icon}
      resizeMode="cover"
      source={require("../assets/profile21.png")}
    >
      <View style={styles.frameNave}>
        <View style={[styles.instanceParent, styles.searchLayout]}>
          <Pressable
            style={styles.wrapper}
            onPress={() => navigation.navigate("Profile12")}
          >
            <Image
              style={styles.iconLayout}
              contentFit="cover"
              source={require("../assets/group-1253.png")}
            />
          </Pressable>
          <Pressable
            style={styles.userAlt}
            onPress={() => navigation.navigate("ProfilePage")}
          >
            <Image
              style={[styles.icon1, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/useralt1.png")}
            />
          </Pressable>
          <View style={styles.homeParent}>
            <Pressable
              style={styles.home}
              onPress={() => navigation.navigate("Profile12")}
            >
              <Text style={[styles.home1, styles.timeTypo]}>Home</Text>
            </Pressable>
            <Pressable
              style={styles.schedule}
              onPress={() => navigation.navigate("Schedules")}
            >
              <Text style={[styles.schedule1, styles.scheduleTypo]}>
                Schedule
              </Text>
            </Pressable>
            <Text style={[styles.ePay, styles.scheduleTypo]}>E Pay</Text>
            <Pressable
              style={styles.profile}
              onPress={() => navigation.navigate("ProfilePage")}
            >
              <Text style={[styles.schedule1, styles.scheduleTypo]}>
                Profile
              </Text>
            </Pressable>
          </View>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector44.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector24.png")}
          />
        </View>
      </View>
      <View style={[styles.ongoingBusesWrapper, styles.busesWrapperLayout]}>
        <Text style={[styles.ongoingBuses, styles.busesTypo]}>
          Ongoing Buses
        </Text>
      </View>
      <View style={[styles.outgoingBusesWrapper, styles.busesWrapperLayout]}>
        <Text style={[styles.outgoingBuses, styles.busesTypo]}>
          Outgoing Buses
        </Text>
      </View>
      <View style={[styles.frameR4, styles.framePosition2]}>
        <Text style={[styles.text, styles.textTypo]}>4:30</Text>
        <Text style={[styles.r12, styles.r12Typo]}>R12</Text>
        <Text style={[styles.bypass, styles.bypassClr]}>Bypass</Text>
        <Image
          style={[styles.frameR4Child, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-19.png")}
        />
        <Image
          style={[styles.frameR4Item, styles.frameItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-29.png")}
        />
        <Image
          style={[styles.frameR4Inner, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/group-1381.png")}
        />
        <View style={styles.frameChildPosition2} />
        <View style={styles.frameChildPosition1} />
        <Text style={[styles.departure435, styles.arrivalPosition]}>
          Departure : 4:35
        </Text>
        <Text style={[styles.arrival, styles.arrivalPosition]}>
          Arrival : 4:30
        </Text>
      </View>
      <View style={[styles.frameR3, styles.frameLayout2]}>
        <Text style={[styles.text1, styles.textTypo]}>3:30</Text>
        <Text style={[styles.r11, styles.r12Typo]}>R11</Text>
        <Text
          style={[styles.qasimChowk, styles.qasimChowkTypo]}
        >{`Qasim Chowk `}</Text>
        <Image
          style={[styles.frameR3Child, styles.text3Position]}
          contentFit="cover"
          source={require("../assets/ellipse-20.png")}
        />
        <Image
          style={[styles.frameR3Item, styles.frameItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-30.png")}
        />
        <Image
          style={[styles.frameR3Inner, styles.vectorIcon3Position]}
          contentFit="cover"
          source={require("../assets/group-1381.png")}
        />
        <Text style={[styles.departure335, styles.qasimChowkTypo]}>
          Departure : 3:35
        </Text>
        <Text style={[styles.arrival1, styles.arrivalPosition]}>
          Arrival : 3:30
        </Text>
      </View>
      <View style={[styles.frameR10, styles.framePosition2]}>
        <View style={[styles.frameR10Child, styles.frameItemLayout]} />
        <Text style={[styles.text, styles.textTypo]}>1:30</Text>
        <Text style={[styles.r12, styles.r12Typo]}>R10</Text>
        <Text style={[styles.bypass, styles.bypassClr]}>Gul Center</Text>
        <Image
          style={[styles.frameR4Child, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-19.png")}
        />
        <View style={[styles.frameR10Inner, styles.frameInnerPosition]} />
        <Image
          style={[styles.frameR4Item, styles.frameItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-29.png")}
        />
        <View style={[styles.frameR10Child1, styles.frameChildPosition]} />
        <Image
          style={[styles.frameR4Inner, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/group-1381.png")}
        />
        <Text style={[styles.departure135, styles.arrivalPosition]}>
          Departure : 1:35
        </Text>
        <Text style={[styles.arrival2, styles.arrivalPosition]}>
          Arrival : 1:30
        </Text>
      </View>
      <View style={[styles.frameR9, styles.frameLayout1]}>
        <Text style={[styles.text3, styles.text3Position]}>7:30</Text>
        <Text style={[styles.r11, styles.r12Typo]}>R9</Text>
        <Text style={[styles.qasimChowk, styles.qasimChowkTypo]}>
          City Gate
        </Text>
        <Image
          style={[styles.frameR3Child, styles.text3Position]}
          contentFit="cover"
          source={require("../assets/ellipse-20.png")}
        />
        <Image
          style={[styles.frameR3Item, styles.frameItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-30.png")}
        />
        <Text style={[styles.departure335, styles.qasimChowkTypo]}>
          Departure : 7:35
        </Text>
        <Text style={[styles.arrival1, styles.arrivalPosition]}>
          Arrival : 7:30
        </Text>
        <Image
          style={[styles.frameR3Inner, styles.vectorIcon3Position]}
          contentFit="cover"
          source={require("../assets/group-1381.png")}
        />
      </View>
      <View style={[styles.frameR8, styles.framePosition1]}>
        <View style={[styles.frameR8Child, styles.frameBg]} />
        <Image
          style={[styles.frameR8Item, styles.frameItemLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-469.png")}
        />
        <Text style={[styles.text, styles.textTypo]}>6:30</Text>
        <Text style={[styles.r12, styles.r12Typo]}>R8</Text>
        <Text style={[styles.bypass, styles.bypassClr]}>Rani Bag</Text>
        <Image
          style={[styles.frameR4Child, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-191.png")}
        />
        <Image
          style={[styles.frameR4Item, styles.frameItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-291.png")}
        />
        <View style={[styles.frameR8Child2, styles.frameChildPosition]} />
        <Text style={[styles.departure135, styles.arrivalPosition]}>
          Departure : 6:35
        </Text>
        <Text style={[styles.arrival2, styles.arrivalPosition]}>
          Arrival : 6:30
        </Text>
        <Image
          style={[styles.frameR4Inner, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/group-1381.png")}
        />
      </View>
      <View style={[styles.frameR7, styles.frameLayout]}>
        <View style={styles.frameChildPosition2} />
        <Text style={[styles.text, styles.textTypo]}>4:30</Text>
        <Text style={[styles.r12, styles.r12Typo]}>R7</Text>
        <Text style={[styles.bypass, styles.bypassClr]}>State Bank</Text>
        <View style={[styles.frameR7Item, styles.framePosition]} />
        <Image
          style={[styles.frameR4Child, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-19.png")}
        />
        <Image
          style={[styles.frameR4Item, styles.frameItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-29.png")}
        />
        <Image
          style={[styles.frameR4Inner, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/group-1381.png")}
        />
        <View style={styles.frameChildPosition1} />
        <Text style={[styles.departure435, styles.arrivalPosition]}>
          Departure : 4:35
        </Text>
        <Text style={[styles.arrival, styles.arrivalPosition]}>
          Arrival : 4:30
        </Text>
      </View>
      <View style={[styles.frameR6, styles.frameLayout1]}>
        <Text style={[styles.text3, styles.text3Position]}>7:30</Text>
        <Text style={[styles.r11, styles.r12Typo]}>R6</Text>
        <Text style={[styles.qasimChowk, styles.qasimChowkTypo]}>
          City Gate
        </Text>
        <Image
          style={[styles.frameR3Child, styles.text3Position]}
          contentFit="cover"
          source={require("../assets/ellipse-20.png")}
        />
        <Image
          style={[styles.frameR3Item, styles.frameItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-30.png")}
        />
        <Text style={[styles.departure335, styles.qasimChowkTypo]}>
          Departure : 7:35
        </Text>
        <Text style={[styles.arrival1, styles.arrivalPosition]}>
          Arrival : 7:30
        </Text>
        <Image
          style={[styles.frameR3Inner, styles.vectorIcon3Position]}
          contentFit="cover"
          source={require("../assets/group-1381.png")}
        />
      </View>
      <View style={[styles.frameR5, styles.framePosition1]}>
        <Text style={[styles.text, styles.textTypo]}>6:30</Text>
        <Text style={[styles.r12, styles.r12Typo]}>R5</Text>
        <Text style={[styles.bypass, styles.bypassClr]}>Gul Center</Text>
        <Image
          style={[styles.frameR4Child, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-191.png")}
        />
        <View style={[styles.frameR8Child, styles.frameBg]} />
        <View style={[styles.frameR5Inner, styles.frameBg]} />
        <Image
          style={[styles.frameR4Item, styles.frameItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-291.png")}
        />
        <View style={[styles.frameR8Child2, styles.frameChildPosition]} />
        <Text style={[styles.departure135, styles.arrivalPosition]}>
          Departure : 6:35
        </Text>
        <Text style={[styles.arrival2, styles.arrivalPosition]}>
          Arrival : 6:30
        </Text>
        <Image
          style={[styles.frameR4Inner, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/group-1381.png")}
        />
      </View>
      <View style={[styles.frameR41, styles.frameLayout]}>
        <Text style={[styles.text, styles.textTypo]}>4:30</Text>
        <Text style={[styles.r12, styles.r12Typo]}>R4</Text>
        <Text style={[styles.bypass, styles.bypassClr]}>Hyder Chowk</Text>
        <View style={[styles.frameR4Child2, styles.framePosition]} />
        <Image
          style={[styles.frameR4Child, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-19.png")}
        />
        <Image
          style={[styles.frameR4Item, styles.frameItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-29.png")}
        />
        <Image
          style={[styles.frameR4Inner, styles.frameInnerLayout]}
          contentFit="cover"
          source={require("../assets/group-1381.png")}
        />
        <View style={styles.frameChildPosition2} />
        <View style={styles.frameChildPosition1} />
        <Text style={[styles.departure435, styles.arrivalPosition]}>
          Departure : 4:35
        </Text>
        <Text style={[styles.arrival, styles.arrivalPosition]}>
          Arrival : 4:30
        </Text>
      </View>
      <View style={[styles.frameR31, styles.frameLayout2]}>
        <Text style={[styles.text1, styles.textTypo]}>3:30</Text>
        <Text style={[styles.r11, styles.r12Typo]}>R3</Text>
        <Text style={[styles.qasimChowk, styles.qasimChowkTypo]}>
          City Gate
        </Text>
        <Image
          style={[styles.frameR3Child, styles.text3Position]}
          contentFit="cover"
          source={require("../assets/ellipse-20.png")}
        />
        <Image
          style={[styles.frameR3Item, styles.frameItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-30.png")}
        />
        <Image
          style={[styles.frameR3Inner, styles.vectorIcon3Position]}
          contentFit="cover"
          source={require("../assets/group-1381.png")}
        />
        <Text style={[styles.departure335, styles.qasimChowkTypo]}>
          Departure : 3:35
        </Text>
        <Text style={[styles.arrival1, styles.arrivalPosition]}>
          Arrival : 3:30
        </Text>
      </View>
      <View style={[styles.frameR2, styles.framePosition1]}>
        <Text style={[styles.text, styles.textTypo]}>1:30</Text>
        <Text style={[styles.r12, styles.r12Typo]}>R2</Text>
        <Text style={[styles.bypass, styles.bypassClr]}>Gul Center</Text>
        <Image
          style={[styles.frameR4Child, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-19.png")}
        />
        <View style={[styles.frameR10Child, styles.frameItemLayout]} />
        <View style={[styles.frameR2Inner, styles.frameInnerPosition]} />
        <Image
          style={[styles.frameR4Item, styles.frameItemPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-29.png")}
        />
        <View style={[styles.frameR8Child2, styles.frameChildPosition]} />
        <Text style={[styles.departure135, styles.arrivalPosition]}>
          Departure : 1:35
        </Text>
        <Text style={[styles.arrival2, styles.arrivalPosition]}>
          Arrival : 1:30
        </Text>
      </View>
      <View style={[styles.frameR1, styles.framePosition2]}>
        <Text style={[styles.text3, styles.text3Position]}>12:30</Text>
        <Text style={[styles.r11, styles.r12Typo]}>R1</Text>
        <Image
          style={[styles.frameR3Child, styles.text3Position]}
          contentFit="cover"
          source={require("../assets/ellipse-20.png")}
        />
        <Text style={[styles.qasimChowk, styles.qasimChowkTypo]}>
          Hyder Chowk
        </Text>
        <View style={[styles.frameR1Item, styles.frameItemLayout]} />
        <Text style={[styles.departure335, styles.qasimChowkTypo]}>
          Departure : 12:35
        </Text>
        <Text style={[styles.arrival1, styles.arrivalPosition]}>
          Arrival : 12:30
        </Text>
        <Image
          style={[styles.frameR3Inner, styles.vectorIcon3Position]}
          contentFit="cover"
          source={require("../assets/group-1381.png")}
        />
      </View>
      <Text style={[styles.schedule2, styles.scheduleTypo]}>Schedule</Text>
      <View style={[styles.search, styles.searchLayout]}>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector12.png")}
        />
        <Image
          style={[styles.vectorIcon3, styles.vectorIcon3Position]}
          contentFit="cover"
          source={require("../assets/vector13.png")}
        />
        <Text style={[styles.hyderabad, styles.scheduleTypo]}>Hyderabad</Text>
      </View>
      <View style={styles.statusBar}>
        <View style={[styles.action, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
        <Image
          style={styles.containerIcon}
          contentFit="cover"
          source={require("../assets/container.png")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  searchLayout: {
    height: 56,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  timeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  scheduleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  busesWrapperLayout: {
    width: 168,
    borderRadius: Border.br_22xl,
    top: 1133,
    height: 54,
    position: "absolute",
  },
  busesTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 26,
    fontSize: FontSize.size_base,
    top: 14,
    textAlign: "left",
    color: Color.colorsWhite,
    position: "absolute",
  },
  framePosition2: {
    left: 38,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  r12Typo: {
    left: 94,
    color: Color.ew,
    fontSize: FontSize.size_base,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  bypassClr: {
    color: Color.colorTomato_100,
    left: 94,
  },
  frameChildLayout: {
    width: 26,
    left: 49,
    height: 26,
  },
  frameItemPosition: {
    left: 51,
    width: 22,
    height: 22,
    position: "absolute",
  },
  frameInnerLayout: {
    width: 14,
    left: 55,
    height: 14,
  },
  arrivalPosition: {
    left: 224,
    color: Color.ew,
  },
  frameLayout2: {
    height: 49,
    width: 350,
    left: 38,
    position: "absolute",
  },
  qasimChowkTypo: {
    top: 25,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  text3Position: {
    top: 12,
    position: "absolute",
  },
  vectorIcon3Position: {
    top: 18,
    position: "absolute",
  },
  frameItemLayout: {
    width: 2,
    position: "absolute",
  },
  frameInnerPosition: {
    top: 133,
    left: 63,
    transform: [
      {
        rotate: "-0.37deg",
      },
    ],
  },
  frameChildPosition: {
    top: 107,
    width: 2,
    left: 61,
    backgroundColor: Color.colorTomato_100,
    position: "absolute",
  },
  frameLayout1: {
    width: 349,
    height: 49,
    left: 38,
    position: "absolute",
  },
  framePosition1: {
    height: 133,
    left: 38,
    position: "absolute",
  },
  frameBg: {
    backgroundColor: Color.colorHotpink,
    width: 2,
    position: "absolute",
  },
  frameLayout: {
    height: 105,
    width: 350,
    left: 38,
    position: "absolute",
  },
  framePosition: {
    backgroundColor: Color.colorSilver_100,
    width: 2,
    left: 61,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  wrapper: {
    width: 41,
    height: 41,
    top: 0,
    left: 0,
    position: "absolute",
  },
  icon1: {
    overflow: "hidden",
  },
  userAlt: {
    left: 310,
    top: 3,
    width: 36,
    height: 36,
    position: "absolute",
  },
  home1: {
    color: Color.colorsWhite,
    fontSize: FontSize.size_sm,
  },
  home: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  schedule1: {
    color: Color.colorsWhite,
    fontSize: FontSize.size_sm,
  },
  schedule: {
    left: 80,
    top: 0,
    position: "absolute",
  },
  ePay: {
    left: 200,
    color: Color.colorsWhite,
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
  },
  profile: {
    left: 307,
    top: 1,
    position: "absolute",
  },
  homeParent: {
    top: 34,
    height: 22,
    width: 352,
    left: 0,
    position: "absolute",
  },
  vectorIcon: {
    width: "12.52%",
    top: "7.75%",
    right: "31.03%",
    bottom: "28.2%",
    left: "56.46%",
    height: "64.06%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon1: {
    width: "9.44%",
    top: "2.41%",
    right: "62.52%",
    bottom: "33.54%",
    left: "28.03%",
    height: "64.06%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  instanceParent: {
    left: 41,
    width: 352,
    height: 56,
    top: 19,
  },
  frameNave: {
    top: 1201,
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    width: 428,
    height: 100,
    backgroundColor: Color.colorTomato_100,
    left: 0,
    position: "absolute",
  },
  ongoingBuses: {
    left: 28,
  },
  ongoingBusesWrapper: {
    left: 30,
    height: 54,
    backgroundColor: Color.colorTomato_100,
  },
  outgoingBuses: {
    left: 21,
  },
  outgoingBusesWrapper: {
    left: 217,
    backgroundColor: "#05004e",
    height: 54,
  },
  text: {
    color: Color.ew,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
    top: 53,
    position: "absolute",
  },
  r12: {
    top: 41,
  },
  bypass: {
    top: 66,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  frameR4Child: {
    height: 26,
    top: 53,
    position: "absolute",
  },
  frameR4Item: {
    top: 55,
    width: 22,
  },
  frameR4Inner: {
    top: 59,
    height: 14,
    position: "absolute",
  },
  frameChildPosition2: {
    transform: [
      {
        rotate: "-0.37deg",
      },
    ],
    width: 2,
    backgroundColor: Color.colorDarkgray_400,
    left: 61,
    height: 54,
    top: 0,
    position: "absolute",
  },
  frameChildPosition1: {
    left: 63,
    top: 26,
    transform: [
      {
        rotate: "-0.37deg",
      },
    ],
    width: 2,
    height: 26,
    backgroundColor: Color.colorTomato_100,
    position: "absolute",
  },
  departure435: {
    top: 65,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: 224,
    position: "absolute",
  },
  arrival: {
    top: 41,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: 224,
    position: "absolute",
  },
  frameR4: {
    top: 1031,
    height: 90,
    width: 350,
  },
  text1: {
    top: 11,
    color: Color.ew,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsRegular,
    left: 0,
    position: "absolute",
  },
  r11: {
    top: 0,
  },
  qasimChowk: {
    color: Color.colorTomato_100,
    left: 94,
  },
  frameR3Child: {
    height: 26,
    width: 26,
    left: 49,
  },
  frameR3Item: {
    width: 22,
    top: 14,
  },
  frameR3Inner: {
    height: 14,
    width: 14,
    left: 55,
  },
  departure335: {
    left: 224,
    color: Color.ew,
  },
  arrival1: {
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: 224,
    position: "absolute",
    top: 1,
  },
  frameR3: {
    top: 993,
  },
  frameR10Child: {
    backgroundColor: Color.colorDarkgray_400,
    width: 2,
    left: 61,
    height: 54,
    top: 0,
  },
  frameR10Inner: {
    height: 55,
    width: 2,
    position: "absolute",
    backgroundColor: Color.colorDarkgray_400,
  },
  frameR10Child1: {
    height: 27,
  },
  departure135: {
    top: 66,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  arrival2: {
    top: 42,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    fontSize: FontSize.size_base,
    left: 224,
    position: "absolute",
  },
  frameR10: {
    top: 872,
    height: 134,
    width: 345,
  },
  text3: {
    color: Color.ew,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    left: 0,
  },
  frameR9: {
    top: 835,
  },
  frameR8Child: {
    left: 61,
    height: 54,
    top: 0,
  },
  frameR8Item: {
    top: 78,
    height: 55,
    left: 61,
  },
  frameR8Child2: {
    height: 26,
  },
  frameR8: {
    top: 714,
    width: 350,
  },
  frameR7Item: {
    top: 78,
    height: 27,
  },
  frameR7: {
    top: 635,
  },
  frameR6: {
    top: 598,
  },
  frameR5Inner: {
    height: 55,
    top: 133,
    left: 63,
    transform: [
      {
        rotate: "-0.37deg",
      },
    ],
  },
  frameR5: {
    top: 477,
    width: 350,
  },
  frameR4Child2: {
    top: 79,
    height: 26,
  },
  frameR41: {
    top: 398,
  },
  frameR31: {
    top: 360,
  },
  frameR2Inner: {
    width: 2,
    position: "absolute",
    backgroundColor: Color.colorDarkgray_400,
    height: 54,
  },
  frameR2: {
    top: 239,
    width: 345,
  },
  frameR1Item: {
    top: 38,
    left: 61,
    height: 26,
    backgroundColor: Color.colorTomato_100,
  },
  frameR1: {
    top: 201,
    width: 354,
    height: 64,
  },
  schedule2: {
    top: 148,
    left: 48,
    fontSize: 28,
    color: Color.ew,
    position: "absolute",
  },
  vectorIcon2: {
    height: "37.53%",
    width: "5.53%",
    top: "34.13%",
    right: "88.95%",
    bottom: "28.35%",
    left: "5.53%",
  },
  vectorIcon3: {
    right: 23,
    height: 19,
    width: 22,
  },
  hyderabad: {
    top: 21,
    left: 52,
    fontSize: FontSize.size_smi,
    display: "flex",
    alignItems: "center",
    width: 91,
    height: 14,
    color: Color.ew,
    position: "absolute",
  },
  search: {
    left: 23,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSilver_300,
    width: 380,
    top: 78,
  },
  time: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    color: Color.ew,
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 0,
    left: 0,
  },
  action: {
    left: 20,
    height: 18,
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
    left: "50%",
    width: 375,
    height: 44,
    top: 19,
    position: "absolute",
  },
  profile21Icon: {
    flex: 1,
    height: 1301,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile21;
