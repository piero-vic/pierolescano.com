import type { RemarkPlugin } from "@astrojs/markdown-remark";
import { findAndReplace } from "mdast-util-find-and-replace";

// (?:^| )                    -> non-capturing group, tag should start be separated by a space or be the start of the line
// #(...)                     -> capturing group, tag itself must start with #
// (?:[-_\p{L}\d\p{Z}])+      -> non-capturing group, non-empty string of (Unicode-aware) alpha-numeric characters and symbols, hyphens and/or underscores
// (?:\/[-_\p{L}\d\p{Z}]+)*)  -> non-capturing group, matches an arbitrary number of tag strings separated by "/"
const tagRegex = new RegExp(/(?:^| )#((?:[-_\p{L}\p{Emoji}\p{M}\d])+(?:\/[-_\p{L}\p{Emoji}\p{M}\d]+)*)/gu);

export const remarkInlineTags: RemarkPlugin = () => {
  return function(tree) {
    findAndReplace(tree, [
      tagRegex,
      (_value: string, tag: string) => {
        // Check if the tag only includes numbers and slashes
        if (/^[\/\d]+$/.test(tag)) {
          return false;
        }

        return {
          type: "html",
          value: ` <span class="inline-tag">#${tag}</span>`,
        };
      },
    ]);
  };
};
