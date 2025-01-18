import styled from "styled-components/native";

interface Props {
  selected?: boolean;
}

export const Container = styled.TouchableOpacity.attrs(_ => ({
  activeOpacity: 1,
}))<Props>`
  height: 44px;
  width: auto;
  padding: 0 16px;

  justify-content: center;
  align-items: center;

  ${props => {
    const {theme, selected} = props;

    const backgroundColor = theme.backgroundColor ?? "#333333";
    const borderColor = theme.borderColor ?? "#333333";
    const borderRadius = theme.borderRadius ?? 8;

    return `
      background-color: ${selected ? backgroundColor : "transparent"};
      border-width: 1px;
      border-radius: ${borderRadius}px;
      border-color: ${selected ? backgroundColor : borderColor};
    `;
  }}
`;

export const Label = styled.Text<Props>`
  ${props => {
    const {theme, selected} = props;

    const colorSelected = theme.textColorSelected ?? "#FFFFFF";
    const color = theme.textColor ?? "#333333";

    return `
      color: ${selected ? colorSelected : color};
    `;
  }}
`;
