import React from "react";

import {
  IPlaygroundBoolProps,
  IPlaygroundContextProps,
  IPlaygroundTextProps,
  IPlaygroundTypesProps,
} from "./types/playground.interface";

import {usePlayground, PlaygroundProvider} from "./hooks/usePlayground";

interface Props {
  text?: IPlaygroundTextProps[];
  bool?: IPlaygroundBoolProps[];
  types?: IPlaygroundTypesProps[];
  renderItem: (pg: IPlaygroundContextProps) => JSX.Element;
  paddingLeft?: number;
  stageScrollEnabled?: boolean;
  componentName?: string;
}

interface IComponentProps {
  renderItem: (pg: IPlaygroundContextProps) => JSX.Element;
}

function Component({renderItem}: IComponentProps) {
  const pg = usePlayground();
  return <>{renderItem(pg)}</>;
}

export function Playground({
  text,
  bool,
  types,
  renderItem,
  paddingLeft,
  stageScrollEnabled,
  componentName,
}: Props) {
  return (
    <PlaygroundProvider
      text={text}
      bool={bool}
      types={types}
      paddingLeft={paddingLeft}
      stageScrollEnabled={stageScrollEnabled}
      componentName={componentName}
    >
      <Component renderItem={renderItem} />
    </PlaygroundProvider>
  );
}
