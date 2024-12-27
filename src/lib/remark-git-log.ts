import { execSync } from "child_process";
import type { RemarkPlugin } from "@astrojs/markdown-remark";

export type Commit = {
  hash: string;
  message: string;
  date: string;
};

const getCommitsByFile = (filepath: string) => {
  try {
    return execSync(`git log --follow --pretty=format:'{"hash":"%H","message":"%s","date":"%cI"}' "${filepath}"`)
      .toString()
      .split("\n")
      .map(data => JSON.parse(data) as Commit);
  } catch (error) {
    return [];
  }
};

export const remarkGitLog: RemarkPlugin = () => {
  return async (_tree, file) => {
    const commits = getCommitsByFile(file.path);

    file.data.astro!.frontmatter!.commits = commits;
  };
};
