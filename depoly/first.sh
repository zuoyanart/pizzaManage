#步骤：
# 检查mocha是否已经安装，没有安装则安装mocha
# git clone项目所有源文件
# 切换到项目目录，安装pkg
# 进入到静态文件目录里，fis3构建静态文件
# 切换到项目根目录，启动端口监听
npm ls mocha || npm install mocha -g  && git clone https://github.com/zuoyanart/pizzaManage && cd pizzaManage && cnpm install && cd fis-static && fis3 release -d ../ && cd ../ && npm start;
