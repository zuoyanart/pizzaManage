let index = (() => {
    let self = {};
    let $ = require("jquery");
    let jQuery = $;
    require("../../../modules/flex/flexslider.css");
    require('flex');


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
