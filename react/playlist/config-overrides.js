// 注入babel插件  babel导入导出语法，不是es6的
const{injectBabelPlugin} = require('react-app-rewired')

module.exports = function override(config, env){
    // 参数1自己配置项，参数2webpack配置项

    // antd的按需加载
    config = injectBabelPlugin(['import',{libraryName:'antd',librayDirectory:'es',style:'css'}],config);

    // 添加装饰器能力
    config = injectBabelPlugin(['@babel/plugin-proposal-decorators',{ "legacy":true }], config)
   

    return config;
}


