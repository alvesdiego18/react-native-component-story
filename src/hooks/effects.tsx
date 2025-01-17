/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect} from "react";
import {Animated, Keyboard, TextInput} from "react-native";

interface IEffectProps {
  callback: (event: any) => void;
}

interface IInputAnimation {
  keyboardHeight: number;
  inputRef: React.Ref<TextInput>;
  animationRef: Animated.Value;
}

function useKeyboardSize({callback}: IEffectProps) {
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      event => callback(event.endCoordinates.height),
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => callback(0),
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [callback]);
}

function useAnimationInputSelected({
  keyboardHeight,
  inputRef,
  animationRef,
}: IInputAnimation) {
  useEffect(() => {
    //@ts-ignore
    if (keyboardHeight > 0 && inputRef.current) {
      //@ts-ignore
      inputRef.current.focus();
      Animated.timing(animationRef, {
        toValue: 1,
        duration: 400,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(animationRef, {
        toValue: 0,
        duration: 10,
        useNativeDriver: false,
      }).start();
    }
  }, [animationRef, inputRef, keyboardHeight]);
}

const effect = {useKeyboardSize, useAnimationInputSelected};

export {effect};
