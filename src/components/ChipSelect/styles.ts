import styled from "styled-components/native";

interface Props {
  selected?: boolean;
}

export const Container = styled.TouchableOpacity.attrs(_ => ({
  activeOpacity: 1,
}))<Props>`
  height: 44px;
  width: auto;
  border-radius: 500px;

  padding: 0 16px;

  justify-content: center;
  align-items: center;

  ${props => {
    const {selected} = props;

    return `
      background-color: ${selected ? "#333333" : "#FFFFFF"};
      border-width: 1px;
      border-color: #333333;
    `;
  }}
`;

export const Label = styled.Text<Props>`
  ${props => {
    const {selected} = props;

    return `
      color: ${selected ? "#FFFFFF" : "#333333"};
    `;
  }}
`;
