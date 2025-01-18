import "styled-components";

declare module "styled-components/native" {
  export interface DefaultTheme {
    backgroundColor?: string;
    textColor?: string;
    textColorSelected?: string;
    borderColor?: string;
    borderRadius?: number;
  }
}
