export interface IStoryTextProps {
  title: string;
  value: string | undefined;
  group?: string;
  isNumber?: boolean;
  field?: string;
  fieldGroup?: string;
}

export interface IStoryBoolProps {
  title: string;
  value: boolean;
  field?: string;
}

export interface IStoryTypesProps {
  title: string;
  list: (string | undefined)[];
  value: string | undefined;
  field?: string;
}

export interface IStoryContextProps {
  getText: (title: string) => string;
  getNumber: (title: string) => number | undefined;
  getBool: (title: string) => boolean;
  getType: (title: string) => string;
  onPress: (title?: string, callback?: () => void) => void;
  isOpen: boolean;
}

export interface IProviderProps {
  children: React.ReactNode;
  text?: IStoryTextProps[];
  bool?: IStoryBoolProps[];
  types?: IStoryTypesProps[];
  paddingLeft?: number;
  stageScrollEnabled?: boolean;
  componentName?: string;
}
