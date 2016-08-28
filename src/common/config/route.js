export default [
    [/^content\/(\d+)(_(\d+))?$/, "home/content/index?id=:1&cp=:3"],//文章正文页
    [/^content_photo\/(\d+)(_(\d+))?$/, "home/content/photo?id=:1&cp=:3"],//组图正文页
    [/^content_video\/(\d+)(_(\d+))?$/, "home/content/video?id=:1&cp=:3"],//视频正文页
    [/(([a-z0-9]+\/*)+)_(\d+)(c(\d+))?(m(\d+))?$/, "home/newslist/index?path=:1&nodeid=:3&cp=:5&mp=:7"],//文章-文字列表页
    [/(([a-z0-9]+\/*)+)_(\d+)(c(\d+))?(m(\d+))?img$/, "home/newslist/img?path=:1&nodeid=:3&cp=:5&mp=:7"],//文章-图片列表页
    [/(([a-z0-9]+\/*)+)_(\d+)(c(\d+))?(m(\d+))?node$/, "home/newslist/node?path=:1&nodeid=:3&cp=:5&mp=:7"]//文章-图片列表页
]
