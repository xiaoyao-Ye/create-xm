module.exports = {
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "{!(package)*.json,*.code-snippets,.!(browserslist)*rc}": ["prettier --write--parser json"],
  "*.vue": ["eslint --fix", "prettier --write", "stylelint --fix"],
  "*.{css,scss,less,styl,html}": ["stylelint --fix", "prettier --write"],
  "package.json": ["prettier --write"],
  "*.md": ["prettier --write"],
};
