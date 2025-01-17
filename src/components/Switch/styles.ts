import {Animated} from "react-native";
import styled from "styled-components/native";

interface Props {
  selected?: boolean;
}

export const Container = styled.TouchableOpacity.attrs(_ => ({
  activeOpacity: 1,
}))<Props>`
  ${props => {
    const {disabled} = props;

    return ` 
      opacity: ${disabled ? 0.32 : 1};      
    `;
  }};

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Ripple = styled.View<Props>`
  width: 56px;
  height: 40px;
  border-radius: 500px;

  position: absolute;
`;

export const Circle = styled(Animated.View)<Props>`
  height: 24px;
  width: 40px;

  align-items: center;
  justify-content: center;
`;

export const Switch = styled(Animated.View)<Props>`
  width: 40px;
  height: 24px;
  border-radius: 500px;
  justify-content: center;

  ${props => {
    const {selected} = props;

    const borderWidth = 1;
    const paddingHorizontal = 4 - borderWidth;

    return `
      background-color: ${selected ? "#d8d0cb" : "transparent"};
      padding: 0 ${paddingHorizontal}px;
      border-width: ${borderWidth}px;
      border-color: ${selected ? "transparent" : "#333333"};
    `;
  }};
`;

export const Dot = styled(Animated.View)<Props>`
  height: 16px;
  width: 16px;
  border-radius: 500px;
  background-color: #333333;
`;

export const Label = styled.Text<Props>`
  color: #211e1c;
  font-size: 16px;
`;
