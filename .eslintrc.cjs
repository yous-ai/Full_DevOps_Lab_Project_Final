// .eslintrc.js (CommonJS, compatible ESLint v8)
module.exports = {
  root: true,
  env: {
    node: true,
    es2022: true,
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 2022, // ES2022 : await au niveau du module (src/app.js)
    sourceType: 'module',
  },
  rules: {
    // Ajoute ici tes règles personnalisées si besoin
  },
};