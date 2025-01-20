import React from "react";

import {
  IStoryBoolProps,
  IStoryContextProps,
  IStoryTextProps,
  IStoryTypesProps,
} from "./types/playground.interface";

import {
  useStoryComponent,
  StoryComponentProvider,
} from "./hooks/useStoryComponent";

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
  const pg = useStoryComponent();
  return <>{renderItem(pg)}</>;
}

export function StoryComponent({
  text,
  bool,
  types,
  renderItem,
  paddingLeft,
  stageScrollEnabled,
  componentName,
}: Props) {
  return (
    <StoryComponentProvider
      text={text}
      bool={bool}
      types={types}
      paddingLeft={paddingLeft}
      stageScrollEnabled={stageScrollEnabled}
      componentName={componentName}
    >
      <Component renderItem={renderItem} />
    </StoryComponentProvider>
  );
}
