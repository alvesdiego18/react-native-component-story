import React, {Ref} from "react";
import {
  Animated,
  KeyboardTypeOptions,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";

import {splitCamelCase} from "../../utils/split_camelcase";

import {styles as inputStyles} from "./styles";
import {Label} from "../Label";
import {useComponentStoryTheme} from "../../hooks/useComponentStoryTheme";

interface Props {
  title: string;
  onFocus?: () => void;
  onBlur?: () => void;
  onChangeText: (text: string) => void;
  value: string;
  inputRef?: Ref<TextInput>;
  bottomAnimation?: Animated.AnimatedInterpolation<number | string>;
  opacityAnimation?: Animated.AnimatedInterpolation<number | string>;
  keyboardType?: KeyboardTypeOptions | undefined;
}

export function Input({
  title,
  onFocus,
  onBlur,
  onChangeText,
  value,
  inputRef,
  bottomAnimation,
  opacityAnimation,
  keyboardType,
}: Props) {
  const {borderRadius} = useComponentStoryTheme();
  const {width} = useWindowDimensions();
  const [isFocused, setIsFocused] = React.useState(false);

  const styles = inputStyles(borderRadius);

  const isFilled = value && value.length > 0;

  function _onFocus() {
    setIsFocused(true);
    if (onFocus) {
      onFocus();
    }
  }

  function _onBlur() {
    setIsFocused(false);
    if (onBlur) {
      onBlur();
    }
  }

  function inputComponent() {
    return (
      <View style={styles.inputView}>
        <TextInput
          key={title}
          ref={inputRef}
          value={value}
          autoComplete="off"
          selectTextOnFocus
          onFocus={_onFocus}
          onBlur={_onBlur}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          style={[styles.input, isFilled ? styles.inputSelected : {}]}
        />

        <View
          style={[
            isFilled ? styles.labelViewSelected : styles.labelViewDefault,
            isFocused ? {left: 12} : {},
          ]}
        >
          <Label
            size={isFilled ? "sm" : "lg"}
            color={isFilled ? "#666666" : "#333333"}
          >
            {splitCamelCase(title)}
          </Label>
        </View>
      </View>
    );
  }

  if (bottomAnimation && opacityAnimation) {
    return (
      <Animated.View
        style={[
          styles.inputAnimation,
          {
            width: width,
            bottom: bottomAnimation,
            opacity: opacityAnimation,
            zIndex: 10,
          },
        ]}
      >
        {inputComponent()}
      </Animated.View>
    );
  }

  return <>{inputComponent()}</>;
}
