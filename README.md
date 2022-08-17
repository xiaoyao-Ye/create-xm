# create-xm

custom cli

## initial Project

With NPM:

```bash
npm create xm@latest
```

With Yarn:

```bash
yarn create xm
```

With PNPM:

```bash
pnpm create xm
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a env project, run:

```bash
# npm 6.x
npm create xm@latest my-app --template env

# npm 7+, extra double-dash is needed:
npm create xm@latest my-app -- --template env

# yarn
yarn create xm my-app --template env

# pnpm
pnpm create xm my-app --template env
```

Currently supported template presets include:

- `env`

You can use `.` for the project name to scaffold in the current directory.

## Community Templates

create-vite is a tool to quickly start a project from a basic template for popular frameworks. Check out Awesome Vite for [community maintained templates](https://github.com/vitejs/awesome-vite#templates) that include other tools or target different frameworks. You can use a tool like [degit](https://github.com/Rich-Harris/degit) to scaffold your project with one of the templates.

```bash
npx degit user/project my-project
cd my-project

npm install
npm run dev
```

If the project uses `main` as the default branch, suffix the project repo with `#main`

```bash
npx degit user/project#main my-project
```

## license

ISC
