import React from "react";
import {ScrollView, View} from "react-native";
import {Label} from "../Label";
import {Spacing} from "../Spacing";
import {ChipSelect} from "../ChipSelect";
import {splitCamelCase} from "../../utils/split_camelcase";
import {IStoryTypesProps} from "../../types/playground.interface";

interface Props {
  types: IStoryTypesProps[] | undefined;
  getType(title: string): string;
  typesState: IStoryTypesProps[];
  setTypesState: (value: React.SetStateAction<IStoryTypesProps[]>) => void;
}

export function TypesList({types, getType, typesState, setTypesState}: Props) {
  const onPress = React.useCallback(
    (title: string, typeName: string | undefined) => {
      const filter = typesState.map(f => {
        if (f.title === title) {
          f.value = typeName;
        }

        return f;
      });

      setTypesState(filter);
    },
    [setTypesState, typesState],
  );

  return (
    <>
      {types && types.length > 0 && (
        <>
          {types?.map((type, index) => (
            <View key={index} style={{height: 90}}>
              <View style={{paddingLeft: 24}}>
                <Label size="lg">{splitCamelCase(type.title)}</Label>
              </View>
              <Spacing height={8} />

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{paddingHorizontal: 24}}
              >
                {type.list.map((typeName, tindex) => {
                  return (
                    <View key={tindex} style={{marginRight: 10}}>
                      <ChipSelect
                        label={
                          typeName === undefined
                            ? `Sem ${splitCamelCase(type.title)}`
                            : splitCamelCase(typeName)
                        }
                        selected={getType(type.title) === typeName}
                        onPress={() => onPress(type.title, typeName)}
                      />
                      <Spacing height={4} />
                    </View>
                  );
                })}
              </ScrollView>
              <Spacing height={16} />
            </View>
          ))}
        </>
      )}
    </>
  );
}
