import React from "react";

import {TouchableOpacityProps} from "react-native";

import {ButtonLabel} from "../Label";

interface Props extends TouchableOpacityProps {
  label: string;
  disabled?: boolean;
  secondary?: boolean;
  onBrand?: boolean;
  loading?: boolean;
  height?: number;
}

export function Content({
  label,
  disabled = false,
  onBrand = false,
}: Readonly<Props>): JSX.Element {
  return (
    <>
      <ButtonLabel label={label} disabled={disabled} onBrand={onBrand} />
    </>
  );
}
