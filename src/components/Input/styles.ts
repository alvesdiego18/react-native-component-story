import {StyleSheet} from "react-native";

export const styles = (borderRadius?: number) => {
  const borderRadiusChoice = borderRadius ?? 8;

  return StyleSheet.create({
    input: {
      backgroundColor: "#efefef",
      borderRadius: borderRadiusChoice > 16 ? 16 : borderRadiusChoice,
      color: "#333333",
      fontSize: 14,
      height: 64,
      margin: 0,
      paddingHorizontal: 12,
    },
    inputAnimation: {
      backgroundColor: "#fefefe",
      height: 92,
      justifyContent: "center",
      paddingHorizontal: 24,
      position: "absolute",
    },
    inputSelected: {
      paddingTop: 18,
    },
    inputView: {
      height: 64,
      position: "relative",
    },
    labelViewDefault: {
      left: 10,
      position: "absolute",
      top: "38%",
    },
    labelViewSelected: {
      left: 9,
      position: "absolute",
      top: "24%",
    },
  });
};
