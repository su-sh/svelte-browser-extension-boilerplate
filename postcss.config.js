const tailwindcss = require("tailwindcss");

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.svelte", "./src/**/*.html"],
  whitelistPatterns: [/svelte-/],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env")({ stage: 1 }),
    require("postcss-nested"), // or require('postcss-nesting')
    require("postcss-custom-properties"),
    require("autoprefixer"),
    tailwindcss("./tailwind.config.js"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
