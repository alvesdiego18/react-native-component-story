import {StyleSheet} from "react-native";

export const styles = (color?: string) =>
  StyleSheet.create({
    lg: {
      color: color,
      fontSize: 14,
      fontWeight: "500",
    },
    sm: {
      color: color,
      fontSize: 12,
      fontWeight: "400",
    },
  });
