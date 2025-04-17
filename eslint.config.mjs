import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      // ❌ Ignore unused vars
      "@typescript-eslint/no-unused-vars": "off",
      "no-unused-vars": "off",

      // ✅ (Optional) loosen other common rules
      "react-hooks/exhaustive-deps": "warn", // instead of error
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
