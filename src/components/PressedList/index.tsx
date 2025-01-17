import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";

import {Label} from "../Label";

interface Props {
  listButtonPressed: string[];
}

export function PressedList({listButtonPressed}: Props) {
  return (
    <>
      {listButtonPressed.length > 0 && (
        <>
          <View style={styles.pressed}>
            <Label size="lg">Pressed</Label>
          </View>

          <ScrollView style={styles.scroll}>
            {listButtonPressed
              .slice()
              .reverse()
              .map((buttonPressedText, index) => (
                <Label size="sm" key={index}>
                  {buttonPressedText}
                </Label>
              ))}
          </ScrollView>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  pressed: {
    paddingBottom: 8,
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  scroll: {
    height: 100,
    paddingHorizontal: 24,
    width: "100%",
  },
});
