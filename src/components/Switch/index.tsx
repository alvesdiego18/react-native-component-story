import React, {useEffect, useRef} from "react";

import * as S from "./styles";
import {GestureResponderEvent, Insets, Animated} from "react-native";
import {Spacing} from "../Spacing";

export interface ISwitchProps {
  label?: string;
  selected?: boolean;
  onPress?(event: GestureResponderEvent): void;
}

export function Switch({
  label,
  selected = false,
  onPress,
}: Readonly<ISwitchProps>) {
  const [pressed, setPressed] = React.useState(false);

  const translateXRef = useRef(new Animated.Value(0)).current;
  const duration = 240;

  function _onPress(press: boolean): void {
    setPressed(press);
  }

  function getHitSlop(): Insets {
    if (label) {
      return {top: 12, bottom: 12};
    } else {
      return {top: 12, bottom: 12, left: 12, right: 12};
    }
  }

  useEffect(() => {
    const offset = 16;

    Animated.timing(translateXRef, {
      toValue: selected ? offset : 0,
      duration: duration,
      useNativeDriver: false,
    }).start();
  }, [selected]);

  return (
    <S.Container
      onPress={onPress}
      onPressIn={() => _onPress(true)}
      onPressOut={() => _onPress(false)}
      hitSlop={getHitSlop()}
    >
      <S.Circle accessible={false}>
        {pressed && <S.Ripple />}

        <S.Switch selected={selected}>
          <S.Dot
            style={{transform: [{translateX: translateXRef}]}}
            selected={selected}
          />
        </S.Switch>
      </S.Circle>

      {label && (
        <>
          <Spacing width={12} />
          <S.Label>{label}</S.Label>
        </>
      )}
    </S.Container>
  );
}
