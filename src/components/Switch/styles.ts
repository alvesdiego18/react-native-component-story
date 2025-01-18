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
  position: absolute;

  width: 56px;
  height: 40px;

  ${props => {
    const {theme} = props;

    const borderRadius = borderRadiusCalc(theme.borderRadius ?? 8);

    return `      
      border-radius: ${borderRadius}px;
    `;
  }}
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

  justify-content: center;

  ${props => {
    const {theme, selected} = props;

    const borderWidth = 1;
    const paddingHorizontal = 4 - borderWidth;

    const borderColor = theme.borderColor ?? "#333333";
    const borderRadius = borderRadiusCalc(theme.borderRadius ?? 8);

    return `
      background-color: ${selected ? "#d8d0cb" : "transparent"};
      padding: 0 ${paddingHorizontal}px;
      border-width: ${borderWidth}px;
      border-radius: ${borderRadius}px;
      border-color: ${selected ? "transparent" : borderColor};
    `;
  }};
`;

export const Dot = styled(Animated.View)<Props>`
  height: 16px;
  width: 16px;

  ${props => {
    const {theme} = props;

    const backgroundColor = theme.backgroundColor ?? "#333333";
    const borderRadius = borderRadiusCalc(theme.borderRadius ?? 8);

    return `
      background-color: ${backgroundColor};
      border-radius: ${borderRadius}px;
    `;
  }}
`;

export const Label = styled.Text<Props>`
  font-size: 16px;

  ${props => {
    const {theme} = props;

    const textColor = theme.textColor ?? "#211e1c";

    return `
      color: ${textColor};
    `;
  }}
`;

function borderRadiusCalc(borderRadius: number) {
  if (borderRadius > 0) {
    borderRadius = borderRadius / 2;
  } else {
    borderRadius = 0;
  }

  return borderRadius;
}
