module.exports = {
  extends: ['@rocketseat/commitlint-config'],
  rules: {
    "subject-case": [2, "always", ["lower-case", "sentence-case", "camel-case", "kebab-case", "pascal-case"]],
    "type-enum": [2, "always", ["chore", "ci", "docs", "feat", "fix", "test", "refactor", "deps"]],
  }
};
