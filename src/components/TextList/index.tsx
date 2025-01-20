/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";

import {Spacing} from "../Spacing";
import {ChipSelect} from "../ChipSelect";
import {Input} from "../Input";
import {Label} from "../Label";

import {splitCamelCase} from "../../utils/split_camelcase";
import {IStoryTextProps} from "../../types/playground.interface";

interface Props {
  textState: IStoryTextProps[];
  setTextState: (value: React.SetStateAction<IStoryTextProps[]>) => void;
  filterUniqueGroups: any[];
  groupSelected: string | undefined;
  setGroupSelected: (value: React.SetStateAction<string | undefined>) => void;
  filterTextState: IStoryTextProps[];
  setFocus: (value: React.SetStateAction<string | undefined>) => void;
}

export function TextList({
  textState,
  setTextState,
  groupSelected,
  setGroupSelected,
  filterUniqueGroups,
  filterTextState,
  setFocus,
}: Props) {
  const onChangeText = React.useCallback(
    (value: string, t: IStoryTextProps) => {
      const filter = textState.map(f => {
        if (f.title === t.title) {
          f.value = value;
        }

        return f;
      });

      setTextState(filter);
    },
    [setTextState, textState],
  );

  return (
    <>
      {textState && textState.length > 0 && (
        <>
          <View style={styles.labelView}>
            <Label size="lg">Inputs</Label>
          </View>
          <Spacing height={8} />

          {filterUniqueGroups.length > 0 && (
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.scrollContainer}
            >
              <View style={styles.uniqueView}>
                <ChipSelect
                  label={splitCamelCase("Outros")}
                  selected={groupSelected === undefined}
                  onPress={() => setGroupSelected(undefined)}
                />
                <Spacing height={4} />
              </View>

              {filterUniqueGroups.map((group, tindex) => {
                return (
                  <View key={tindex} style={styles.uniqueView}>
                    <ChipSelect
                      label={splitCamelCase(group!)}
                      selected={group === groupSelected}
                      onPress={() => setGroupSelected(group)}
                    />
                    <Spacing height={4} />
                  </View>
                );
              })}
            </ScrollView>
          )}

          <Spacing height={8} />

          {filterTextState.map((t, index) => {
            return (
              <View key={index} style={styles.filterView}>
                <Input
                  key={t.title}
                  title={splitCamelCase(t.title)}
                  value={t.value ?? ""}
                  onFocus={() => setFocus(t.title)}
                  onChangeText={value => onChangeText(value, t)}
                />
                <Spacing height={8} />
              </View>
            );
          })}
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  filterView: {
    paddingHorizontal: 24,
    width: "100%",
  },
  labelView: {
    paddingLeft: 24,
  },
  scrollContainer: {
    paddingHorizontal: 24,
  },
  uniqueView: {
    marginRight: 10,
  },
});
