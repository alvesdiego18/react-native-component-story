import {IPlaygroundTextProps} from "../types/playground.interface";

export function getUniqueGroups(arr: IPlaygroundTextProps[]) {
  const uniqueGroups = new Set(
    arr.filter(f => f.group !== undefined).map(item => item.group),
  );
  return Array.from(uniqueGroups);
}
