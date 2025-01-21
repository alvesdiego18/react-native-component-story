import React, {useContext, createContext} from "react";
import {ThemeProvider} from "styled-components/native";

const ComponentStoryContext = createContext({} as IContextProp);

interface IContextProp {
  openButtonLabel?: string;
  borderRadius?: number;
}

interface Props extends IContextProp {
  children: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  textColorSelected?: string;
  borderColor?: string;
}

export function ComponentStoryThemeProvider({
  children,
  openButtonLabel,
  backgroundColor,
  textColor,
  textColorSelected,
  borderColor,
  borderRadius,
}: Props) {
  return (
    <ComponentStoryContext.Provider value={{openButtonLabel, borderRadius}}>
      <ThemeProvider
        theme={{
          openButtonLabel,
          backgroundColor,
          textColor,
          textColorSelected,
          borderColor,
          borderRadius,
        }}
      >
        {children}
      </ThemeProvider>
    </ComponentStoryContext.Provider>
  );
}

export function useComponentStoryTheme() {
  return useContext(ComponentStoryContext);
}
