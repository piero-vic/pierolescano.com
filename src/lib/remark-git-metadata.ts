import type { RemarkPlugin } from "@astrojs/markdown-remark";
import { z } from "astro/zod";
import { execSync } from "node:child_process";

const resultSchema = z.object({
  hash: z.string(),
  timestamp: z.string(),
});

export const remarkGitMetadata: RemarkPlugin = () => {
  return (_tree, { data, history }) => {
    const filepath = history[0];

    const result = execSync(`git log --follow --pretty=format:'{"hash":"%H","timestamp":"%cI"}' "${filepath}"`)
      .toString()
      .split("\n")
      .map(data => resultSchema.parse(JSON.parse(data)));

    if (result.length === 0) {
      return;
    }

    data.astro!.frontmatter!.createdAt = result[result.length - 1].timestamp;
    data.astro!.frontmatter!.createdHash = result[result.length - 1].hash;

    if (result.length > 1) {
      data.astro!.frontmatter!.updatedAt = result[0].timestamp;
      data.astro!.frontmatter!.updatedHash = result[0].hash;
    }
  };
};
