import path from 'node:path'
import fs from 'node:fs'

/**
 * 格式化目标文件夹路径
 * @param {string | undefined} targetDir
 */
export const formatTargetDir = (targetDir) => {
  return targetDir?.trim().replace(/\/+$/g, '');
}

/**
 * @param {string | undefined} targetDir
 */
export const getProjectName = (targetDir) => {
  return targetDir === '.' ? path.basename(path.resolve()) : targetDir;
}

/**
 * 判断目标路径是否为空 || 只存在.git文件
 * @param {string} path 
 */
export const isEmpty = (path) => {
  const files = fs.readdirSync(path);
  return files.length === 0 || (files.length === 1 && files[0] === '.git');
}

/**
 * 是否符合package的名称规则
 * @param {string} projectName
 */
export const isValidPackageName = (projectName) => {
  return /^(?:@[a-z0-9-*~][a-z0-9-*._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$/.test(projectName)
}

/**
 * 处理成符合package的名称规则
 * @param {string} projectName
 */
export const toValidPackageName = (projectName) => {
  return projectName
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/^[._]/, '')
    .replace(/[^a-z0-9-~]+/g, '-')
}

/**
 * 删除目标路径所有文件
 * @param {string} dir 
 */
export const emptyDir = (dir) => {
  if (!fs.existsSync(dir)) return;
  for (const file of fs.readdirSync(dir)) {
    if (file === '.git') continue;
    fs.rmSync(path.resolve(dir, file), { recursive: true, force: true })
  }
}


/**
 * copy文件夹
 * @param {string} srcDir
 * @param {string} destDir
 */
const copyDir = (srcDir, destDir) => {
  fs.mkdirSync(destDir, { recursive: true })
  for (const file of fs.readdirSync(srcDir)) {
    const srcFile = path.resolve(srcDir, file)
    const destFile = path.resolve(destDir, file)
    copy(srcFile, destFile)
  }
}

/**
 * copy文件
 * @param {string} src 当前文件路径
 * @param {string} dest 目标文件路径
 */
export const copy = (src, dest) => {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    copyDir(src, dest)
  } else {
    fs.copyFileSync(src, dest)
  }
}


/**
 * @param {string | undefined} userAgent process.env.npm_config_user_agent
 * @returns object | undefined
 */
export const pkgFromUserAgent = (userAgent) => {
  if (!userAgent) return undefined
  const pkgSpec = userAgent.split(' ')[0]
  const pkgSpecArr = pkgSpec.split('/')
  return {
    name: pkgSpecArr[0],
    version: pkgSpecArr[1]
  }
}