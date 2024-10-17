const companyPrettierConfig = require('@github/prettier-config');

module.exports = {
  ...companyPrettierConfig,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
};
