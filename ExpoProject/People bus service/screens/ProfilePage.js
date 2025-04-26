import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const ProfilePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profilePage}>
      <View style={[styles.userName, styles.userNamePosition]}>
        <View style={[styles.vectorParent, styles.vectorParentLayout]}>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector26.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition3]}
            contentFit="cover"
            source={require("../assets/vector27.png")}
          />
          <Text style={[styles.logout, styles.textFlexBox]}>Logout</Text>
        </View>
        <View style={[styles.helpCenterParent, styles.vectorParentLayout]}>
          <Text style={[styles.helpCenter, styles.timeTypo]}>Help Center</Text>
          <Image
            style={[styles.vectorIcon2, styles.vectorIconPosition1]}
            contentFit="cover"
            source={require("../assets/vector28.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector26.png")}
          />
        </View>
        <View style={[styles.privacyPolicyParent, styles.solid1ParentLayout]}>
          <Text style={[styles.privacyPolicy, styles.timeTypo]}>
            Privacy Policy
          </Text>
          <Image
            style={[styles.vectorIcon4, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector26.png")}
          />
          <Image
            style={[styles.vectorIcon5, styles.vectorIconPosition1]}
            contentFit="cover"
            source={require("../assets/vector29.png")}
          />
        </View>
        <View style={[styles.vectorGroup, styles.vectorParentLayout]}>
          <Image
            style={[styles.vectorIcon6, styles.vectorIconPosition3]}
            contentFit="cover"
            source={require("../assets/vector30.png")}
          />
          <Text style={[styles.helpCenter, styles.timeTypo]}>Dark Mode</Text>
        </View>
        <View style={styles.languagesParent}>
          <Text style={[styles.languages, styles.timeTypo]}>Languages</Text>
          <Text style={[styles.englishUs, styles.timeTypo]}>English (US)</Text>
          <Image
            style={[styles.vectorIcon7, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector26.png")}
          />
        </View>
        <View style={[styles.vectorContainer, styles.vectorParentLayout]}>
          <Image
            style={[styles.vectorIcon8, styles.vectorIconPosition2]}
            contentFit="cover"
            source={require("../assets/vector31.png")}
          />
          <Text style={[styles.helpCenter, styles.timeTypo]}>Security</Text>
          <Image
            style={[styles.vectorIcon3, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector26.png")}
          />
        </View>
        <View style={[styles.frameView, styles.vectorParentLayout]}>
          <Image
            style={[styles.vectorIcon10, styles.vectorIconPosition3]}
            contentFit="cover"
            source={require("../assets/vector32.png")}
          />
          <Text style={[styles.payment, styles.timeTypo]}>Payment</Text>
          <Image
            style={[styles.vectorIcon4, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector26.png")}
          />
        </View>
        <View style={[styles.bellSolid1Parent, styles.solid1ParentLayout]}>
          <Image
            style={[styles.bellSolid1Icon, styles.solid1IconLayout]}
            contentFit="cover"
            source={require("../assets/bellsolid-1.png")}
          />
          <Text style={[styles.privacyPolicy, styles.timeTypo]}>
            Notification
          </Text>
          <Image
            style={[styles.vectorIcon4, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector26.png")}
          />
        </View>
        <View
          style={[styles.locationDotSolid1Parent, styles.solid1ParentLayout]}
        >
          <Image
            style={[styles.locationDotSolid1Icon, styles.solid1IconPosition]}
            contentFit="cover"
            source={require("../assets/locationdotsolid-1.png")}
          />
          <Text style={[styles.privacyPolicy, styles.timeTypo]}>Address</Text>
          <Image
            style={[styles.vectorIcon4, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector26.png")}
          />
        </View>
        <View style={[styles.userSolid1Parent, styles.vectorParentLayout]}>
          <Image
            style={[styles.userSolid1Icon, styles.solid1IconPosition]}
            contentFit="cover"
            source={require("../assets/usersolid-1.png")}
          />
          <Text
            style={[styles.payment, styles.timeTypo]}
          >{`Edit Profile `}</Text>
          <Image
            style={[styles.vectorIcon4, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector26.png")}
          />
        </View>
      </View>
      <View style={[styles.profilePageChild, styles.statusBarPosition]} />
      <View style={[styles.ellipseParent, styles.frameChildLayout]}>
        <Image
          style={[styles.frameChild, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-3131.png")}
        />
        <Image
          style={[styles.vectorIcon15, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector33.png")}
        />
        <Text style={[styles.text, styles.textFlexBox]}>+1 111467378399</Text>
        <Text style={[styles.ose, styles.oseTypo]}>Lena Rose</Text>
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Profile20")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector25.png")}
        />
      </Pressable>
      <Text style={[styles.profile, styles.oseTypo]}>Profile</Text>
      <Pressable
        style={styles.vector1}
        onPress={() => navigation.navigate("Profile12")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector34.png")}
        />
      </Pressable>
      <Image
        style={[styles.languageIcon1, styles.userNamePosition]}
        contentFit="cover"
        source={require("../assets/languageicon-1.png")}
      />
      <View style={[styles.statusBar, styles.statusBarPosition]}>
        <View style={[styles.action, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
        <Image
          style={styles.containerIcon}
          contentFit="cover"
          source={require("../assets/container.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  userNamePosition: {
    left: 26,
    position: "absolute",
  },
  vectorParentLayout: {
    height: 24,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIconPosition3: {
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  timeTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.ew,
  },
  vectorIconPosition1: {
    bottom: "12.5%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    bottom: "18.1%",
    top: "16.77%",
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    height: "65.13%",
    position: "absolute",
    overflow: "hidden",
  },
  solid1ParentLayout: {
    width: 369,
    left: 2,
    height: 24,
    position: "absolute",
  },
  vectorIconPosition2: {
    right: "94.61%",
    top: "4.17%",
    width: "5.39%",
  },
  solid1IconLayout: {
    width: 16,
    top: 2,
  },
  solid1IconPosition: {
    height: 20,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  statusBarPosition: {
    left: "50%",
    position: "absolute",
  },
  frameChildLayout: {
    width: 146,
    position: "absolute",
  },
  oseTypo: {
    color: Color.colorGray_600,
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  vectorIcon: {
    top: "20.94%",
    bottom: "13.94%",
    left: "98.08%",
    width: "1.92%",
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
    height: "65.13%",
  },
  vectorIcon1: {
    height: "75%",
    width: "5.4%",
    right: "94.6%",
    bottom: "16.67%",
    left: "0%",
    top: "8.33%",
  },
  logout: {
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorTomato_100,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 38,
    top: 0,
  },
  vectorParent: {
    top: 405,
    width: 370,
    left: 1,
    height: 24,
  },
  helpCenter: {
    color: Color.ew,
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.size_base,
    left: 38,
    top: 0,
  },
  vectorIcon2: {
    height: "83.33%",
    right: "94.61%",
    top: "4.17%",
    width: "5.39%",
  },
  vectorIcon3: {
    width: "1.91%",
    left: "98.09%",
  },
  helpCenterParent: {
    top: 360,
    left: 0,
    width: 371,
  },
  privacyPolicy: {
    left: 36,
    color: Color.ew,
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.size_base,
    top: 0,
  },
  vectorIcon4: {
    left: "98.08%",
    width: "1.92%",
  },
  vectorIcon5: {
    height: "79.17%",
    width: "4.33%",
    right: "95.67%",
    top: "8.33%",
  },
  privacyPolicyParent: {
    top: 315,
  },
  vectorIcon6: {
    height: "61.98%",
    width: "16.67%",
    top: "16.93%",
    right: "83.33%",
    bottom: "21.09%",
  },
  vectorGroup: {
    top: 270,
    width: 126,
    left: 0,
  },
  languages: {
    top: 1,
    color: Color.ew,
    left: 0,
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.size_base,
  },
  englishUs: {
    left: 205,
    color: Color.ew,
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.size_base,
    top: 0,
  },
  vectorIcon7: {
    height: "62.52%",
    width: "2.13%",
    top: "20.1%",
    bottom: "17.38%",
    left: "97.87%",
    right: "0%",
    maxWidth: "100%",
    position: "absolute",
  },
  languagesParent: {
    top: 224,
    width: 333,
    height: 25,
    left: 38,
    position: "absolute",
  },
  vectorIcon8: {
    height: "95.83%",
    bottom: "0%",
    left: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorContainer: {
    top: 180,
    left: 0,
    width: 371,
  },
  vectorIcon10: {
    height: "66.67%",
    width: "5.13%",
    top: "16.67%",
    right: "94.87%",
    bottom: "16.67%",
    left: "0%",
  },
  payment: {
    left: 37,
    color: Color.ew,
    textAlign: "left",
    position: "absolute",
    fontSize: FontSize.size_base,
    top: 0,
  },
  frameView: {
    top: 135,
    width: 370,
    left: 1,
    height: 24,
  },
  bellSolid1Icon: {
    height: 19,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  bellSolid1Parent: {
    top: 90,
  },
  locationDotSolid1Icon: {
    width: 16,
    top: 2,
  },
  locationDotSolid1Parent: {
    top: 45,
  },
  userSolid1Icon: {
    width: 18,
    top: 1,
  },
  userSolid1Parent: {
    top: 0,
    width: 370,
    left: 1,
    height: 24,
  },
  userName: {
    top: 366,
    height: 429,
    width: 371,
  },
  profilePageChild: {
    marginLeft: -187.5,
    top: 345,
    borderStyle: "solid",
    borderColor: Color.ew,
    borderTopWidth: 1,
    width: 374,
    height: 1,
  },
  frameChild: {
    height: 146,
    left: 0,
    top: 0,
  },
  vectorIcon15: {
    height: "13.79%",
    width: "19.18%",
    top: "53.69%",
    right: "4.11%",
    bottom: "32.51%",
    left: "76.71%",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  text: {
    top: 182,
    left: 17,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.ew,
  },
  ose: {
    top: 140,
    left: 7,
    width: 133,
  },
  ellipseParent: {
    top: 123,
    left: 141,
    height: 203,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "88.32%",
    top: "8.73%",
    right: "5.84%",
    bottom: "88.91%",
    width: "5.84%",
    height: "2.36%",
    position: "absolute",
  },
  profile: {
    top: 74,
    left: 55,
    width: 86,
  },
  vector1: {
    left: "6.07%",
    top: "9.38%",
    right: "91.57%",
    bottom: "88.94%",
    width: "2.36%",
    height: "1.68%",
    position: "absolute",
  },
  languageIcon1: {
    top: 594,
    width: 20,
    height: 17,
    overflow: "hidden",
  },
  time: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    textAlign: "center",
    color: Color.ew,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
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
    height: 44,
  },
  profilePage: {
    backgroundColor: Color.colorsWhite,
    flex: 1,
    height: 928,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProfilePage;
