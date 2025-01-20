import {IStoryTextProps} from "../types/playground.interface";

export function getUniqueGroups(arr: IStoryTextProps[]) {
  const uniqueGroups = new Set(
    arr.filter(f => f.group !== undefined).map(item => item.group),
  );
  return Array.from(uniqueGroups);
}
