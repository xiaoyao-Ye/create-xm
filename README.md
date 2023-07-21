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

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a vue project, run:

```bash
# npm 6.x
npm create xm@latest my-app --template vue 

# npm 7+, extra double-dash is needed:
npm create xm@latest my-app -- --template vue 

# yarn
yarn create xm my-app --template vue 

# pnpm
pnpm create xm my-app --template vue 
```

Currently supported template presets include:

- [vitesee](https://github.com/antfu/vitesse)
- [Vue-admin](https://github.com/xiaoyao-Ye/Vue-admin/tree/master)
- [React-Admin](https://github.com/xiaoyao-Ye/React-Admin/tree/master)
- [nest-admin](https://github.com/buqiyuan/nest-admin)
- [uniapp](https://github.com/xiaoyao-Ye/template/tree/main/uniapp)
- [npm](https://github.com/xiaoyao-Ye/template/tree/main/npm)
- [basic](https://github.com/xiaoyao-Ye/frontend-basic)

You can use `.` for the project name to scaffold in the current directory.

## license

MIT
