# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Tecnologias Utilizadas

- [Typescript](https://www.typescriptlang.org/): Um superset de JavaScript que adiciona tipagem estática ao código.
- [Axios](https://axios-http.com/): Uma biblioteca para fazer requisições HTTP.
- [React Router DOM](https://reactrouter.com/): Uma biblioteca para roteamento em aplicações React.
- [date-fns](https://date-fns.org/): Uma biblioteca para manipulação de datas em JavaScript.
- [Styled Components](https://styled-components.com/): Uma biblioteca para estilizar componentes React utilizando CSS no JavaScript.
- [i18next](https://www.i18next.com/): Uma biblioteca para internacionalização de aplicações.
- [ESLint](https://eslint.org/): Uma ferramenta de análise estática de código para identificar padrões problemáticos no código JavaScript.
- [Husky](https://github.com/typicode/husky): Um utilitário para adicionar ganchos (hooks) Git.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
