import styled, {DefaultTheme} from "styled-components/native";

interface Props {
  isDisabled?: boolean;
  onBrand?: boolean;
}

interface FProps extends DefaultTheme, Props {}

export const Label = styled.Text<Props>`
  ${({isDisabled, onBrand}) => `

    color: ${getTextColor({isDisabled, onBrand})};
  `}
`;

function getTextColor({isDisabled, onBrand}: FProps) {
  if (isDisabled && !onBrand) {
    return "#333333";
  }

  if (onBrand) {
    return "#FFFFFF";
  }

  return "#333333";
}
