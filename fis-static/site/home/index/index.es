let index = (() => {
    let self = {};
    let $ = require("jquery");
    let jQuery = $;
    require("/node_modules/flexslider/flexslider.css");
    require('flexslider');


    self.init = () => {
        $('.flexslider').flexslider({
            animation: "slide",
            controlNav: true,
            directionNav: false,
            slideshowSpeed: 5000,
        });
    }

    return self;
}());

module.exports = index;
