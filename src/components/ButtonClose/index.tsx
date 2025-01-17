import React from "react";

import * as S from "./styles";

import {assets} from "../../assets";

interface Props {
  onPress: () => void;
}

export function ButtonClose({onPress}: Props) {
  return (
    <S.Container onPress={onPress}>
      <S.Image source={assets.close} />
    </S.Container>
  );
}
