import React from "react";

import {styles} from "./styles";
import {Text} from "react-native";

interface Props {
  children: React.ReactNode;
  size?: "sm" | "lg";
  color?: string;
}

export function Label({children, size = "lg", color}: Props) {
  const newStyle = styles(color);

  if (size === "sm") {
    return <Text style={newStyle.sm}>{children}</Text>;
  }

  return <Text style={newStyle.lg}>{children}</Text>;
}
