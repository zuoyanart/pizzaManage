/**
 * 工具类单元测试
 */
import tools from '../../../common/tools/tools.js';
var expect = require("chai").expect;

describe("xss", function() {
   it("纯文本", function() {
      expect(tools.xss("asdasd")).to.be.equal("asdasd");
   });
   it('超链接脚本过滤', function() {
      expect(tools.xss('asdasd<a href="javascript:alert(0);">asd</a>')).to.be.equal("asdasd<a href>asd</a>");
   });
});

 describe("readFile", function() {
   it("文件存在", async function() {
    var t = await tools.readFile("/data/host/thinkjs/app/test/readfile.test");
    expect(t).to.be.contain("asd");
  });
  // it("文件不存在", function() {
  //   var t = await tools.readFile("./readfile.test1");
  //   expect(t.to.be.equalt("asd"))
  // });
});

 describe("httpAgent", function() {
  describe("连接地址可以访问", function() {
    it("get方法", async function() {
      var t = await tools.httpAgent("http://www.baidu.com", "get");
      expect(JSON.stringify(t)).to.contain("{}");
    });

  });
});
