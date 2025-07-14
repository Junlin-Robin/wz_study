module.exports = {
  printWidth: 120,
  proseWrap: 'never',
  singleQuote: true,
  trailingComma: 'all',
  tabWidth: 4,
  singleQuote: true,
  trailingComma: "all",
  overrides: [
    {
      files: '*.md',
      options: {
        proseWrap: 'preserve',
      },
    },
  ],
};
