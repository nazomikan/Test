/*global nazon*/
(function (global) {
    "use strict";
    var paper = {
        daily: function () {
            this.publish("big new today");
        },
        monthly: function () {
            this.publish("interesting analysis", "monthly");
        }
    };

    nazon.makePublisher(paper);
    global.paper = paper;
}(this));
