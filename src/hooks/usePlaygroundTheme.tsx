import React, {useContext, createContext} from "react";
import {ThemeProvider} from "styled-components/native";

const StoryComponentContext = createContext({} as IContextProp);

interface IContextProp {
  buttonName?: string;
  borderRadius?: number;
}

interface Props extends IContextProp {
  children: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  textColorSelected?: string;
  borderColor?: string;
}

export function StoryComponentTheme({
  children,
  buttonName,
  backgroundColor,
  textColor,
  textColorSelected,
  borderColor,
  borderRadius,
}: Props) {
  return (
    <StoryComponentContext.Provider value={{buttonName, borderRadius}}>
      <ThemeProvider
        theme={{
          buttonName,
          backgroundColor,
          textColor,
          textColorSelected,
          borderColor,
          borderRadius,
        }}
      >
        {children}
      </ThemeProvider>
    </StoryComponentContext.Provider>
  );
}

export function useStoryComponentTheme() {
  return useContext(StoryComponentContext);
}
