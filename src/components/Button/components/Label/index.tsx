import React from "react";

import * as S from "./styles";

interface Props {
  label: string;
  disabled?: boolean;
  onBrand?: boolean;
}

export function ButtonLabel({
  label,
  disabled = false,
  onBrand = false,
}: Readonly<Props>): JSX.Element {
  return (
    <S.Label isDisabled={disabled} onBrand={onBrand}>
      {label}
    </S.Label>
  );
}
