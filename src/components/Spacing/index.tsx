import React from "react";

import {Text, View} from "react-native";
import {ISpacingSizeProps} from "./types";

export function Spacing({
  height,
  width,
  color,
  testID,
}: Readonly<ISpacingSizeProps>) {
  return (
    <View
      testID={testID}
      style={{
        height: height ? height : 0,
        width: width ? width : 0,
        backgroundColor: color ?? "transparent",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {height && width && color && (
        <Text style={{fontSize: 10, color: "#333"}}>{height}</Text>
      )}
    </View>
  );
}
