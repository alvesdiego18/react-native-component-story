import styled from "styled-components/native";
import {Animated} from "react-native";
import {BlurView} from "@react-native-community/blur";

export const HandleView = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 8px;
  margin-right: 8px;
`;

export const Content = styled.View`
  flex: 1;
  padding-top: 8px;
`;

export const Barrier = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const BarrierClose = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
`;

export const Body = styled(Animated.View)`
  background-color: #fefcfb;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
`;

const BlurViewComponent = styled(BlurView)``;
export const BlurViewAnimation =
  Animated.createAnimatedComponent(BlurViewComponent);
