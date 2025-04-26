import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const PeoplesBusServicesTravelAp = () => {
  return (
    <LinearGradient
      style={styles.peoplesBusServicesTravelAp}
      locations={[0, 0.84]}
      colors={["#f00000", "#dc281e"]}
    >
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  groupIcon: {
    position: "absolute",
    height: "18.36%",
    width: "45.77%",
    top: "40.82%",
    right: "27.13%",
    bottom: "40.82%",
    left: "27.1%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  peoplesBusServicesTravelAp: {
    flex: 1,
    width: "100%",
    height: 926,
    backgroundColor: "transparent",
    overflow: "hidden",
  },
});

export default PeoplesBusServicesTravelAp;
