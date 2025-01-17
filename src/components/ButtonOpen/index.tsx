import React from "react";
import {AccessibilityProps, LayoutChangeEvent} from "react-native";

import * as S from "./styles";

export interface IButtonOpenProps {
  label: string;
  onPress: () => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityProps?: AccessibilityProps;
  testID?: string;
}

export interface TButtonOpenSize {
  width: number;
  height: number;
}

export function ButtonOpen({
  label,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  accessibilityProps,
  testID,
}: Readonly<IButtonOpenProps>): JSX.Element {
  const [size, setSize] = React.useState<TButtonOpenSize>({
    width: 0,
    height: 0,
  });

  const [pressed, setPressed] = React.useState<boolean>(false);

  function _onPress(press: boolean): void {
    setPressed(press);
  }

  function _onLayout(event: LayoutChangeEvent): void {
    const {width, height} = event.nativeEvent.layout;
    setSize({width, height});
  }

  return (
    <S.Container
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityRole="link"
      accessible={true}
      {...accessibilityProps}
      testID={testID}
      onPress={onPress}
      activeOpacity={1}
      onPressIn={() => _onPress(true)}
      onPressOut={() => _onPress(false)}
      onLayout={_onLayout}
    >
      {pressed && <S.Pressed testID="link-icon.pressed" sized={size} />}

      <S.Label>{label}</S.Label>
    </S.Container>
  );
}
