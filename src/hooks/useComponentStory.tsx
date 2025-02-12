import React from "react";
import {ScrollView, View, Animated} from "react-native";

import {Spacing} from "../components/Spacing";
import {SuperDrawer} from "../components/SuperDrawer";
import {Divider} from "../components/Divider";
import {ButtonOpen} from "../components/ButtonOpen";
import {Input} from "../components/Input";

import {
  IStoryBoolProps,
  IProviderProps,
  IStoryContextProps,
  IStoryTextProps,
  IStoryTypesProps,
} from "../types/playground.interface";

import {getUniqueGroups} from "../utils/unique_groups";
import {getBottomSpace} from "../utils/screen_helper";

import {effect} from "./effects";

import {Stage} from "../components/Stage";

import {TypesList} from "../components/TypesList";
import {BoolList} from "../components/BoolList";
import {TextList} from "../components/TextList";
import {PressedList} from "../components/PressedList";
import {CodeView} from "../components/CodeView";

import {useComponentStoryTheme} from "./useComponentStoryTheme";

const ComponentStoryContext = React.createContext({} as IStoryContextProps);

export function ComponentStoryProvider({
  children,
  text,
  bool,
  types,
  paddingLeft = 0,
  stageScrollEnabled = false,
  componentName,
}: IProviderProps) {
  const {openButtonLabel} = useComponentStoryTheme();

  const inputRef = React.useRef(null);
  const animation = React.useRef(new Animated.Value(0)).current;

  const [open, setOpen] = React.useState(false);
  const [showCode, setShowCode] = React.useState(false);
  const [groupSelected, setGroupSelected] = React.useState<string | undefined>(
    undefined,
  );

  const [listButtonPressed, setListButtonPressed] = React.useState<string[]>(
    [],
  );

  const [keyboardHeight, setKeyboardHeight] = React.useState(0);

  const [focus, setFocus] = React.useState<string | undefined>(undefined);

  const [textState, setTextState] = React.useState<IStoryTextProps[]>(
    text ?? [],
  );
  const [boolState, setBoolState] = React.useState<IStoryBoolProps[]>(
    bool ?? [],
  );
  const [typesState, setTypesState] = React.useState<IStoryTypesProps[]>(
    types ?? [],
  );

  effect.useKeyboardSize({callback: v => setKeyboardHeight(v)});

  effect.useAnimationInputSelected({
    keyboardHeight,
    inputRef,
    animationRef: animation,
  });

  function getText(title: string): string {
    const textChoice = textState.filter(
      i => i.title.toLocaleLowerCase() === title.toLocaleLowerCase(),
    );
    return textChoice.length > 0 ? textChoice[0].value! : "";
  }

  function getBool(title: string): boolean {
    const boolChoice = boolState.filter(i => i.title === title);
    return boolChoice.length > 0 ? boolChoice[0].value : false;
  }

  function getType(title: string): string {
    const typeChice = typesState.filter(i => i.title === title);
    return typeChice.length > 0 ? typeChice[0].value! : "";
  }

  function getNumber(title: string): number | undefined {
    const textChoice = textState.filter(
      i => i.title.toLocaleLowerCase() === title.toLocaleLowerCase(),
    );

    const textSelected = textChoice.length > 0 ? textChoice[0].value : 0;
    return textSelected ? Number(textChoice[0].value) : undefined;
  }

  function onPress(title?: string, callback?: () => void) {
    if (open) {
      setListButtonPressed([
        ...listButtonPressed,
        `Button pressed ${title ? `: ${title}` : ""}`,
      ]);

      return;
    }

    if (callback) {
      callback();
    }
  }

  const filterInputFocus = textState.filter(f => f.title === focus);
  const filterTextState = textState.filter(f => f.group === groupSelected);
  const filterUniqueGroups = getUniqueGroups(textState);

  const onChangeText = React.useCallback(
    (value: string, t: IStoryTextProps) => {
      setTextState(prevTextState =>
        prevTextState.map(f => {
          if (f.title === t.title) {
            f.value = value;
          }
          return f;
        }),
      );
    },
    [],
  );

  function getCode(): string {
    if (!componentName) {
      return "";
    }

    const resultList: string[] = [];

    // adding types code
    resultList.push(
      typesState
        .filter(f => f.field !== undefined)
        .filter(f => f.value !== undefined)
        .map(m => `||${m.field}="${m.value}"`)
        .join("\n")
        .toString(),
    );

    // adding text without 'field group' defined
    resultList.push(
      textState
        .filter(f => f.field !== undefined)
        .filter(f => f.fieldGroup === undefined)
        .filter(f => f.value !== "")
        .map(m => `||${m.field}="${m.value}"`)
        .join("\n")
        .trim()
        .toString(),
    );

    // adding a text with a 'field group' defined
    let fieldGroupTemp: string | undefined = "";
    let fieldGroupInit = false;

    textState
      .filter(f => f.field !== undefined)
      .filter(f => f.fieldGroup !== undefined)
      .forEach(fe => {
        const fieldGroupText = `${fe.fieldGroup}={{`;

        if (fieldGroupTemp !== fe.fieldGroup && fieldGroupInit) {
          resultList.push("}}");
          fieldGroupInit = false;
        }

        if (!resultList.includes(fieldGroupText)) {
          resultList.push(fieldGroupText);
          fieldGroupInit = true;
        }

        if (resultList.includes(fieldGroupText)) {
          resultList.push(`${fe.field}="${fe.value}"`);
        }

        fieldGroupTemp = fe.fieldGroup;
      });

    if (fieldGroupInit) {
      resultList.push("}}");
    }

    // adding boolean code
    resultList.push(
      boolState
        .filter(f => f.field !== undefined)
        .filter(f => f.value !== false)
        .map(m => `||${m.field}`)
        .join("\n")
        .toString(),
    );

    // initi a component with name
    const codeBase = `<${componentName}\n${resultList
      .filter(f => f !== "")
      .join("\n")}\n/>`;

    return codeBase.split("||").join(" ");
  }

  const isEnabledButtonShowCode = !componentName;

  return (
    <ComponentStoryContext.Provider
      value={{
        getText,
        getBool,
        getType,
        onPress,
        getNumber,
        isOpen: open,
      }}
    >
      {children}

      <Spacing height={8} />
      <View style={{paddingLeft: paddingLeft}}>
        <ButtonOpen
          label={openButtonLabel ?? "playground"}
          onPress={() => setOpen(true)}
        />
      </View>

      <SuperDrawer
        opened={open}
        onClose={() => setOpen(false)}
        onCode={
          isEnabledButtonShowCode ? undefined : () => setShowCode(!showCode)
        }
      >
        {!showCode && (
          <Stage
            keyboardHeight={keyboardHeight}
            scrollEnabled={stageScrollEnabled}
          >
            {children}
          </Stage>
        )}

        {showCode && <CodeView code={getCode()} />}

        <View style={{paddingVertical: 1, paddingHorizontal: 24}}>
          <Divider />
        </View>

        {/* when Input select, init a animation to show this option */}
        {filterInputFocus.map((t, index) => {
          return (
            <Input
              key={index}
              inputRef={inputRef}
              title={t.title}
              value={t.value ?? ""}
              onFocus={() => setFocus(t.title)}
              onBlur={() => setFocus(undefined)}
              keyboardType={t.isNumber ? "number-pad" : undefined}
              onChangeText={value => onChangeText(value, t)}
              bottomAnimation={animation.interpolate({
                inputRange: [0, 1],
                outputRange: [-keyboardHeight, keyboardHeight],
              })}
              opacityAnimation={animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              })}
            />
          );
        })}

        <ScrollView
          style={{flex: 2}}
          contentContainerStyle={{paddingBottom: getBottomSpace()}}
          showsVerticalScrollIndicator={false}
        >
          <Spacing height={16} />

          {/* list of 'types' options */}
          <TypesList
            types={types}
            getType={getType}
            typesState={typesState}
            setTypesState={setTypesState}
          />

          {/* list of 'bools' options */}
          <BoolList boolState={boolState} setBoolState={setBoolState} />

          {/* list of 'texts' options */}
          <TextList
            textState={textState}
            setTextState={setTextState}
            filterUniqueGroups={filterUniqueGroups}
            groupSelected={groupSelected}
            setGroupSelected={setGroupSelected}
            filterTextState={filterTextState}
            setFocus={setFocus}
          />

          {/* list of 'pressed' options */}
          <PressedList listButtonPressed={listButtonPressed} />
        </ScrollView>
      </SuperDrawer>
    </ComponentStoryContext.Provider>
  );
}

export function useComponentStory() {
  return React.useContext(ComponentStoryContext);
}
