import React from "react";
import {
  Modal,
  Animated,
  Easing,
  PanResponder,
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  Platform,
  useWindowDimensions,
  Keyboard,
} from "react-native";

import * as S from "../../styles";

import {ButtonClose} from "../../../ButtonClose";
import {ButtonCode} from "../../../ButtonCode";

interface Props {
  open: boolean;
  onClose: () => void;
  onCode?: () => void;
  children?: React.ReactNode;
  heightSize: number;
  enableDrag?: boolean;
  keyboardAvoidingViewIOSProps?: KeyboardAvoidingViewProps;
  testID?: string;
  accessibilityTextWhenOpened?: string;
  minMaxHeight?: number;
}

export function DrawerContainer({
  open,
  onClose,
  onCode,
  heightSize,
  children,
  enableDrag = true,
  keyboardAvoidingViewIOSProps,
  testID,
  minMaxHeight,
}: Readonly<Props>): JSX.Element {
  const {height} = useWindowDimensions();
  const [isOpen, setIsOpen] = React.useState(open);
  const [keyboardHeight, setKeyboardHeight] = React.useState(0);

  const translateY = React.useRef(new Animated.Value(heightSize)).current;

  const duration = 600;
  const curve: [number, number, number, number] = [0.75, 0.25, 0, 1];
  const reverseCurve: [number, number, number, number] = [0.63, 0.85, 0, 1];

  React.useEffect(() => {
    if (open) {
      _open();
    } else if (!open && isOpen) {
      _close();
    }
  }, [open]);

  /* istanbul ignore next */
  React.useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      event => {
        let restScreenPercent = 100 - Math.round((heightSize / height) * 100);
        let restScreenInPx = 0;

        if (restScreenPercent >= 10) {
          restScreenPercent = restScreenPercent - restScreenPercent * 0.2;
          restScreenInPx = (height * restScreenPercent) / 100;
        }

        setKeyboardHeight(event.endCoordinates.height - restScreenInPx);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setKeyboardHeight(0),
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  /* istanbul ignore next */
  React.useEffect(() => {
    if (Platform.OS === "android") {
      Animated.timing(translateY, {
        toValue: keyboardHeight,
        duration: 320,
        easing: Easing.bezier(...curve),
        useNativeDriver: false,
      }).start();
    }
  }, [keyboardHeight]);

  function _open(): void {
    setIsOpen(true);
    Animated.timing(translateY, {
      toValue: 0,
      duration: duration,
      easing: Easing.bezier(...curve),
      useNativeDriver: false,
    }).start();
  }

  /* istanbul ignore next */
  function getVerticalOffsetIOS(): number {
    if (minMaxHeight && minMaxHeight <= 700) {
      return height / 4;
    }

    if (minMaxHeight) {
      return height / 2;
    }

    return 0;
  }

  /* istanbul ignore next */
  function _close(gestureClose = false): void {
    const newCurve = open || isOpen ? reverseCurve : curve;
    const newDuration = gestureClose ? undefined : duration;
    const newEasing = gestureClose ? undefined : Easing.bezier(...newCurve);

    Animated.timing(translateY, {
      toValue: heightSize,
      duration: newDuration,
      easing: newEasing,
      useNativeDriver: false,
    }).start(() => {
      setIsOpen(false);
      onClose();
    });
  }

  /* istanbul ignore next */
  const panResponder = enableDrag
    ? PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (_, state) => {
          if (state.dy < 0) {
            return;
          }
          translateY.setValue(state.dy);
        },
        onPanResponderRelease: (_, state) => {
          if (state.dy > 10) {
            _close(true);
          }
        },
      })
    : {panHandlers: {}};

  function getChildren() {
    const body = (
      <S.Body
        testID="drawer.body"
        style={{
          height: heightSize,
          transform: [{translateY}],
        }}
      >
        <S.HandleView {...panResponder.panHandlers}>
          {onCode && <ButtonCode onPress={onCode} />}
          <ButtonClose onPress={onClose} />
        </S.HandleView>

        {children}
      </S.Body>
    );

    /* istanbul ignore next */
    if (keyboardAvoidingViewIOSProps && Platform.OS === "ios") {
      return (
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={
            minMaxHeight ? -minMaxHeight : -getVerticalOffsetIOS()
          }
          {...keyboardAvoidingViewIOSProps}
        >
          {body}
        </KeyboardAvoidingView>
      );
    }

    return body;
  }

  /* istanbul ignore next */
  function _onClosePress() {
    _close();
  }

  return (
    <Modal
      testID={testID}
      visible={isOpen}
      transparent={true}
      animationType="none"
      onRequestClose={_onClosePress}
    >
      <S.Barrier>
        <S.BlurViewAnimation
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            opacity: translateY.interpolate({
              inputRange: [0, heightSize],
              outputRange: [1, 0],
            }),
          }}
          blurAmount={8}
        />

        <S.BarrierClose
          testID="drawer.barrier"
          onPress={_onClosePress}
          activeOpacity={1}
        />

        {getChildren()}
      </S.Barrier>
    </Modal>
  );
}
