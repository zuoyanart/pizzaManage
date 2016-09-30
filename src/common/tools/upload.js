'use strict';

import fs from 'fs';
import objectid from 'objectid';
import gm from "gm";
/**
 * 上传相关操作
 */
export default class {
  /**
   * 本地上传方法
   * @method local
   * @param  {[type]} file   上传的file对象
   *file: { fieldName: 'imgFile',
     originalFilename: '152917.62810508_900.jpg',
     path: '/data/host/thinkjs/runtime/upload/XQpGvfJrQoXjYQ_WfoST_vCP.jpg',
     headers:
      { 'content-disposition': 'form-data; name="imgFile"; filename="152917.62810508_900.jpg"',
        'content-type': 'image/jpeg' },
        size: 101700 }
      }
   * @return {[type]}           [description]
   */
   static async localImg(file, options) {
     let fileConfig = {//允许
       exten: ';jpg;jpeg;png;bmp;',//扩展名
       maxSize: 5242880,//文件最大大小，单位B
       static: think.RESOURCE_PATH,//图片保存目录
       toPath: '/upload/' + think.datetime(new Date, "YYYY/MM/DD")//生成的文件路径：/upload/2016/02/01
     };

     let finalFileName = '';//最终的文件名称
     let fileExt = file.path.split('.')[1];
     if(fileConfig.exten.indexOf(';' + fileExt+';') == -1 || file.headers.size > fileConfig.maxSize) {//判断限制条件
       return finalFileName;
     }

     //处理后缀和文件名
     finalFileName = '/' + objectid() + '.' + fileExt;
     think.mkdir(fileConfig.static + fileConfig.toPath);

     fs.renameSync(file.path, fileConfig.static + fileConfig.toPath + finalFileName);
     if(think.isFile(fileConfig.static + fileConfig.toPath + finalFileName)) {//移动成功
       if(options){//生成缩略图
          // gm.
       }
       return fileConfig.toPath + finalFileName;
     }
     return "";
     //读取文件
    //  let fileData = await readFile(file.path);
    //  let success = await writeFile(fileConfig.static + fileConfig.toPath + finalFileName, fileData);
   }
   /**
    * 上传到七牛
    * @method qiniuImg
    * @param  {[type]} file [description]
    * @return {[type]}      [description]
    */
   static async qiniuImg(file) {
      think.npm("qiniu");//动态加载qiniu模块

   }
}
