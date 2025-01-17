/* eslint-disable react-native/no-unused-styles */
import React from "react";

import {ScrollView, StyleSheet} from "react-native";

import {Spacing} from "../Spacing";

interface Props {
  children: React.ReactNode;
  keyboardHeight: number;
  scrollEnabled: boolean;
}

export function Stage({children, keyboardHeight, scrollEnabled}: Props) {
  const stylesSelected = styles(keyboardHeight);

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

const styles = (keyboardHeight: number) =>
  StyleSheet.create({
    scroll: {
      flex: 1,
    },
    scrollContainer: {
      justifyContent: "space-between",
      paddingBottom: keyboardHeight > 0 ? 100 : 0,
      paddingHorizontal: 24,
    },
  });
