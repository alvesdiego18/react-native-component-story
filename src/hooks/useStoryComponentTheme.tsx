import React, {useContext, createContext} from "react";
import {ThemeProvider} from "styled-components/native";

const StoryComponentContext = createContext({} as IContextProp);

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

export function StoryComponentThemeProvider({
  children,
  openButtonLabel,
  backgroundColor,
  textColor,
  textColorSelected,
  borderColor,
  borderRadius,
}: Props) {
  return (
    <StoryComponentContext.Provider value={{openButtonLabel, borderRadius}}>
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
    </StoryComponentContext.Provider>
  );
}

export function useStoryComponentTheme() {
  return useContext(StoryComponentContext);
}
