import React from "react";
import {StyleSheet, View} from "react-native";

import {Label} from "../Label";
import {Spacing} from "../Spacing";
import {Switch} from "../Switch";

import {splitCamelCase} from "../../utils/split_camelcase";
import {IStoryBoolProps} from "../../types/playground.interface";

interface Props {
  boolState: IStoryBoolProps[];
  setBoolState: (value: React.SetStateAction<IStoryBoolProps[]>) => void;
}

export function BoolList({boolState, setBoolState}: Props) {
  const onPress = React.useCallback(
    (b: IStoryBoolProps) => {
      const filter = boolState.map(f => {
        if (f.title === b.title) {
          f.value = !b.value;
        }

        return f;
      });

      setBoolState(filter);
    },
    [boolState, setBoolState],
  );

  return (
    <View style={styles.container}>
      <Label size="lg">Boolean</Label>
      <Spacing height={8} />

      {boolState.map((b, index) => (
        <View key={index}>
          <Spacing height={8} />
          <Switch
            label={splitCamelCase(b.title)}
            selected={b.value}
            onPress={() => onPress(b)}
          />
          <Spacing height={8} />
        </View>
      ))}

      <Spacing height={16} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    paddingHorizontal: 24,
    width: "100%",
  },
});
