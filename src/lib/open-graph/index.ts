import { readFile } from "node:fs/promises";
import satori from "satori";
import sharp from "sharp";
import Template from "./template";

export const generateOgImage = async (text: string = "Default Title", date: Date = new Date()): Promise<Buffer> => {
  const svg = await satori(
    Template({
      title: text,
      date: date,
    }),
    {
      width: 600,
      height: 315,
      embedFont: true,
      fonts: [
        {
          name: "JetBrainsMono",
          data: await readFile("./node_modules/@fontsource/jetbrains-mono/files/jetbrains-mono-latin-600-normal.woff"),
          weight: 600,
          style: "normal",
        },
      ],
    },
  );

  const sharpSvg = Buffer.from(svg);

  const buffer = await sharp(sharpSvg).toBuffer();

  return buffer;
};
