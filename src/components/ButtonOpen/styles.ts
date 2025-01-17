import styled from "styled-components/native";
import {TButtonOpenSize} from ".";

interface Props {
  sized?: TButtonOpenSize;
}

export const Container = styled.TouchableOpacity<Props>`
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  flex-direction: row;
  height: 48px;
`;

export const Pressed = styled.View<Props>`
  position: absolute;
  border-radius: 12px;
  background-color: #efefef;

  ${props => {
    const {sized} = props;
    const spacing = 16;

    return `  
      width: ${sized!.width + spacing}px;
      height: ${sized!.height - spacing}px;      
    `;
  }}
`;

export const Label = styled.Text`
  font-size: 14px;
  color: #211e1c;
  margin-left: 4px;
`;
