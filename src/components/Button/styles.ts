import styled, {DefaultTheme} from "styled-components/native";

interface Props {
  disabled?: boolean;
  onBrand?: boolean;
  pressed?: boolean;
  blocked?: boolean;
}

interface FProps extends DefaultTheme, Props {}

export const Container = styled.TouchableOpacity.attrs(_ => ({
  activeOpacity: 1,
}))<Props>`
  ${props => {
    const {disabled, onBrand, pressed, blocked} = props;

    return `
      height: 48px;
      width: ${blocked ? "100%" : "auto"};     

      opacity: ${getOpacity({pressed})};
      border-radius: 500px;
      background-color: ${getBackgroudColor({
        disabled,
        onBrand,
      })};

      padding: 0 32px; 

      ${blocked ? "" : "align-self: center;"}
    `;
  }}

  min-width: 148px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function getOpacity({pressed}: FProps): number {
  if (pressed) {
    return 0.9;
  }

  return 1;
}

function getBackgroudColor({disabled, onBrand}: FProps): string {
  if (onBrand) {
    return "#333333";
  }

  if (disabled) {
    return "#CCCCCC";
  }

  return "#FFFFFF";
}
