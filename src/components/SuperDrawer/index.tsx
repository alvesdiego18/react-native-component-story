import React from "react";
import {
  KeyboardAvoidingViewProps,
  LayoutChangeEvent,
  useWindowDimensions,
} from "react-native";

import * as S from "./styles";
import {DrawerContainer} from "./components/DrawerContainer";

export interface ISuperDrawerDefaultIPlaygroundTextProps {
  closeTextAccessibility?: string;
}

export interface ISuperDrawerProps {
  opened: boolean;
  onClose: () => void;
  onCode?: () => void;
  children?: React.ReactNode;
  keyboardAvoidingViewIOSProps?: KeyboardAvoidingViewProps;
  testID?: string;
  defaultText?: ISuperDrawerDefaultIPlaygroundTextProps;
}

export function SuperDrawer({
  opened,
  onClose,
  onCode,
  children,
  keyboardAvoidingViewIOSProps,
  testID,
}: Readonly<ISuperDrawerProps>): JSX.Element {
  const {height} = useWindowDimensions();
  const MIN_HEIGHT = height * 0.92;
  const MAX_HEIGHT = height * 0.92;

  const [size, setSize] = React.useState(MIN_HEIGHT);

  function _getHeightDrawer(event: LayoutChangeEvent): void {
    const heightDrawer = event.nativeEvent.layout.height;
    setSize(heightDrawer > MIN_HEIGHT ? heightDrawer : MIN_HEIGHT);
  }

  return (
    <DrawerContainer
      testID={testID}
      open={opened}
      onClose={onClose}
      onCode={onCode}
      keyboardAvoidingViewIOSProps={keyboardAvoidingViewIOSProps}
      heightSize={size}
    >
      <S.Content
        testID="drawer.content"
        onLayout={_getHeightDrawer}
        style={{maxHeight: MAX_HEIGHT}}
      >
        {children}
      </S.Content>
    </DrawerContainer>
  );
}
