import React, {forwardRef} from "react";
import {AccessibilityProps, TouchableOpacity} from "react-native";
import * as S from "./styles";

import {Content} from "./components/Content";

export interface IButtonPrimaryProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  onBrand?: boolean;
  loading?: boolean;
  blocked?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  accessibilityProps?: AccessibilityProps;
  testID?: string;
}

export type IButtonPrimaryGroupProps = Omit<IButtonPrimaryProps, "icon">;

export const Button = forwardRef(
  (
    {
      label,
      onPress,
      disabled = false,
      onBrand = false,
      loading = false,
      blocked = false,
      accessibilityLabel,
      accessibilityHint,
      accessibilityProps,
      testID,
    }: Readonly<IButtonPrimaryProps>,
    ref: React.Ref<TouchableOpacity>,
  ) => {
    const [pressed, setPressed] = React.useState(false);

    function _onPress(press: boolean): void {
      setPressed(press);
    }

    return (
      <S.Container
        ref={ref}
        accessibilityLabel={accessibilityLabel}
        accessibilityHint={accessibilityHint}
        accessibilityRole="button"
        accessibilityState={{disabled}}
        {...accessibilityProps}
        onPress={onPress}
        onPressIn={() => _onPress(true)}
        onPressOut={() => _onPress(false)}
        pressed={pressed}
        onBrand={onBrand}
        blocked={blocked}
        testID={testID}
        disabled={disabled || loading}
      >
        <Content
          label={label}
          disabled={disabled}
          onBrand={onBrand}
          loading={loading}
        />
      </S.Container>
    );
  },
);
