import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import RejectedOfferContainer from "../components/RejectedOfferContainer";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Profile13 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile13}>
      <View style={[styles.dealsSection, styles.searchPosition]}>
        <View style={[styles.g5, styles.g5Layout]}>
          <View style={[styles.g5Child, styles.childLayout]} />
          <Text style={styles.creditCardHas}>Credit card has been linked!</Text>
          <Text
            style={[styles.accountSetupSuccessful, styles.popularCitiesLayout]}
          >
            Account Setup Successful!
          </Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector20.png")}
          />
        </View>
        <View style={[styles.g4, styles.g5Layout]}>
          <View style={[styles.g5Child, styles.childLayout]} />
          <Text style={styles.creditCardHas}>Credit card has been linked!</Text>
          <Text
            style={[styles.accountSetupSuccessful, styles.popularCitiesLayout]}
          >
            Credit Card Connected!
          </Text>
          <Image
            style={[styles.vectorIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector21.png")}
          />
        </View>
        <RejectedOfferContainer offerStatusMessage="Your offer has been rejected!" />
        <View style={[styles.g2, styles.g5Layout]}>
          <View style={[styles.g2Child, styles.childLayout]} />
          <Image
            style={[styles.vectorIcon2, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/vector22.png")}
          />
          <Text
            style={styles.creditCardHas}
          >{`Now you can track your buses & See real time tracking`}</Text>
          <Text
            style={[styles.accountSetupSuccessful, styles.popularCitiesLayout]}
          >
            New Services Available!
          </Text>
        </View>
        <RejectedOfferContainer
          offerStatusMessage="Your offer has been accepted"
          propTop={0}
        />
      </View>
      <View style={[styles.frameNave, styles.frameNavePosition]}>
        <View style={[styles.frameNaveChild, styles.frameLayout]} />
        <View style={[styles.instanceParent, styles.parentLayout]}>
          <Image
            style={[styles.frameChild, styles.frameChildLayout]}
            contentFit="cover"
            source={require("../assets/group-12511.png")}
          />
          <Image
            style={styles.userAltIcon}
            contentFit="cover"
            source={require("../assets/useralt1.png")}
          />
          <View style={[styles.homeParent, styles.parentLayout]}>
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            <Text style={[styles.schedule, styles.homeClr]}>Schedule</Text>
            <Text style={[styles.ePay, styles.homeClr]}>E Pay</Text>
            <Text style={[styles.profile, styles.homeClr]}>Profile</Text>
          </View>
          <Image
            style={[styles.vectorIcon3, styles.vectorIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector23.png")}
          />
          <Image
            style={[styles.vectorIcon4, styles.vectorIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector24.png")}
          />
        </View>
      </View>
      <View style={[styles.citiesSection, styles.frameNavePosition]}>
        <View style={[styles.relatedProductDetail, styles.relatedLayout]}>
          <ImageBackground
            style={styles.unsplashdu0objdcynwIcon}
            resizeMode="cover"
            source={require("../assets/unsplashdu0objdcynw.png")}
          >
            <View style={[styles.savedProduct, styles.savedProductFlexBox]}>
              <Image
                style={styles.vectorIcon5}
                contentFit="cover"
                source={require("../assets/vector2.png")}
              />
            </View>
          </ImageBackground>
          <View style={styles.theTwistLifestyleParent}>
            <Text style={[styles.theTwistLifestyle, styles.ePayTypo]}>
              Karachi
            </Text>
            <View
              style={[styles.starAndReviewCount, styles.savedProductFlexBox]}
            >
              <View style={styles.starReview}>
                <Image
                  style={[styles.vectorIcon6, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon7, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon7, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon7, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon7, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
              </View>
              <Text style={[styles.reviews, styles.textTypo]}>100 reviews</Text>
            </View>
            <Text style={[styles.text, styles.textTypo]}>
              Lorem ipsum dolor sit amet...
            </Text>
          </View>
        </View>
        <View style={[styles.relatedProductDetail1, styles.relatedLayout]}>
          <ImageBackground
            style={styles.unsplashdu0objdcynwIcon}
            resizeMode="cover"
            source={require("../assets/unsplashmcefqfoxq40.png")}
          >
            <View style={[styles.savedProduct, styles.savedProductFlexBox]}>
              <Image
                style={styles.vectorIcon5}
                contentFit="cover"
                source={require("../assets/vector2.png")}
              />
            </View>
          </ImageBackground>
          <View style={styles.theTwistLifestyleParent}>
            <Text style={[styles.theTwistLifestyle, styles.ePayTypo]}>
              Hyderabad
            </Text>
            <View
              style={[styles.starAndReviewCount, styles.savedProductFlexBox]}
            >
              <View style={styles.starReview}>
                <Image
                  style={[styles.vectorIcon6, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon7, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon7, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon7, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon7, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
              </View>
              <Text style={[styles.reviews, styles.textTypo]}>100 reviews</Text>
            </View>
            <Text style={[styles.text, styles.textTypo]}>
              Lorem ipsum dolor sit amet...
            </Text>
          </View>
        </View>
        <View style={styles.popularCity}>
          <Text style={[styles.popularCities, styles.ePayTypo]}>
            Popular Cities
          </Text>
          <Text style={[styles.thesePopularCities, styles.notificationFlexBox]}>
            These popular cities have lot to travel
          </Text>
        </View>
      </View>
      <View style={[styles.search, styles.searchPosition]}>
        <Text style={[styles.yesterday, styles.todayTypo]}>Yesterday</Text>
        <Text style={[styles.december222023, styles.todayTypo]}>
          December 22, 2023
        </Text>
        <Text style={[styles.today, styles.todayTypo]}>Today</Text>
      </View>
      <View style={[styles.profileIcons, styles.frameChildLayout]}>
        <Text style={[styles.notification, styles.notificationFlexBox]}>
          Notification
        </Text>
        <Pressable
          style={[styles.vector, styles.vectorPosition]}
          onPress={() => navigation.navigate("Profile12")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.vector1, styles.vectorPosition]}
          onPress={() => navigation.navigate("Profile20")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector25.png")}
          />
        </Pressable>
      </View>
      <View style={styles.statusBar}>
        <View style={[styles.action, styles.timeLayout]}>
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
        <Image
          style={[styles.containerIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/container.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchPosition: {
    left: 24,
    position: "absolute",
  },
  g5Layout: {
    height: 100,
    width: 380,
    borderRadius: Border.br_xl,
    left: 1,
    backgroundColor: Color.colorsWhite,
    position: "absolute",
  },
  childLayout: {
    height: 68,
    width: 68,
    backgroundColor: Color.ew,
    borderRadius: Border.br_16xl,
    left: 15,
    position: "absolute",
  },
  popularCitiesLayout: {
    lineHeight: 30,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  frameNavePosition: {
    display: "none",
    position: "absolute",
  },
  frameLayout: {
    width: 428,
    left: 0,
    height: 100,
  },
  parentLayout: {
    width: 352,
    position: "absolute",
  },
  frameChildLayout: {
    height: 33,
    position: "absolute",
  },
  homeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 0,
    left: 0,
  },
  homeClr: {
    color: Color.colorsWhite,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  vectorIconLayout1: {
    height: "49.77%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  relatedLayout: {
    height: 270,
    width: 190,
    borderWidth: 1,
    borderColor: Color.colorGray_1200,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    top: 67,
    overflow: "hidden",
    position: "absolute",
  },
  savedProductFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  ePayTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  vectorIconLayout: {
    width: 13,
    height: 12,
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  notificationFlexBox: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    position: "absolute",
  },
  todayTypo: {
    color: Color.colorDimgray_200,
    display: "flex",
    height: 15,
    alignItems: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 0,
    fontSize: FontSize.size_mid,
    textAlign: "left",
    position: "absolute",
  },
  vectorPosition: {
    top: "15.15%",
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  g5Child: {
    top: 16,
  },
  creditCardHas: {
    top: 58,
    left: 102,
    fontSize: FontSize.size_smi,
    lineHeight: 15,
    color: Color.colorDimgray_300,
    width: 261,
    height: 25,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  accountSetupSuccessful: {
    top: 20,
    left: 103,
    color: Color.colorGray_700,
    width: 255,
    fontSize: FontSize.size_mid,
    lineHeight: 30,
    fontFamily: FontFamily.poppinsRegular,
  },
  vectorIcon: {
    height: "25%",
    top: "37%",
    bottom: "38%",
    left: "9.47%",
    right: "83.95%",
    width: "6.58%",
    maxHeight: "100%",
    position: "absolute",
  },
  g5: {
    top: 691,
  },
  vectorIcon1: {
    height: "19.44%",
    top: "41%",
    bottom: "39.56%",
    left: "9.47%",
    right: "83.95%",
    width: "6.58%",
    maxHeight: "100%",
    position: "absolute",
  },
  g4: {
    top: 521,
  },
  g2Child: {
    top: 15,
  },
  vectorIcon2: {
    marginTop: -14,
    width: "4.93%",
    right: "84.54%",
    left: "10.53%",
    overflow: "hidden",
    maxWidth: "100%",
    top: "50%",
    height: 25,
  },
  g2: {
    top: 223,
  },
  dealsSection: {
    top: 186,
    width: 381,
    height: 791,
  },
  frameNaveChild: {
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    backgroundColor: Color.colorTomato_100,
    top: 0,
    position: "absolute",
  },
  frameChild: {
    left: 4,
    width: 33,
    top: 0,
  },
  userAltIcon: {
    top: 3,
    left: 314,
    width: 28,
    height: 28,
    overflow: "hidden",
    position: "absolute",
  },
  home: {
    color: Color.colorsWhite,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  schedule: {
    left: 80,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 0,
    textAlign: "left",
  },
  ePay: {
    left: 200,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 0,
    textAlign: "left",
  },
  profile: {
    top: 1,
    left: 307,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    textAlign: "left",
  },
  homeParent: {
    top: 34,
    height: 22,
    left: 0,
  },
  vectorIcon3: {
    width: "10.24%",
    top: "7.75%",
    right: "32.16%",
    bottom: "42.48%",
    left: "57.59%",
  },
  vectorIcon4: {
    width: "7.17%",
    top: "2.41%",
    right: "63.66%",
    bottom: "47.82%",
    left: "29.17%",
  },
  instanceParent: {
    top: 19,
    left: 41,
    height: 56,
  },
  frameNave: {
    top: 826,
    width: 428,
    left: 0,
    height: 100,
  },
  vectorIcon5: {
    width: 17,
    height: 15,
  },
  savedProduct: {
    borderRadius: Border.br_31xl,
    width: 36,
    height: 36,
    justifyContent: "center",
    padding: Padding.p_2xs,
    backgroundColor: Color.colorsWhite,
    alignItems: "center",
  },
  unsplashdu0objdcynwIcon: {
    borderTopLeftRadius: Border.br_7xs,
    borderTopRightRadius: Border.br_7xs,
    justifyContent: "flex-end",
    paddingLeft: Padding.p_sm,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_xs,
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  theTwistLifestyle: {
    fontSize: FontSize.size_base,
    width: 192,
    color: Color.ew,
    textAlign: "left",
  },
  vectorIcon6: {
    height: 12,
  },
  vectorIcon7: {
    marginLeft: 4,
    height: 12,
  },
  starReview: {
    flexDirection: "row",
  },
  reviews: {
    marginLeft: 10,
    color: Color.ew,
    textAlign: "left",
  },
  starAndReviewCount: {
    marginTop: 2,
  },
  text: {
    color: Color.colorGray_1100,
    marginTop: 2,
    textAlign: "left",
  },
  theTwistLifestyleParent: {
    paddingLeft: Padding.p_3xs,
    paddingTop: Padding.p_8xs,
    paddingRight: Padding.p_8xs,
    paddingBottom: Padding.p_3xs,
    marginTop: 5,
    alignSelf: "stretch",
  },
  relatedProductDetail: {
    left: 0,
  },
  relatedProductDetail1: {
    left: 202,
  },
  popularCities: {
    fontSize: FontSize.size_11xl,
    width: 222,
    color: Color.ew,
    top: 0,
    left: 0,
    lineHeight: 30,
    textAlign: "left",
    position: "absolute",
  },
  thesePopularCities: {
    top: 35,
    left: 2,
    lineHeight: 13,
    color: Color.colorGray_400,
    width: 233,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  popularCity: {
    left: 8,
    width: 235,
    height: 48,
    top: 0,
    position: "absolute",
  },
  citiesSection: {
    top: 467,
    left: 14,
    width: 392,
    height: 337,
  },
  yesterday: {
    top: 222,
    width: 93,
  },
  december222023: {
    top: 692,
    width: 175,
  },
  today: {
    width: 55,
    top: 0,
  },
  search: {
    top: 144,
    height: 707,
    width: 175,
  },
  notification: {
    left: 42,
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_600,
    width: 202,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "0%",
    right: "94.18%",
    bottom: "20.23%",
    width: "5.82%",
    height: "64.62%",
  },
  vector1: {
    left: "93.35%",
    right: "0%",
    bottom: "18.56%",
    width: "6.65%",
    height: "66.29%",
  },
  profileIcons: {
    top: 77,
    left: 26,
    width: 376,
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
    top: 14,
    left: 20,
    height: 18,
  },
  containerIcon: {
    marginTop: -5.84,
    right: 15,
    width: 67,
    height: 12,
  },
  statusBar: {
    marginLeft: -183,
    top: 9,
    left: "50%",
    width: 375,
    height: 44,
    position: "absolute",
  },
  profile13: {
    backgroundColor: "#d3d3d3",
    height: 926,
    width: "100%",
    flex: 1,
  },
});

export default Profile13;
