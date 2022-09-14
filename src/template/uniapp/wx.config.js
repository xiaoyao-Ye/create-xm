// For details, go to https://github.com/xiaoyao-Ye/wechat-ci
export default {
  appid: 'wxfcc00xxx',
  projectPath: './dist/build/mp-weixin',
  packageJsonPath: './package.json',
  privateKeyPath: './key/private.wxfcc00xxx.key',
  type: 'miniProgram',

  // 预览:
  previewOptions: {
    // 返回二维码文件的格式 "image" 或 "base64"， 默认值 "terminal" 供调试用
    qrcodeFormat: 'image',
    // 二维码文件保存路径, required when qrcodeFormat is "image"
    qrcodeOutputDest: './qrcode.jpg',
    // 预览页面路径
    // pagePath: '',
    // 预览页面路径启动参数
    // searchQuery: '',
    // 默认值 1011，具体含义见场景值列表
    // scene: '1011',
  },
  settings: {
    "urlCheck": false,
    "coverView": true,
    "es6": true,
    "postcss": true,
    "lazyloadPlaceholderEnable": false,
    "preloadBackgroundData": false,
    "minified": true,
    "autoAudits": false,
    "uglifyFileName": false,
    "uploadWithSourceMap": true,
    "enhance": true,
    "useMultiFrameRuntime": true,
    "showShadowRootInWxmlPanel": true,
    "packNpmManually": false,
    "packNpmRelationList": [],
    "minifyWXSS": true,
    "useStaticServer": true,
    "showES6CompileOption": false,
    "checkInvalidKey": true,
    "compileHotReLoad": true,
    "babelSetting": {
      "ignore": [],
      "disablePlugins": [],
      "outputPath": ""
    },
    "disableUseStrict": false,
    "useCompilerPlugins": false,
    "minifyWXML": true
  }
}
