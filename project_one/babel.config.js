module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  // 实现vant按需自动导入
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true
      },
      'vant'
    ]
  ]
}
