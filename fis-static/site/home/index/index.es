let index = (() => {
    let self = {};
    let $ = require("jquery");
    let jQuery = $;
    require("/node_modules/flexslider/flexslider.css");
    require('flexslider');
    require("layer");


    self.init = () => {
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: true,
            directionNav: false,
            slideshowSpeed: 5000,
        });
        layer.alert("111");

    }

    return self;
}());

module.exports = index;
