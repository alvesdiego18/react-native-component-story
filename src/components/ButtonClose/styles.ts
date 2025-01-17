import styled from "styled-components/native";

export const Container = styled.TouchableOpacity.attrs(_ => ({
  activeOpacity: 1,
}))`
  width: 48px;
  height: 48px;
  border-radius: 24px;

  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image`
  width: 24px;
  height: 24px;
`;
