fis.set('project.ignore', ['*.bat', '*.rar', 'node_modules/**', 'fis-conf.js', "package.json", "*.sh"]);
fis.set('project.fileType.text', 'es');

fis.set('statics', '/www/static'); //static目录
fis.set('url', '/static');

//FIS modjs模块化方案，您也可以选择amd/commonjs等
fis.hook('commonjs', {
    mod: 'amd',
    extList: ['.js', '.jsx', '.es', '.ts', '.tsx','vue'],
    paths: {
        "jquery": '/node_modules/jquery/dist/jquery.js',
        "vue": '/node_modules/vue/dist/vue.js',
        "xss": '/node_modules/xss/dist/xss.min.js',
        "process/browser": '/node_modules/process/browser.js',
        // "kindeditor": '/plugins/kindeditor/kindedito.js',//4.1.1
        // "layer": '/plugins/layer/layer.js',
    }
});
fis.unhook('components')
fis.hook("node_modules", {
  shutup:true,//是否提示node_modules找不到
});


/*************************目录规范*****************************/
fis.match("**/*", {
        release: '${statics}/$&',
        url:'${url}$&'
    })
    .match('/node_modules/**.js', {
        isMod: true,
        useSameNameRequire: true,
        wrap: true,
    })
    .match(/^\/components\/([^\/]+)\/(.*)\.(es|js)$/i, {
        parser: fis.plugin('babel-5.x', {
            sourceMaps: false, //启用调试
            // blacklist: ['regenerator'],
            stage: 3 //ES7不同阶段语法提案的转码规则（共有4个阶段）
        }),
        isMod: true,
        id: "$1",
        rExt: 'js'
    })
    .match(/^\/(site)\/(.*)\.(es|js)$/i, {
        parser: fis.plugin('babel-5.x', {
            sourceMaps: false, //启用调试
            // blacklist: ['regenerator'],
            stage: 3 //ES7不同阶段语法提案的转码规则（共有4个阶段）
        }),
        isMod: true,
        id: "$2",
        rExt: 'js'
    })
    .match(/^\/plugins\/(.*)\.(es|js)$/i, {//plugs不打包
      isMod: false,
    })
    .match("/plugins/kindeditor/kindeditor-all.js",{
        isMod: true,
        id:"kindeditor"
    })
    .match('/view/**.html', {
        useCache: false,
        release: '/$&'
    })
    .match('*.{js,jsx,ts,tsx,es}', {
        preprocessor: [
            fis.plugin('js-require-css'),
            fis.plugin('js-require-file', {
                useEmbedWhenSizeLessThan: 10 * 1024 // 小于10k用base64
            })
        ]
    })
    .match('**/*.less', { //编译less
        parser: fis.plugin('less'),
        rExt: '.css',
        // optimizer: fis.plugin('optimizer-clean-css')
    })
    .match('**/*.scss', { //编译less
        parser: fis.plugin('node-sass'),
        rExt: '.css',
        // optimizer: fis.plugin('optimizer-clean-css')
    })
    //less的mixin文件无需发布
    .match(/^(.*)mixin\.less$/i, {
        release: false
    })
    //前端模板,当做类js文件处理，可以识别__inline, __uri等资源定位标识
    .match("**/*.tmpl", {
        isJsLike: true,
        release: false
    }).match("**/*", {
        url:'${url}$&'
    })
    //页面模板不用编译缓存
    .match(/.*\.(html|jsp|tpl|vm|htm|asp|aspx|php)$/, {
        useCache: false
    });


fis.match("**/*.vue", {
        isMod: true,
        rExt: 'js',
        useSameNameRequire: true,
        parser: fis.plugin('vue-component', {
            cssScopeFlag: 'vuec'
        })
    })
    .match("**/*.vue:less", {
        rExt: 'css',
        parser: fis.plugin('less')
    })
    .match("**/*.vue:scss", {
        rExt: 'css',
        parser: fis.plugin('node-sass'),
    })
    .match("**/*.vue:js", {
        parser: [fis.plugin('babel-5.x', {
                sourceMaps: true, //启用调试
                // blacklist: ['regenerator'],
                stage: 3 //ES7不同阶段语法提案的转码规则（共有4个阶段）
            }),
            fis.plugin('translate-es3ify', null, 'append')
        ]
    });



//打包与css sprite基础配置
fis.match('::packager', {
    // npm install [-g] fis3-postpackager-loader
    postpackager: fis.plugin('loader', {
        resourceType: 'mod',
        obtainScript: true,
        // allInOne: {
        //     ignore: ["/widget/kindeditor-4.1.10/kindeditor.js", "/widget/kindeditor-4.1.10/lang/zh_CN.js", '/lib/ejs.js'],
        //     includeAsyncs: false //不包含异步依赖
        // },
        useInlineMap: true, // 资源映射表内嵌
    }),
    packager: fis.plugin('map', {
        useTrack: false,
        // 'pkg/base.js': [ '/modules/layer/*.js', '/modules/pizzalayer/*.js', '/modules/pizzatools/*.js'],
        // 'pkg/base-a.js': ['/widget/globle/*.js', '/modules/pizzaui/pizza.ui.js', '/site/common/common.js'],
        // 'pkg/base.css': ['/css/pizza.css', '/css/iconfont.css'],
        // 'pkg/base-a.css': ['/css/amui.css', '/css/iconfont.css']
    }),
    spriter: fis.plugin('csssprites', {
        layout: 'matrix',
        margin: '15'
    })
});
