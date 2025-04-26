import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const Schedules = () => {
  return (
    <View style={styles.schedules}>
      <View style={styles.frameNave}>
        <View style={[styles.instanceParent, styles.searchLayout]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-125.png")}
          />
          <Image
            style={styles.userAltIcon}
            contentFit="cover"
            source={require("../assets/useralt.png")}
          />
          <View style={styles.homeParent}>
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            <Text style={[styles.schedule, styles.ePayTypo]}>Schedule</Text>
            <Text style={[styles.ePay, styles.ePayTypo]}>E Pay</Text>
            <Text style={[styles.profile, styles.profilePosition]}>
              Profile
            </Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
        </View>
      </View>
      <View style={styles.citiesSection}>
        <View style={[styles.relatedProductDetail, styles.relatedLayout]}>
          <ImageBackground
            style={styles.unsplashdu0objdcynwIcon}
            resizeMode="cover"
            source={require("../assets/unsplashdu0objdcynw.png")}
          >
            <View style={styles.savedProduct}>
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
            <View style={styles.starAndReviewCount}>
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
        <View style={[styles.relatedProductDetail1, styles.relatedLayout]}>
          <ImageBackground
            style={styles.unsplashdu0objdcynwIcon}
            resizeMode="cover"
            source={require("../assets/unsplashmcefqfoxq40.png")}
          >
            <View style={styles.savedProduct}>
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
            <View style={styles.starAndReviewCount}>
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
          <Text style={styles.popularCities}>Popular Cities</Text>
          <Text style={[styles.thesePopularCities, styles.search1FlexBox]}>
            These popular cities have lot to travel
          </Text>
        </View>
      </View>
      <View style={styles.dealsSection}>
        <View style={[styles.g1, styles.g1Layout]}>
          <Image
            style={styles.g1Child}
            contentFit="cover"
            source={require("../assets/rectangle-562.png")}
          />
          <View style={[styles.g1Item, styles.g1ItemLayout]} />
          <Text style={[styles.stationSchedules, styles.busTypo]}>
            Station Schedules
          </Text>
          <View style={[styles.g1Inner, styles.g1InnerPosition]} />
        </View>
        <View style={[styles.g11, styles.g1Layout]}>
          <Image
            style={styles.g1Child}
            contentFit="cover"
            source={require("../assets/rectangle-5621.png")}
          />
          <View style={[styles.rectangleView, styles.g1ItemLayout]} />
          <Text style={[styles.busUpdates, styles.busTypo]}>Bus Updates</Text>
          <View style={[styles.g1Inner, styles.g1InnerPosition]} />
        </View>
        <View style={[styles.g12, styles.g1Layout]}>
          <Image
            style={styles.g1Child}
            contentFit="cover"
            source={require("../assets/rectangle-5622.png")}
          />
          <View style={[styles.g1Child3, styles.g1ItemLayout]} />
          <Text style={[styles.busSchedules, styles.busTypo]}>
            Bus Schedules
          </Text>
          <View style={[styles.g1Inner, styles.g1InnerPosition]} />
        </View>
        <Text style={styles.schedules1}>Schedules</Text>
      </View>
      <View style={[styles.search, styles.searchLayout]}>
        <Text style={[styles.search1, styles.search1FlexBox]}>Search</Text>
        <Image
          style={[styles.vectorIcon14, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <Image
          style={styles.vectorIcon15}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
      </View>
      <View style={[styles.profileIcons, styles.searchLayout]}>
        <Image
          style={[styles.vectorIcon16, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector6.png")}
        />
        <Image
          style={[styles.vectorIcon17, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
        <Text style={[styles.lenaRose, styles.lenaRoseFlexBox]}>Lena Rose</Text>
        <Text style={[styles.goodMorning, styles.lenaRoseFlexBox]}>
          Good Morning
        </Text>
        <Image
          style={[styles.profileIconsChild, styles.timeLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-313.png")}
        />
        <Image
          style={[styles.wavingHandSvgrepoCom1Icon, styles.profilePosition]}
          contentFit="cover"
          source={require("../assets/wavinghandsvgrepocom-1.png")}
        />
      </View>
      <View style={[styles.statusBar, styles.g1InnerPosition]}>
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
  searchLayout: {
    height: 56,
    position: "absolute",
  },
  homeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 0,
    left: 0,
  },
  ePayTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  profilePosition: {
    top: 1,
    position: "absolute",
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  vectorIconLayout: {
    width: 13,
    height: 12,
  },
  textTypo: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
  },
  search1FlexBox: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    position: "absolute",
  },
  g1Layout: {
    height: 179,
    width: 368,
    position: "absolute",
  },
  g1ItemLayout: {
    height: 58,
    backgroundColor: Color.colorTomato_300,
    left: "50%",
    borderRadius: Border.br_16xl,
    position: "absolute",
  },
  busTypo: {
    height: 35,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_7xl,
    left: "50%",
    display: "flex",
    lineHeight: 30,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: Color.colorsWhite,
    position: "absolute",
  },
  g1InnerPosition: {
    left: "50%",
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
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  frameChild: {
    width: 41,
    height: 41,
    top: 0,
    left: 0,
    position: "absolute",
  },
  userAltIcon: {
    top: 3,
    left: 310,
    overflow: "hidden",
    height: 36,
    width: 36,
    position: "absolute",
  },
  home: {
    color: Color.colorsWhite,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  schedule: {
    left: 80,
    textAlign: "left",
    color: Color.colorsWhite,
    fontSize: FontSize.size_sm,
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
    textAlign: "left",
    color: Color.colorsWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  homeParent: {
    top: 34,
    height: 22,
    width: 352,
    left: 0,
    position: "absolute",
  },
  vectorIcon: {
    width: "12.49%",
    top: "7.75%",
    right: "31.21%",
    bottom: "28.2%",
    left: "56.3%",
    height: "64.06%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon1: {
    width: "9.43%",
    top: "2.41%",
    right: "62.64%",
    bottom: "33.54%",
    left: "27.94%",
    height: "64.06%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  instanceParent: {
    top: 19,
    left: 41,
    width: 352,
  },
  frameNave: {
    top: 826,
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    width: 428,
    height: 100,
    backgroundColor: Color.colorTomato_100,
    left: 0,
    position: "absolute",
  },
  vectorIcon2: {
    width: 17,
    height: 15,
  },
  savedProduct: {
    borderRadius: Border.br_31xl,
    padding: Padding.p_2xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
    textAlign: "left",
  },
  starAndReviewCount: {
    marginTop: 2,
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: Color.colorGray_1100,
    fontFamily: FontFamily.poppinsRegular,
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
    width: 222,
    lineHeight: 30,
    fontSize: FontSize.size_11xl,
    color: Color.ew,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 0,
    left: 0,
    position: "absolute",
  },
  thesePopularCities: {
    top: 35,
    lineHeight: 13,
    color: Color.colorGray_400,
    width: 233,
    left: 2,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
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
    display: "none",
    position: "absolute",
  },
  g1Child: {
    left: 9,
    width: 348,
    height: 170,
    borderRadius: Border.br_16xl,
    top: 0,
    position: "absolute",
  },
  g1Item: {
    marginLeft: -130,
    width: 259,
    top: 55,
    backgroundColor: Color.colorTomato_300,
  },
  stationSchedules: {
    marginLeft: -127,
    top: 66,
    width: 253,
  },
  g1Inner: {
    marginLeft: -184,
    bottom: 0,
    height: 2,
    width: 368,
    left: "50%",
    backgroundColor: Color.colorTomato_100,
  },
  g1: {
    top: 431,
    left: 1,
  },
  rectangleView: {
    marginLeft: -99,
    top: 56,
    width: 197,
  },
  busUpdates: {
    marginLeft: -88,
    width: 176,
    top: 67,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_7xl,
  },
  g11: {
    top: 241,
    left: 0,
  },
  g1Child3: {
    marginLeft: -112,
    width: 224,
    top: 55,
    backgroundColor: Color.colorTomato_300,
  },
  busSchedules: {
    marginLeft: -100,
    width: 200,
    top: 67,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_7xl,
  },
  g12: {
    top: 51,
    left: 0,
  },
  schedules1: {
    color: Color.colorTomato_100,
    width: 178,
    left: 2,
    fontSize: FontSize.size_11xl,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 0,
    position: "absolute",
  },
  dealsSection: {
    top: 204,
    left: 29,
    width: 369,
    height: 610,
    position: "absolute",
  },
  search1: {
    top: 21,
    left: 52,
    fontSize: FontSize.size_smi,
    width: 47,
    height: 14,
    color: Color.colorsWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  vectorIcon14: {
    height: "37.53%",
    width: "5.51%",
    top: "34.13%",
    right: "88.99%",
    bottom: "28.35%",
    left: "5.5%",
  },
  vectorIcon15: {
    top: 18,
    right: 24,
    width: 22,
    height: 19,
    position: "absolute",
  },
  search: {
    top: 140,
    left: 23,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.ew,
    width: 380,
  },
  vectorIcon16: {
    height: "39.09%",
    width: "6.55%",
    top: "28.67%",
    right: "0%",
    bottom: "32.24%",
    left: "93.45%",
  },
  vectorIcon17: {
    height: "44.67%",
    width: "5.73%",
    top: "23.31%",
    right: "12.08%",
    bottom: "32.02%",
    left: "82.2%",
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
  profileIconsChild: {
    height: 54,
    top: 0,
    left: 0,
  },
  wavingHandSvgrepoCom1Icon: {
    left: 182,
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  profileIcons: {
    top: 63,
    width: 381,
    left: 20,
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
    marginLeft: -182.5,
    top: 9,
    width: 375,
    height: 44,
  },
  schedules: {
    width: "100%",
    height: 926,
    flex: 1,
    backgroundColor: Color.colorsWhite,
  },
});

export default Schedules;
