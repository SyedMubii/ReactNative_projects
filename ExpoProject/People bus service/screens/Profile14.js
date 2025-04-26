import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  View,
  ImageBackground,
} from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Color, Border, FontSize } from "../GlobalStyles";

const Profile14 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile14}>
      <View style={styles.profileIcons}>
        <Text style={[styles.myWishlist, styles.myWishlistTypo]}>
          My Wishlist
        </Text>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("Profile12")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/vector8.png")}
          />
        </Pressable>
        <View style={[styles.savedProduct, styles.savedFlexBox]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector16.png")}
          />
        </View>
      </View>
      <View style={styles.citiesSection}>
        <View style={[styles.relatedProductDetail, styles.relatedFlexBox]}>
          <ImageBackground
            style={styles.unsplashdu0objdcynwIcon}
            resizeMode="cover"
            source={require("../assets/unsplashdu0objdcynw2.png")}
          >
            <View style={styles.savedFlexBox}>
              <Pressable
                style={styles.vectorIcon}
                onPress={() => navigation.navigate("Profile18")}
              >
                <Image
                  style={styles.icon1}
                  contentFit="cover"
                  source={require("../assets/vector16.png")}
                />
              </Pressable>
            </View>
          </ImageBackground>
          <View style={styles.theTwistLifestyleParent}>
            <Text style={[styles.theTwistLifestyle, styles.myWishlistTypo]}>
              Karachi
            </Text>
            <View style={styles.starAndReviewCount}>
              <View style={styles.starReview}>
                <Image
                  style={[styles.vectorIcon1, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector17.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector17.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector17.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector17.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector17.png")}
                />
              </View>
              <Text style={[styles.reviews, styles.textTypo]}>100 reviews</Text>
            </View>
            <Text style={[styles.text, styles.textTypo]}>
              Lorem ipsum dolor sit amet...
            </Text>
          </View>
        </View>
        <View style={[styles.relatedProductDetail1, styles.relatedLayout2]}>
          <ImageBackground
            style={styles.unsplashdu0objdcynwIcon}
            resizeMode="cover"
            source={require("../assets/unsplashmcefqfoxq401.png")}
          >
            <View style={styles.savedFlexBox}>
              <Pressable
                style={styles.vectorIcon}
                onPress={() => navigation.navigate("Profile18")}
              >
                <Image
                  style={styles.icon1}
                  contentFit="cover"
                  source={require("../assets/vector16.png")}
                />
              </Pressable>
            </View>
          </ImageBackground>
          <View style={styles.theTwistLifestyleParent}>
            <Text style={[styles.theTwistLifestyle, styles.myWishlistTypo]}>
              Hyderabad
            </Text>
            <View style={styles.starAndReviewCount}>
              <View style={styles.starReview}>
                <Image
                  style={[styles.vectorIcon1, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector17.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector17.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector17.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector17.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector17.png")}
                />
              </View>
              <Text style={[styles.reviews, styles.textTypo]}>100 reviews</Text>
            </View>
            <Text style={[styles.text, styles.textTypo]}>
              Lorem ipsum dolor sit amet...
            </Text>
          </View>
        </View>
        <View style={[styles.relatedProductDetail2, styles.relatedLayout1]}>
          <ImageBackground
            style={styles.unsplashdu0objdcynwIcon}
            resizeMode="cover"
            source={require("../assets/unsplashmcefqfoxq402.png")}
          >
            <View style={styles.savedFlexBox}>
              <Pressable
                style={styles.vectorIcon}
                onPress={() => navigation.navigate("Profile18")}
              >
                <Image
                  style={styles.icon1}
                  contentFit="cover"
                  source={require("../assets/vector14.png")}
                />
              </Pressable>
            </View>
          </ImageBackground>
          <View style={styles.theTwistLifestyleParent}>
            <Text style={[styles.theTwistLifestyle, styles.myWishlistTypo]}>
              Nawabshah
            </Text>
            <View style={styles.starAndReviewCount}>
              <View style={styles.starReview}>
                <Image
                  style={[styles.vectorIcon1, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector15.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector15.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector15.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector15.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
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
        <View style={[styles.relatedProductDetail3, styles.relatedLayout1]}>
          <ImageBackground
            style={styles.unsplashdu0objdcynwIcon}
            resizeMode="cover"
            source={require("../assets/unsplashdu0objdcynw1.png")}
          >
            <View style={styles.savedFlexBox}>
              <Pressable
                style={styles.vectorIcon}
                onPress={() => navigation.navigate("Profile18")}
              >
                <Image
                  style={styles.icon1}
                  contentFit="cover"
                  source={require("../assets/vector14.png")}
                />
              </Pressable>
            </View>
          </ImageBackground>
          <View style={styles.theTwistLifestyleParent}>
            <Text style={[styles.theTwistLifestyle, styles.myWishlistTypo]}>
              Sukkar
            </Text>
            <View style={styles.starAndReviewCount}>
              <View style={styles.starReview}>
                <Image
                  style={[styles.vectorIcon1, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector15.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector15.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector15.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector15.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
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
        <View style={[styles.relatedProductDetail4, styles.relatedLayout]}>
          <ImageBackground
            style={styles.unsplashdu0objdcynwIcon}
            resizeMode="cover"
            source={require("../assets/unsplashdu0objdcynw3.png")}
          >
            <View style={styles.savedFlexBox}>
              <Pressable
                style={styles.vectorIcon}
                onPress={() => navigation.navigate("Profile18")}
              >
                <Image
                  style={styles.icon1}
                  contentFit="cover"
                  source={require("../assets/vector18.png")}
                />
              </Pressable>
            </View>
          </ImageBackground>
          <View style={styles.theTwistLifestyleParent}>
            <Text style={[styles.theTwistLifestyle, styles.myWishlistTypo]}>
              Jamshoro
            </Text>
            <View style={styles.starAndReviewCount}>
              <View style={styles.starReview}>
                <Image
                  style={[styles.vectorIcon1, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
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
        <View style={[styles.relatedProductDetail5, styles.relatedLayout]}>
          <ImageBackground
            style={styles.unsplashdu0objdcynwIcon}
            resizeMode="cover"
            source={require("../assets/unsplashmcefqfoxq403.png")}
          >
            <View style={styles.savedFlexBox}>
              <Pressable
                style={styles.vectorIcon}
                onPress={() => navigation.navigate("Profile18")}
              >
                <Image
                  style={styles.icon1}
                  contentFit="cover"
                  source={require("../assets/vector18.png")}
                />
              </Pressable>
            </View>
          </ImageBackground>
          <View style={styles.theTwistLifestyleParent}>
            <Text style={[styles.theTwistLifestyle, styles.myWishlistTypo]}>
              Kotri
            </Text>
            <View style={styles.starAndReviewCount}>
              <View style={styles.starReview}>
                <Image
                  style={[styles.vectorIcon1, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
                  contentFit="cover"
                  source={require("../assets/vector3.png")}
                />
                <Image
                  style={[styles.vectorIcon2, styles.vectorIconLayout]}
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
  myWishlistTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  savedFlexBox: {
    padding: Padding.p_2xs,
    justifyContent: "center",
    width: 36,
    backgroundColor: Color.colorsWhite,
    borderRadius: Border.br_31xl,
    flexDirection: "row",
    alignItems: "center",
    height: 36,
  },
  relatedFlexBox: {
    alignItems: "flex-end",
    left: 0,
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
  relatedLayout2: {
    height: 262,
    width: 190,
    borderWidth: 1,
    borderColor: Color.colorGray_1200,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    top: 0,
    overflow: "hidden",
    position: "absolute",
  },
  relatedLayout1: {
    top: 272,
    height: 262,
    width: 190,
    borderWidth: 1,
    borderColor: Color.colorGray_1200,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    overflow: "hidden",
    position: "absolute",
  },
  relatedLayout: {
    top: 544,
    height: 262,
    width: 190,
    borderWidth: 1,
    borderColor: Color.colorGray_1200,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    overflow: "hidden",
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  myWishlist: {
    top: 1,
    left: 42,
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_600,
    display: "flex",
    width: 202,
    alignItems: "center",
    position: "absolute",
  },
  icon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "0%",
    top: "16.67%",
    right: "94.26%",
    bottom: "24.1%",
    width: "5.74%",
    height: "59.23%",
    position: "absolute",
  },
  vectorIcon: {
    width: 17,
    height: 15,
  },
  savedProduct: {
    left: 345,
    top: 0,
    position: "absolute",
  },
  profileIcons: {
    top: 76,
    left: 26,
    width: 381,
    height: 36,
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  unsplashdu0objdcynwIcon: {
    borderTopLeftRadius: Border.br_7xs,
    borderTopRightRadius: Border.br_7xs,
    justifyContent: "flex-end",
    paddingLeft: Padding.p_sm,
    paddingTop: Padding.p_base,
    paddingRight: Padding.p_base,
    paddingBottom: Padding.p_xs,
    alignSelf: "stretch",
    flexDirection: "row",
    flex: 1,
  },
  theTwistLifestyle: {
    fontSize: FontSize.size_base,
    width: 192,
    color: Color.ew,
  },
  vectorIcon1: {
    height: 12,
  },
  vectorIcon2: {
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
    height: 262,
    width: 190,
    borderWidth: 1,
    borderColor: Color.colorGray_1200,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    top: 0,
    overflow: "hidden",
    position: "absolute",
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
  relatedProductDetail4: {
    alignItems: "flex-end",
    left: 0,
  },
  relatedProductDetail5: {
    left: 202,
  },
  citiesSection: {
    top: 120,
    left: 18,
    width: 392,
    height: 806,
    position: "absolute",
  },
  time: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    textAlign: "center",
    color: Color.ew,
    left: 0,
    top: 0,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    width: 54,
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
  profile14: {
    backgroundColor: Color.colorGray_100,
    height: 926,
    width: "100%",
    flex: 1,
  },
});

export default Profile14;
