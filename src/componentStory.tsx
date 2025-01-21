import React from "react";

import {
  IStoryBoolProps,
  IStoryContextProps,
  IStoryTextProps,
  IStoryTypesProps,
} from "./types/playground.interface";

import {
  useComponentStory,
  ComponentStoryProvider,
} from "./hooks/useComponentStory";

interface Props {
  text?: IStoryTextProps[];
  bool?: IStoryBoolProps[];
  types?: IStoryTypesProps[];
  renderItem: (pg: IStoryContextProps) => JSX.Element;
  paddingLeft?: number;
  stageScrollEnabled?: boolean;
  componentName?: string;
}

interface IComponentProps {
  renderItem: (pg: IStoryContextProps) => JSX.Element;
}

function Component({renderItem}: IComponentProps) {
  const pg = useComponentStory();
  return <>{renderItem(pg)}</>;
}

export function ComponentStory({
  text,
  bool,
  types,
  renderItem,
  paddingLeft,
  stageScrollEnabled,
  componentName,
}: Props) {
  return (
    <ComponentStoryProvider
      text={text}
      bool={bool}
      types={types}
      paddingLeft={paddingLeft}
      stageScrollEnabled={stageScrollEnabled}
      componentName={componentName}
    >
      <Component renderItem={renderItem} />
    </ComponentStoryProvider>
  );
}
