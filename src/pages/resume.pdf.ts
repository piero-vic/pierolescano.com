import type { APIRoute } from "astro";
import { join } from "node:path";
import { cwd } from "node:process";
import { NodeCompiler } from "@myriaddreamin/typst-ts-node-compiler";

const $typst = NodeCompiler.create();

export const GET: APIRoute = async () => {
  const resumePath = join(cwd(), "src/content/resume.typ");

  let responseBody: BodyInit | null = null;
  try {
    const resumeResult = $typst.pdf({ mainFilePath: resumePath });
    responseBody = new Uint8Array(resumeResult);
  } catch (error) {
    console.error(error);
    throw error;
  }

  return new Response(responseBody, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "inline; filename=resume.pdf",
    },
  });
};
