import React from "react";

import * as S from "./styles";

interface Props {
  label: string;
  selected: boolean;
  onPress: (value: boolean) => void;
}

export function ChipSelect({label, selected, onPress}: Props) {
  return (
    <S.Container onPress={() => onPress(selected)} selected={selected}>
      <S.Label selected={selected}>{label}</S.Label>
    </S.Container>
  );
}
