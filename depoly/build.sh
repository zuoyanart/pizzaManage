#步骤：
# git pull
# npm install
# 进入到静态文件目录里，fis3构建静态文件
# 重启服务
cd ../ && git pull && cnpm install && cd fis-static && fis3 release -d ../ && sleep 10s && cd ../app && mocha & wget http://127.0.0.1:8360/mail/index
