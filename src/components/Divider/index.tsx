import React from "react";

import * as S from "./styles";

export interface IDividerProps {
  testID?: string;
}

export function Divider({testID}: Readonly<IDividerProps>) {
  return <S.DividerView testID={testID} />;
}
