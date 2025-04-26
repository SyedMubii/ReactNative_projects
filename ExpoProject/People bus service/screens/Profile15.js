import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Profile15 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile15}>
      <View style={[styles.dealsSection, styles.g4ChildLayout]}>
        <View style={[styles.g4, styles.g4Layout]}>
          <View style={[styles.g4Child, styles.g4ChildLayout]} />
          <Text
            style={[styles.bookYourFirstContainer, styles.specialOffersFlexBox]}
          >
            <Text style={styles.bookYourFirstContainer1}>
              <Text style={styles.bookYour}>{`Book your `}</Text>
              <Text style={styles.firstRide}>First Ride</Text>
              <Text style={styles.bookYour}>{` with 
us and get the discount`}</Text>
            </Text>
          </Text>
          <Text style={styles.text}>12%</Text>
          <Text style={[styles.newArrivals, styles.cardDealsTypo]}>
            New Arrivals!
          </Text>
          <Image
            style={[styles.g4Item, styles.g1Position]}
            contentFit="cover"
            source={require("../assets/rectangle-563.png")}
          />
        </View>
        <View style={[styles.g3, styles.g4Layout]}>
          <View style={[styles.g4Child, styles.g4ChildLayout]} />
          <Text
            style={[styles.bookYourFirstContainer, styles.specialOffersFlexBox]}
          >
            <Text style={styles.bookYourFirstContainer1}>
              <Text style={styles.bookYour}>{`Book your `}</Text>
              <Text style={styles.firstRide}>First Ride</Text>
              <Text style={styles.bookYour}>{` with 
us and get the discount`}</Text>
            </Text>
          </Text>
          <Text style={styles.text}>15%</Text>
          <Text style={[styles.cardDeals, styles.cardDealsTypo]}>
            Card Deals!
          </Text>
          <Image
            style={[styles.g4Item, styles.g1Position]}
            contentFit="cover"
            source={require("../assets/rectangle-563.png")}
          />
        </View>
        <View style={[styles.g2, styles.g4Layout]}>
          <View style={[styles.g4Child, styles.g4ChildLayout]} />
          <Text
            style={[styles.bookYourFirstContainer, styles.specialOffersFlexBox]}
          >
            <Text style={styles.bookYourFirstContainer1}>
              <Text style={styles.bookYour}>{`Book your `}</Text>
              <Text style={styles.firstRide}>First Ride</Text>
              <Text style={styles.bookYour}>{` with 
us and get the discount`}</Text>
            </Text>
          </Text>
          <Text style={styles.text}>10%</Text>
          <Text style={[styles.cardDeals, styles.cardDealsTypo]}>
            Top Deals!
          </Text>
          <Image
            style={[styles.g4Item, styles.g1Position]}
            contentFit="cover"
            source={require("../assets/rectangle-563.png")}
          />
        </View>
        <View style={[styles.g1, styles.g1Position]}>
          <View style={[styles.g4Child, styles.g4ChildLayout]} />
          <Text
            style={[styles.bookYourFirstContainer, styles.specialOffersFlexBox]}
          >
            <Text style={styles.bookYourFirstContainer1}>
              <Text style={styles.bookYour}>{`Book your `}</Text>
              <Text style={styles.firstRide}>First Ride</Text>
              <Text style={styles.bookYour}>{` with 
us and get the discount`}</Text>
            </Text>
          </Text>
          <Text style={styles.text}>20%</Text>
          <Text style={[styles.cardDeals, styles.cardDealsTypo]}>
            Week Deals!
          </Text>
          <Image
            style={[styles.g4Item, styles.g1Position]}
            contentFit="cover"
            source={require("../assets/rectangle-563.png")}
          />
        </View>
      </View>
      <View style={styles.profileIcons}>
        <Text style={[styles.specialOffers, styles.timeTypo]}>
          Special Offers
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
      </View>
      <Pressable
        style={styles.vector1}
        onPress={() => navigation.navigate("Profile20")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector9.png")}
        />
      </Pressable>
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
  g4ChildLayout: {
    width: 381,
    position: "absolute",
  },
  g4Layout: {
    height: 188,
    left: 0,
    width: 381,
  },
  specialOffersFlexBox: {
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  cardDealsTypo: {
    height: 29,
    fontSize: FontSize.size_base,
    top: 91,
    lineHeight: 30,
    left: 20,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorsWhite,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  g1Position: {
    top: 0,
    position: "absolute",
  },
  timeTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    top: 0,
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  g4Child: {
    top: 7,
    borderRadius: Border.br_16xl,
    backgroundColor: Color.ew,
    height: 181,
    left: 0,
  },
  bookYour: {
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorsWhite,
  },
  firstRide: {
    color: Color.colorTomato_200,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  bookYourFirstContainer1: {
    lineBreak: "anywhere",
    width: "100%",
  },
  bookYourFirstContainer: {
    top: 130,
    left: 18,
    fontSize: FontSize.size_xs,
    lineHeight: 13,
    width: 148,
    height: 25,
  },
  text: {
    top: 44,
    fontSize: FontSize.size_29xl,
    width: 107,
    height: 37,
    lineHeight: 30,
    left: 20,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: Color.colorsWhite,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  newArrivals: {
    width: 113,
  },
  g4Item: {
    left: 127,
    borderRadius: Border.br_mini,
    width: 254,
    height: 169,
  },
  g4: {
    top: 615,
    position: "absolute",
  },
  cardDeals: {
    width: 103,
  },
  g3: {
    top: 410,
    position: "absolute",
  },
  g2: {
    top: 205,
    position: "absolute",
  },
  g1: {
    height: 188,
    left: 0,
    width: 381,
  },
  dealsSection: {
    top: 113,
    left: 22,
    height: 803,
  },
  specialOffers: {
    left: 42,
    fontSize: FontSize.size_3xl,
    color: Color.colorGray_600,
    width: 202,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    width: "100%",
  },
  vector: {
    left: "0%",
    top: "15.15%",
    right: "91.03%",
    bottom: "20.23%",
    width: "8.97%",
    height: "64.62%",
    position: "absolute",
  },
  profileIcons: {
    top: 77,
    left: 26,
    width: 244,
    height: 33,
    position: "absolute",
  },
  vector1: {
    left: "88.32%",
    top: "8.86%",
    right: "5.84%",
    bottom: "88.78%",
    width: "5.84%",
    height: "2.36%",
    position: "absolute",
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
  profile15: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    height: 926,
    width: "100%",
  },
});

export default Profile15;
