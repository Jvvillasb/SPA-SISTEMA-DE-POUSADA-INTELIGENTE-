/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USERNAME_BASIC_AUTH: string,
  readonly VITE_PASSWORD_BASIC_AUTH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
