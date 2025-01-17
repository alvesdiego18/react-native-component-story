//@ts-ignore
import fs from "fs";

//@ts-ignore
import path from "path";

function loadJSON(filePath: string): object | null {
  try {
    const rawData = fs.readFileSync(filePath, "utf-8");
    const jsonObject = JSON.parse(rawData);
    return jsonObject;
  } catch (error) {
    return null;
  }
}

export function getThemes() {
  const fileName = "playground.json";

  //@ts-ignore
  const filePath = path.join(__dirname, fileName);
  const jsonLoad = loadJSON(filePath);

  if (fs.existsSync(filePath)) {
    return jsonLoad;
  }

  return {};
}
