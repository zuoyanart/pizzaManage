export default [
    [/^content\/(\d+)$/, "home/content/index?id=:1"],//文章正文页
    [/(([a-z0-9]+\/*)+)_(\d+)(c(\d+))?(m(\d+))?$/, "home/newslist/index?nodeid=:3&cp=:5&mp=:7"],//文章-文字列表页
    [/(([a-z0-9]+\/*)+)_(\d+)(c(\d+))?(m(\d+))?img$/, "home/newslist/img?nodeid=:3&cp=:5&mp=:7"],//文章-图片列表页
    [/(([a-z0-9]+\/*)+)_(\d+)(c(\d+))?(m(\d+))?node$/, "home/newslist/node?nodeid=:3&cp=:5&mp=:7"]//文章-图片列表页
]
