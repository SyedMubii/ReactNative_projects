import * as React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Outgoing = () => {
  return (
    <ImageBackground
      style={styles.outgoingIcon}
      resizeMode="cover"
      source={require("../assets/ongoing.png")}
    >
      <View style={styles.search}>
        <Text style={styles.hyderabad}>Hyderabad</Text>
        <Image
          style={styles.vectorIcon}
          contentFit="cover"
          source={require("../assets/vector12.png")}
        />
        <Image
          style={styles.vectorIcon1}
          contentFit="cover"
          source={require("../assets/vector13.png")}
        />
      </View>
      <Text style={[styles.locationTargeting, styles.locationTargetingFlexBox]}>
        Location targeting
      </Text>
      <View style={[styles.departureDate16JunParent, styles.parentShadowBox]}>
        <Text style={[styles.departureDateContainer, styles.containerTypo]}>
          <Text style={styles.departureDate}>Departure Date</Text>
          <Text style={styles.jun}> : 16 jun</Text>
        </Text>
        <Text style={[styles.nextStopContainer, styles.containerTypo]}>
          <Text style={styles.departureDate}>Next Stop</Text>
          <Text style={styles.jun}>{`    :  State Bank  `}</Text>
        </Text>
        <Text style={[styles.estimatedArrivalContainer, styles.containerTypo]}>
          <Text style={styles.departureDate}>Estimated Arrival</Text>
          <Text style={styles.jun}> : 3:42</Text>
        </Text>
        <Text style={[styles.delay10Container, styles.containerTypo]}>
          <Text style={styles.departureDate}>Delay</Text>
          <Text style={styles.jun}> : 10 min</Text>
        </Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/rectangle-471.png")}
        />
      </View>
      <View
        style={[styles.hangingAdsasdAsdasdasdParent, styles.parentShadowBox]}
      >
        <Text
          style={[
            styles.hangingAdsasdAsdasdasd,
            styles.locationTargetingFlexBox,
          ]}
        >{`Hanging adsasd
asdasdasd`}</Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/rectangle-4711.png")}
        />
        <Image
          style={[styles.frameInner, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1281.png")}
        />
        <Image
          style={[styles.groupIcon, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1281.png")}
        />
        <Image
          style={[styles.frameChild1, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1281.png")}
        />
        <Image
          style={[styles.frameChild2, styles.frameChildLayout]}
          contentFit="cover"
          source={require("../assets/group-1281.png")}
        />
        <Text style={[styles.from, styles.fromPosition]}>from</Text>
        <Text style={[styles.night, styles.fromPosition]}>$199/night</Text>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-264.png")}
        />
        <Image
          style={styles.frameChild3}
          contentFit="cover"
          source={require("../assets/group-1341.png")}
        />
      </View>
      <Image
        style={styles.busesIcon}
        contentFit="cover"
        source={require("../assets/buses1.png")}
      />
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
  locationTargetingFlexBox: {
    textAlign: "left",
    color: Color.ew,
    position: "absolute",
  },
  parentShadowBox: {
    height: 166,
    width: 271,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.05)",
    backgroundColor: Color.colorsWhite,
    borderRadius: Border.br_mini,
    top: 642,
    position: "absolute",
  },
  containerTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    left: 109,
    textAlign: "left",
    position: "absolute",
  },
  frameChildLayout: {
    width: 14,
    top: 74,
    height: 14,
    position: "absolute",
  },
  fromPosition: {
    left: 110,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.ew,
    position: "absolute",
  },
  timeLayout: {
    width: 54,
    position: "absolute",
  },
  hyderabad: {
    top: 21,
    left: 52,
    fontSize: FontSize.size_smi,
    display: "flex",
    alignItems: "center",
    width: 91,
    height: 14,
    textAlign: "left",
    color: Color.ew,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  vectorIcon: {
    height: "37.53%",
    width: "5.53%",
    top: "34.13%",
    right: "88.95%",
    bottom: "28.35%",
    left: "5.53%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon1: {
    top: 18,
    right: 23,
    width: 22,
    height: 19,
    position: "absolute",
  },
  search: {
    top: 68,
    left: 24,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorSilver_300,
    width: 380,
    height: 56,
    position: "absolute",
  },
  locationTargeting: {
    top: 590,
    fontSize: FontSize.size_5xl,
    left: 25,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  departureDate: {
    color: Color.colorTomato_100,
  },
  jun: {
    color: Color.ew,
  },
  departureDateContainer: {
    top: 27,
  },
  nextStopContainer: {
    top: 55,
  },
  estimatedArrivalContainer: {
    top: 85,
  },
  delay10Container: {
    top: 113,
  },
  frameChild: {
    top: 13,
    left: 12,
    borderRadius: Border.br_5xs,
    width: 80,
    height: 140,
    position: "absolute",
  },
  departureDate16JunParent: {
    left: 25,
  },
  hangingAdsasdAsdasdasd: {
    top: 19,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    left: 109,
  },
  frameInner: {
    left: 109,
  },
  groupIcon: {
    left: 126,
  },
  frameChild1: {
    left: 143,
  },
  frameChild2: {
    left: 160,
  },
  from: {
    top: 100,
    fontSize: FontSize.size_xs,
    left: 110,
  },
  night: {
    top: 118,
    fontSize: FontSize.size_sm,
  },
  ellipseIcon: {
    top: 105,
    left: 219,
    width: 34,
    height: 34,
    position: "absolute",
  },
  frameChild3: {
    top: 114,
    left: 228,
    width: 16,
    height: 16,
    position: "absolute",
  },
  hangingAdsasdAsdasdasdParent: {
    left: 322,
  },
  busesIcon: {
    top: 211,
    left: 39,
    width: 324,
    height: 265,
    position: "absolute",
  },
  time: {
    top: 0,
    left: 0,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    textAlign: "center",
    color: Color.ew,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
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
  outgoingIcon: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
});

export default Outgoing;
