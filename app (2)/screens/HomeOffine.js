import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import LocationForm from "../components/LocationForm";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const HomeOffine = () => {
  return (
    <View style={styles.homeOffine}>
      <Image
        style={[styles.mapChecking1, styles.mapChecking1Position]}
        resizeMode="cover"
        source={require("../assets/map-checking-1.png")}
      />
      <Image
        style={[styles.busIcon, styles.busIconLayout]}
        resizeMode="cover"
        source={require("../assets/bus.png")}
      />
      <Image
        style={[styles.busIcon1, styles.busIconLayout]}
        resizeMode="cover"
        source={require("../assets/bus.png")}
      />
      <Image
        style={[styles.busIcon2, styles.busIconLayout]}
        resizeMode="cover"
        source={require("../assets/bus.png")}
      />
      <Image
        style={[styles.greenBusIcon, styles.busIconLayout]}
        resizeMode="cover"
        source={require("../assets/green-bus.png")}
      />
      <Image
        style={[styles.greenBusIcon1, styles.busIconLayout]}
        resizeMode="cover"
        source={require("../assets/green-bus.png")}
      />
      <Image
        style={styles.locationIcon}
        resizeMode="cover"
        source={require("../assets/location.png")}
      />
      <LocationForm />
      <View style={[styles.statusBardark, styles.mapChecking1Position]}>
        <View style={[styles.statusBardark1, styles.statusPosition]}>
          <View style={[styles.statusBarlight, styles.statusPosition]}>
            <Image
              style={[styles.fill17Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/fill-17.png")}
            />
            <Image
              style={[styles.iconsnetworkstatusBar, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/iconsnetworkstatus-bar.png")}
            />
            <Image
              style={[styles.iconsbuttarystatusBar, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/iconsbuttarystatus-bar.png")}
            />
            <Text style={styles.text}>9:41</Text>
            <Image
              style={[styles.iconNetworkWirelessOffline, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/-icon-network-wireless-offline-symbolic.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={styles.locationIcon1}
        resizeMode="cover"
        source={require("../assets/location1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mapChecking1Position: {
    left: "50%",
    position: "absolute",
  },
  busIconLayout: {
    height: 42,
    width: 42,
    position: "absolute",
  },
  statusPosition: {
    left: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mapChecking1: {
    marginTop: -463,
    marginLeft: -214,
    width: 435,
    height: 942,
    top: "50%",
  },
  busIcon: {
    top: 599,
    left: 205,
  },
  busIcon1: {
    top: 362,
    left: 160,
  },
  busIcon2: {
    top: 638,
    left: 13,
  },
  greenBusIcon: {
    top: 144,
    left: 52,
  },
  greenBusIcon1: {
    top: 36,
    left: 277,
  },
  locationIcon: {
    top: 475,
    left: 55,
    width: 46,
    height: 46,
    position: "absolute",
  },
  fill17Icon: {
    top: "2.27%",
    bottom: "-2.27%",
    opacity: 0,
    left: "0%",
    right: "0%",
    height: "100%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  iconsnetworkstatusBar: {
    height: "26.42%",
    width: "4.53%",
    top: "46.02%",
    right: "17.07%",
    bottom: "27.56%",
    left: "78.4%",
  },
  iconsbuttarystatusBar: {
    height: "27.5%",
    width: "6.47%",
    top: "45%",
    right: "3.8%",
    bottom: "27.5%",
    left: "89.73%",
  },
  text: {
    marginTop: -5.91,
    width: "8%",
    left: "8.27%",
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    fontWeight: "500",
    fontFamily: FontFamily.sFProDisplay,
    color: Color.colorBlack,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  iconNetworkWirelessOffline: {
    height: "29.99%",
    width: "4.29%",
    top: "45.45%",
    right: "11.49%",
    bottom: "24.56%",
    left: "84.22%",
  },
  statusBarlight: {
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  statusBardark1: {
    bottom: "0%",
    top: "0%",
    left: "0%",
    right: "0%",
    height: "100%",
    position: "absolute",
  },
  statusBardark: {
    marginLeft: -213,
    top: -1,
    width: 414,
    height: 44,
  },
  locationIcon1: {
    top: 267,
    left: 427,
    width: 90,
    height: 90,
    position: "absolute",
  },
  homeOffine: {
    backgroundColor: Color.colorsWhite,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
  },
});

export default HomeOffine;
