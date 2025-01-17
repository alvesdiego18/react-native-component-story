import React from "react";
import {StyleSheet, View} from "react-native";

import {Label} from "../Label";
import {Spacing} from "../Spacing";
import {Switch} from "../Switch";

import {splitCamelCase} from "../../utils/split_camelcase";
import {IPlaygroundBoolProps} from "../../types/playground.interface";

// import {useDS} from "@gol-smiles/tangerina-react-native-core";

interface Props {
  boolState: IPlaygroundBoolProps[];
  setBoolState: (value: React.SetStateAction<IPlaygroundBoolProps[]>) => void;
}

export function BoolList({boolState, setBoolState}: Props) {
  // const {changeTheme, mode} = useDS();

  const onPress = React.useCallback(
    (b: IPlaygroundBoolProps) => {
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

      {/* <Spacing height={8} />
      <Switch
        label={"Dark mode"}
        selected={mode === "dark"}
        onPress={() => {
          changeTheme({mode: mode === "light" ? "dark" : "light"});
        }}
      /> */}
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
