export interface IPlaygroundTextProps {
  title: string;
  value: string | undefined;
  group?: string;
  isNumber?: boolean;
  field?: string;
  fieldGroup?: string;
}

export interface IPlaygroundBoolProps {
  title: string;
  value: boolean;
  field?: string;
}

export interface IPlaygroundTypesProps {
  title: string;
  list: (string | undefined)[];
  value: string | undefined;
  field?: string;
}

export interface IPlaygroundContextProps {
  getText: (title: string) => string;
  getNumber: (title: string) => number | undefined;
  getBool: (title: string) => boolean;
  getType: (title: string) => string;
  onPress: (title?: string, callback?: () => void) => void;
  isOpen: boolean;
}

export interface IProviderProps {
  children: React.ReactNode;
  text?: IPlaygroundTextProps[];
  bool?: IPlaygroundBoolProps[];
  types?: IPlaygroundTypesProps[];
  paddingLeft?: number;
  stageScrollEnabled?: boolean;
  componentName?: string;
}
