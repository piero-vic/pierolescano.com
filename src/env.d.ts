/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client-image" />
interface ImportMetaEnv {
  readonly PROD: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
