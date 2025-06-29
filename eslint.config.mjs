import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/.next/**", "**/build/**", "**/*.test.*","**/*.spec.*","**/__tests__/**","jest.config.ts"]
  },
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    rules: {
      // Estilo de código
      semi: ["error", "always"], // Sempre usar ponto e vírgula
      quotes: ["error", "double"], // Sempre usar aspas duplas
      "prefer-arrow-callback": ["error"], // Usar arrow functions quando possível
      "prefer-template": ["error"], // Usar template literals ao invés de concatenação
      "camelcase": ["error", { "properties": "always" }], //Impõe que nomes de variáveis e propriedades utilizem a notação camelCase,

      // Legibilidade / Clean Code
      "max-lines-per-function": ["warn", 150],
      complexity: ["warn", 15],
      "no-console": "warn",
      "no-nested-ternary": "warn",
      "prefer-const": "warn",
      "react/display-name": "warn",

      // Importação e organização
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", ["parent", "sibling", "index"]],
          "newlines-between": "always",
        },
      ],
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],

      // React e Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // TypeScript
      "@typescript-eslint/explicit-function-return-type": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

      // Acessibilidade
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/no-static-element-interactions": "warn",
      "jsx-a11y/aria-role": "warn",
      "jsx-a11y/no-autofocus": "warn",
    },
    plugins: [
      "react",
      "react-hooks",
      "@typescript-eslint",
      "jsx-a11y",
      "import",
      "unused-imports",
    ],
  }),
];
export default eslintConfig;