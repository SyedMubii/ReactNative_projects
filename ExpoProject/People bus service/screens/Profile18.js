import * as React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Profile18 = () => {
  return (
    <View style={styles.profile18}>
      <View style={[styles.frameNave, styles.frameLayout]}>
        <View style={[styles.frameNaveChild, styles.frameLayout]} />
        <View style={[styles.instanceParent, styles.searchLayout]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/group-12511.png")}
          />
          <Image
            style={styles.userAltIcon}
            contentFit="cover"
            source={require("../assets/useralt.png")}
          />
          <View style={styles.homeParent}>
            <Text style={[styles.home, styles.homeTypo]}>Home</Text>
            <Text style={[styles.schedule, styles.karachiTypo]}>Schedule</Text>
            <Text style={[styles.ePay, styles.karachiTypo]}>E Pay</Text>
            <Text style={[styles.profile, styles.foundPosition]}>Profile</Text>
          </View>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector10.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.vectorIconLayout1]}
            contentFit="cover"
            source={require("../assets/vector11.png")}
          />
        </View>
      </View>
      <View style={styles.dealsSection}>
        <Text style={[styles.resultsForKarachi, styles.karachiTypo]}>
          Results for “Karachi“
        </Text>
        <Text style={[styles.found, styles.foundTypo]}>1 found</Text>
      </View>
      <View style={[styles.search, styles.searchLayout]}>
        <Text style={[styles.karachi, styles.karachiTypo]}>Karachi</Text>
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector12.png")}
        />
        <Image
          style={styles.vectorIcon3}
          contentFit="cover"
          source={require("../assets/vector13.png")}
        />
      </View>
      <View style={[styles.citiesSection, styles.citiesSectionLayout]}>
        <View style={[styles.relatedProductDetail, styles.citiesSectionLayout]}>
          <ImageBackground
            style={styles.unsplashdu0objdcynwIcon}
            resizeMode="cover"
            source={require("../assets/unsplashdu0objdcynw1.png")}
          >
            <View style={styles.savedProduct}>
              <Image
                style={styles.vectorIcon4}
                contentFit="cover"
                source={require("../assets/vector14.png")}
              />
            </View>
          </ImageBackground>
          <View style={styles.theTwistLifestyleParent}>
            <Text style={[styles.theTwistLifestyle, styles.foundTypo]}>
              Karachi
            </Text>
            <View style={styles.starAndReviewCount}>
              <View style={styles.starReview}>
                <Image
                  style={[styles.vectorIcon5, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector15.png")}
                />
                <Image
                  style={[styles.vectorIcon6, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector15.png")}
                />
                <Image
                  style={[styles.vectorIcon6, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector15.png")}
                />
                <Image
                  style={[styles.vectorIcon6, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector15.png")}
                />
                <Image
                  style={[styles.vectorIcon6, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector15.png")}
                />
              </View>
              <Text style={[styles.reviews, styles.textTypo]}>100 reviews</Text>
            </View>
            <Text style={[styles.text, styles.textTypo]}>
              Lorem ipsum dolor sit amet...
            </Text>
          </View>
        </View>
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
    </View>
  );
};

const styles = StyleSheet.create({
  frameLayout: {
    height: 100,
    width: 428,
    left: 0,
    position: "absolute",
  },
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
  karachiTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  foundPosition: {
    top: 1,
    position: "absolute",
  },
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  foundTypo: {
    fontSize: FontSize.size_base,
    color: Color.ew,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  citiesSectionLayout: {
    height: 262,
    width: 190,
    position: "absolute",
  },
  vectorIconLayout: {
    width: 13,
    height: 12,
  },
  textTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  frameNaveChild: {
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    backgroundColor: Color.colorTomato_100,
    top: 0,
  },
  frameChild: {
    left: 4,
    width: 33,
    height: 33,
    top: 0,
    position: "absolute",
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
    color: Color.colorsWhite,
    fontSize: FontSize.size_sm,
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
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.colorsWhite,
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
    width: "10.24%",
    top: "7.75%",
    right: "32.16%",
    bottom: "42.48%",
    left: "57.59%",
    height: "49.77%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon1: {
    width: "7.17%",
    top: "2.41%",
    right: "63.66%",
    bottom: "47.82%",
    left: "29.17%",
    height: "49.77%",
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
    display: "none",
  },
  resultsForKarachi: {
    fontSize: FontSize.size_lg,
    color: Color.ew,
    top: 0,
    left: 0,
    position: "absolute",
  },
  found: {
    left: 321,
    width: 77,
    top: 1,
    position: "absolute",
  },
  dealsSection: {
    top: 146,
    left: 25,
    width: 398,
    height: 27,
    position: "absolute",
  },
  karachi: {
    top: 21,
    left: 52,
    fontSize: FontSize.size_smi,
    display: "flex",
    width: 91,
    height: 14,
    alignItems: "center",
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
    top: 18,
    right: 23,
    width: 22,
    height: 19,
    position: "absolute",
  },
  search: {
    top: 68,
    left: 23,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSilver_300,
    width: 380,
  },
  vectorIcon4: {
    width: 17,
    height: 15,
  },
  savedProduct: {
    borderRadius: Border.br_31xl,
    width: 36,
    height: 36,
    justifyContent: "center",
    padding: Padding.p_2xs,
    flexDirection: "row",
    alignItems: "center",
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
  },
  vectorIcon5: {
    height: 12,
  },
  vectorIcon6: {
    marginLeft: 4,
    height: 12,
  },
  starReview: {
    flexDirection: "row",
  },
  reviews: {
    marginLeft: 10,
    color: Color.ew,
  },
  starAndReviewCount: {
    marginTop: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: Color.colorGray_1100,
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
    borderRadius: Border.br_mini,
    borderStyle: "solid",
    borderColor: Color.colorGray_1200,
    borderWidth: 1,
    overflow: "hidden",
    top: 0,
    left: 0,
  },
  citiesSection: {
    top: 202,
    left: 18,
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
  profile18: {
    width: "100%",
    height: 926,
    flex: 1,
    backgroundColor: Color.colorsWhite,
  },
});

export default Profile18;
