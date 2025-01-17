/* eslint-disable react-native/no-unused-styles */
import React from "react";

//@ts-ignore
import {DimensionValue, ScrollView, StyleSheet} from "react-native";

import {Spacing} from "../Spacing";

interface Props {
  children: React.ReactNode;
  keyboardHeight: number;
  scrollEnabled: boolean;
  height?: DimensionValue;
}

export function Stage({
  children,
  keyboardHeight,
  scrollEnabled,
  height,
}: Props) {
  const stylesSelected = styles(keyboardHeight, height);

  return (
    <ScrollView
      style={stylesSelected.scroll}
      showsVerticalScrollIndicator={false}
      scrollEnabled={scrollEnabled}
      contentContainerStyle={stylesSelected.scrollContainer}
    >
      {children}

      <Spacing height={16} />
    </ScrollView>
  );
}

const styles = (keyboardHeight: number, height?: DimensionValue) =>
  StyleSheet.create({
    scroll: {
      height: height ?? "50%",
    },
    scrollContainer: {
      justifyContent: "space-between",
      paddingBottom: keyboardHeight > 0 ? 100 : 0,
      paddingHorizontal: 24,
    },
  });
