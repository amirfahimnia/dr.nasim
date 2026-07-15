// Next.js 16 + Turbopack handles CSS `@import` natively (via Lightning CSS),
// so we no longer need the postcss-import plugin. Returning an empty
// plugins object lets Next.js ignore this file and use its built-in CSS
// pipeline, which resolves `@import "./blocks/..."` and `@import "./..."`
// statements directly without a custom plugin.
const config = {
  plugins: {},
};

export default config;
