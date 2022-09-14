#!/usr/bin/env node

import minimist from 'minimist'
import prompts from 'prompts'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { cyan, yellow, red, reset } from 'kolorist'
import {
  isEmpty,
  formatTargetDir,
  getProjectName,
  isValidPackageName,
  toValidPackageName,
  emptyDir,
  copy,
  pkgFromUserAgent
} from './utils/index.js'
console.log('process.env.npm_config_user_agent', process.env.npm_config_user_agent);
const argv = minimist(process.argv.slice(2), { string: ['_'] })
const cwd = process.cwd();
const FRAMEWORKS = [
  { name: 'env', color: cyan },
  { name: 'uniapp', color: yellow },
]
const TEMPLATES = FRAMEWORKS.map(m => m.name);


const init = async () => {
  const defaultTargetDir = 'xyy-project';
  let targetDir = formatTargetDir(argv._[0]);
  let templateName = argv.template || argv.t;

  let result = {};
  const rule = [
    {
      name: 'projectName',
      type: targetDir ? null : 'text',
      message: reset('project name:'),
      initial: defaultTargetDir,
      onState: (state) => {
        targetDir = formatTargetDir(state.value) || defaultTargetDir;
      }
    },
    {
      name: 'overwrite',
      type: () => !fs.existsSync(targetDir) || isEmpty(targetDir) ? null : 'confirm',
      message: (targetDir === '.' ? 'Current directory' : `Target directory "${targetDir}"`) + ' is not empty. Remove existing files and continue?',
    },
    {
      name: 'overwriteChecker',
      type: (_, { overwrite }) => {
        if (overwrite === false) { throw new Error(red('✖') + ' Operation cancelled') }
        return null
      },
    },
    {
      name: 'packageName',
      type: () => (isValidPackageName(getProjectName(targetDir)) ? null : 'text'),
      message: reset('Package name:'),
      initial: () => toValidPackageName(getProjectName(targetDir)),
      validate: (dir) => isValidPackageName(dir) || 'Invalid package.json name',
    },
    {
      name: 'framework',
      type: templateName && TEMPLATES.includes(templateName) ? null : 'select',
      message: typeof templateName === 'string' && !TEMPLATES.includes(templateName)
        ? reset(`"${templateName}" isn't a valid template. Please choose from below: `)
        : reset('Select a framework:'),
      initial: 0,
      choices: FRAMEWORKS.map(m => ({ title: m.color(m.name), value: m.name })),
    }
  ]
  const options = { onCancel: () => { throw new Error(red('✖') + ' Operation cancelled') } };

  try {
    result = await prompts(rule, options)
  } catch (error) {
    console.error(error.message);
    return;
  }

  const { framework, overwrite, packageName } = result;
  templateName = framework || templateName;
  const root = path.join(cwd, targetDir);

  if (overwrite) {
    emptyDir(root);
  } else if (!fs.existsSync(root)) {
    fs.mkdirSync(root, { recursive: true });
  }

  console.log(`\nInitializing project in ${cyan(root)} ...`);

  const templateDir = path.resolve(fileURLToPath(import.meta.url), '../', `template/${templateName}`)

  /**
 * 输出文件
 * @param {string} file 
 * @param {string} content 
 */
  const write = (file, content) => {
    const renameFiles = { _gitignore: '.gitignore' }
    const targetPath = renameFiles[file]
      ? path.join(root, renameFiles[file])
      : path.join(root, file)
    if (content) {
      fs.writeFileSync(targetPath, content)
    } else {
      copy(path.join(templateDir, file), targetPath)
    }
  }

  const files = fs.readdirSync(templateDir)
  for (const file of files.filter(f => f !== 'package.json')) {
    write(file)
  }

  const pkg = JSON.parse(fs.readFileSync(path.join(templateDir, 'package.json'), 'utf8'))
  pkg.name = packageName || getProjectName(targetDir);
  write('package.json', JSON.stringify(pkg, null, 2))

  const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent);
  const pkgManager = pkgInfo ? pkgInfo.name : 'npm';

  console.log(`\nDone. Now run:\n`);
  if (root !== cwd) console.log(`  cd ${path.relative(cwd, root)}`);
  switch (pkgManager) {
    case 'yarn':
      console.log('  yarn add');
      console.log('  yarn dev');
      break;
    default:
      console.log(`  ${pkgManager} install`);
      console.log(`  ${pkgManager} run dev`);
      break;
  }
}

init().catch(console.error);
