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
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const Profile11 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile11}>
      <View style={styles.frameNave}>
        <View style={[styles.instanceParent, styles.parentLayout]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-1253.png")}
          />
          <Pressable
            style={[styles.userAlt, styles.userAltLayout]}
            onPress={() => navigation.navigate("ProfilePage")}
          >
            <Image
              style={[styles.icon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/useralt1.png")}
            />
          </Pressable>
          <View style={[styles.homeParent, styles.parentLayout]}>
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            <Pressable
              style={styles.schedule}
              onPress={() => navigation.navigate("Schedules")}
            >
              <Text style={[styles.schedule1, styles.ePayTypo]}>Schedule</Text>
            </Pressable>
            <Text style={[styles.ePay, styles.ePayTypo]}>E Pay</Text>
            <Pressable
              style={[styles.profile, styles.profilePosition]}
              onPress={() => navigation.navigate("ProfilePage")}
            >
              <Text style={[styles.schedule1, styles.ePayTypo]}>Profile</Text>
            </Pressable>
          </View>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector44.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector24.png")}
          />
        </View>
      </View>
      <View style={styles.citiesSection}>
        <View style={[styles.relatedProductDetail, styles.relatedLayout1]}>
          <ImageBackground
            style={styles.unsplashdu0objdcynwIcon}
            resizeMode="cover"
            source={require("../assets/unsplashdu0objdcynw.png")}
          >
            <View style={[styles.savedProduct, styles.savedProductFlexBox]}>
              <Image
                style={styles.vectorIcon2}
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
                  style={[styles.vectorIcon3, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon4, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon4, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon4, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon4, styles.vectorIconLayout]}
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
        <View style={[styles.relatedProductDetail1, styles.relatedLayout1]}>
          <ImageBackground
            style={styles.unsplashdu0objdcynwIcon}
            resizeMode="cover"
            source={require("../assets/unsplashmcefqfoxq40.png")}
          >
            <View style={[styles.savedProduct, styles.savedProductFlexBox]}>
              <Image
                style={styles.vectorIcon2}
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
                  style={[styles.vectorIcon3, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon4, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon4, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon4, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon4, styles.vectorIconLayout]}
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
        <View style={[styles.relatedProductDetail2, styles.relatedLayout]}>
          <ImageBackground
            style={styles.unsplashdu0objdcynwIcon}
            resizeMode="cover"
            source={require("../assets/unsplashmcefqfoxq40.png")}
          >
            <View style={[styles.savedProduct, styles.savedProductFlexBox]}>
              <Image
                style={styles.vectorIcon2}
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
                  style={[styles.vectorIcon3, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon4, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon4, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon4, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon4, styles.vectorIconLayout]}
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
        <View style={[styles.relatedProductDetail3, styles.relatedLayout]}>
          <ImageBackground
            style={styles.unsplashdu0objdcynwIcon}
            resizeMode="cover"
            source={require("../assets/unsplashdu0objdcynw.png")}
          >
            <View style={[styles.savedProduct, styles.savedProductFlexBox]}>
              <Image
                style={styles.vectorIcon2}
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
                  style={[styles.vectorIcon3, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon4, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon4, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon4, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon4, styles.vectorIconLayout]}
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
          <Text style={[styles.thesePopularCities, styles.textFlexBox]}>
            These popular cities have lot to travel
          </Text>
        </View>
      </View>
      <View style={styles.dealsSection}>
        <Pressable
          style={styles.dealsSectionChild}
          onPress={() => navigation.navigate("Profile15")}
        />
        <Pressable
          style={styles.bookYourFirstContainer}
          onPress={() => navigation.navigate("Profile15")}
        >
          <Text style={[styles.text4, styles.textFlexBox]}>
            <Text style={styles.bookYourFirstContainer1}>
              <Text style={styles.bookYour}>{`Book your `}</Text>
              <Text style={[styles.firstRide, styles.text5Typo]}>
                First Ride
              </Text>
              <Text style={styles.bookYour}>{` with 
us and get the discount`}</Text>
            </Text>
          </Text>
        </Pressable>
        <Pressable
          style={[styles.pressable, styles.actionPosition]}
          onPress={() => navigation.navigate("Profile15")}
        >
          <Text style={[styles.text5, styles.text5Typo]}>20%</Text>
        </Pressable>
        <Pressable
          style={[styles.weekDeals, styles.actionPosition]}
          onPress={() => navigation.navigate("Profile15")}
        >
          <Text style={[styles.weekDeals1, styles.text5Typo]}>Week Deals!</Text>
        </Pressable>
        <Pressable
          style={styles.wrapper}
          onPress={() => navigation.navigate("Profile15")}
        >
          <Image
            style={styles.icon1}
            contentFit="cover"
            source={require("../assets/rectangle-5631.png")}
          />
        </Pressable>
        <Pressable
          style={styles.seeAll}
          onPress={() => navigation.navigate("Profile15")}
        >
          <Text style={styles.seeAll1}>See All</Text>
        </Pressable>
        <Text style={[styles.specialOffers, styles.profilePosition]}>
          Special Offers
        </Text>
      </View>
      <View style={styles.search}>
        <Text style={[styles.search1, styles.textFlexBox]}>Search</Text>
        <Image
          style={[styles.vectorIcon26, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector12.png")}
        />
        <Image
          style={styles.vectorIcon27}
          contentFit="cover"
          source={require("../assets/vector13.png")}
        />
      </View>
      <View style={[styles.profileIcons, styles.actionPosition]}>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Profile14")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector45.png")}
          />
        </Pressable>
        <Pressable
          style={styles.vector1}
          onPress={() => navigation.navigate("Profile13")}
        >
          <Image
            style={[styles.icon2, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector46.png")}
          />
        </Pressable>
        <Text style={[styles.lenaRose, styles.lenaRoseFlexBox]}>Lena Rose</Text>
        <Text style={[styles.goodMorning, styles.lenaRoseFlexBox]}>
          Good Morning
        </Text>
        <Pressable
          style={styles.container}
          onPress={() => navigation.navigate("ProfilePage")}
        >
          <Image
            style={styles.iconLayout1}
            contentFit="cover"
            source={require("../assets/ellipse-313.png")}
          />
        </Pressable>
        <Image
          style={[styles.wavingHandSvgrepoCom1Icon, styles.profilePosition]}
          contentFit="cover"
          source={require("../assets/wavinghandsvgrepocom-11.png")}
        />
      </View>
      <View style={styles.statusBar}>
        <View style={[styles.action, styles.actionPosition]}>
          <Text style={[styles.time, styles.homeTypo]}>9:41</Text>
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
  parentLayout: {
    width: 352,
    position: "absolute",
  },
  userAltLayout: {
    height: 36,
    width: 36,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  homeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 0,
    left: 0,
    position: "absolute",
  },
  ePayTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  profilePosition: {
    top: 1,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  relatedLayout1: {
    height: 270,
    width: 190,
    borderWidth: 1,
    borderColor: Color.colorGray_1200,
    borderStyle: "solid",
    top: 67,
    borderRadius: Border.br_mini,
    overflow: "hidden",
    position: "absolute",
  },
  savedProductFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  vectorIconLayout: {
    width: 13,
    height: 12,
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
  },
  relatedLayout: {
    top: 357,
    height: 270,
    width: 190,
    borderWidth: 1,
    borderColor: Color.colorGray_1200,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    overflow: "hidden",
    position: "absolute",
  },
  textFlexBox: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
  },
  text5Typo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  actionPosition: {
    left: 20,
    position: "absolute",
  },
  lenaRoseFlexBox: {
    width: 202,
    color: Color.colorGray_600,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    position: "absolute",
  },
  frameChild: {
    width: 41,
    height: 41,
    top: 0,
    left: 0,
    position: "absolute",
  },
  icon: {
    overflow: "hidden",
  },
  userAlt: {
    left: 310,
    top: 3,
    position: "absolute",
  },
  home: {
    color: Color.colorsWhite,
    fontSize: FontSize.size_sm,
  },
  schedule1: {
    textAlign: "left",
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
    textAlign: "left",
    color: Color.colorsWhite,
    fontSize: FontSize.size_sm,
    top: 0,
    position: "absolute",
  },
  profile: {
    left: 307,
  },
  homeParent: {
    top: 34,
    height: 22,
    left: 0,
  },
  vectorIcon: {
    width: "12.52%",
    top: "7.75%",
    right: "31.03%",
    bottom: "28.2%",
    left: "56.46%",
    height: "64.06%",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon1: {
    width: "9.44%",
    top: "2.41%",
    right: "62.52%",
    bottom: "33.54%",
    left: "28.03%",
    height: "64.06%",
    maxWidth: "100%",
    position: "absolute",
  },
  instanceParent: {
    top: 19,
    left: 41,
    height: 56,
  },
  frameNave: {
    top: 1101,
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    backgroundColor: Color.colorTomato_100,
    width: 428,
    height: 100,
    left: 0,
    position: "absolute",
  },
  vectorIcon2: {
    width: 17,
    height: 15,
  },
  savedProduct: {
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    padding: Padding.p_2xs,
    height: 36,
    width: 36,
    backgroundColor: Color.colorsWhite,
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
    width: 192,
    color: Color.ew,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  vectorIcon3: {
    height: 12,
  },
  vectorIcon4: {
    marginLeft: 4,
    height: 12,
  },
  starReview: {
    flexDirection: "row",
  },
  reviews: {
    marginLeft: 10,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.ew,
  },
  starAndReviewCount: {
    marginTop: 2,
  },
  text: {
    color: Color.colorGray_1100,
    fontFamily: FontFamily.poppinsRegular,
    marginTop: 2,
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
  relatedProductDetail2: {
    left: 202,
  },
  relatedProductDetail3: {
    left: 0,
  },
  popularCities: {
    fontSize: FontSize.size_11xl,
    width: 222,
    lineHeight: 30,
    color: Color.ew,
    textAlign: "left",
    top: 0,
    left: 0,
    position: "absolute",
  },
  thesePopularCities: {
    top: 35,
    left: 2,
    color: Color.colorGray_400,
    width: 233,
    lineHeight: 13,
    display: "flex",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    position: "absolute",
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
    height: 627,
    position: "absolute",
  },
  dealsSectionChild: {
    top: 49,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.ew,
    width: 381,
    height: 186,
    left: 0,
    position: "absolute",
  },
  bookYour: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorsWhite,
  },
  firstRide: {
    color: Color.colorTomato_200,
  },
  bookYourFirstContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  text4: {
    width: 148,
    lineHeight: 13,
    display: "flex",
    fontSize: FontSize.size_xs,
  },
  bookYourFirstContainer: {
    left: 18,
    top: 175,
    position: "absolute",
  },
  text5: {
    fontSize: FontSize.size_29xl,
    width: 107,
    height: 38,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    lineHeight: 30,
    color: Color.colorsWhite,
  },
  pressable: {
    top: 87,
  },
  weekDeals1: {
    width: 103,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    lineHeight: 30,
    fontSize: FontSize.size_base,
    color: Color.colorsWhite,
  },
  weekDeals: {
    top: 135,
  },
  icon1: {
    borderRadius: Border.br_mini,
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 127,
    top: 42,
    width: 254,
    height: 173,
    position: "absolute",
  },
  seeAll1: {
    height: 25,
    width: 54,
    lineHeight: 30,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.ew,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  seeAll: {
    left: 329,
    top: 0,
    position: "absolute",
  },
  specialOffers: {
    fontSize: FontSize.size_xl,
    letterSpacing: -0.4,
    width: 141,
    lineHeight: 30,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.ew,
    textAlign: "left",
    left: 0,
  },
  dealsSection: {
    top: 216,
    left: 22,
    width: 383,
    height: 235,
    position: "absolute",
  },
  search1: {
    top: 21,
    left: 52,
    fontSize: FontSize.size_smi,
    color: Color.colorGray_300,
    width: 47,
    height: 14,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  vectorIcon26: {
    height: "37.53%",
    width: "5.53%",
    top: "34.13%",
    right: "88.95%",
    bottom: "28.35%",
    left: "5.53%",
    position: "absolute",
  },
  vectorIcon27: {
    top: 18,
    right: 23,
    width: 22,
    height: 19,
    position: "absolute",
  },
  search: {
    top: 140,
    left: 23,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSilver_300,
    width: 380,
    height: 56,
    position: "absolute",
  },
  icon2: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "93.46%",
    top: "28.67%",
    right: "0%",
    bottom: "32.24%",
    width: "6.54%",
    height: "39.09%",
    position: "absolute",
  },
  vector1: {
    left: "82.2%",
    top: "23.31%",
    right: "12.07%",
    bottom: "32.02%",
    width: "5.73%",
    height: "44.67%",
    position: "absolute",
  },
  lenaRose: {
    top: 27,
    left: 69,
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  goodMorning: {
    left: 67,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    top: 0,
  },
  container: {
    height: 54,
    width: 54,
    top: 0,
    left: 0,
    position: "absolute",
  },
  wavingHandSvgrepoCom1Icon: {
    left: 182,
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  profileIcons: {
    top: 63,
    width: 382,
    height: 56,
  },
  time: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    width: 54,
    color: Color.ew,
  },
  action: {
    top: 14,
    height: 18,
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
    left: "50%",
    width: 375,
    height: 44,
    position: "absolute",
  },
  profile11: {
    height: 1201,
    width: "100%",
    flex: 1,
    backgroundColor: Color.colorsWhite,
  },
});

export default Profile11;
