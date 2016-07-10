export default [
    [/^content\/(\d+)$/, "home/content/index?id=:1"],//文章正文页
    [/(([a-z0-9]+\/*)+)_(\d+)(c\d+)?((m\d+)?)$/, "home/newslist/index?path=:1&&nodeid=:3&cp=:4&mp=:5"],//文章-文字列表页
    [/(([a-z0-9]+\/*)+)_(\d+)(c\d+)?((m\d+)?)img$/, "home/newslist/img?path=:1&&nodeid=:3&cp=:4&mp=:5"]//文章-图片列表页
]
