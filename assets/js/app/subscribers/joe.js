/*jslint devel: true*/
/*global paper*/
(function () {
    "use strict";
    var joe = {
        drinkCoffee: function (paper) {
            console.log("just read " + paper);
        },
        sundayPreNap: function (monthly) {
            console.log("About to fall asleep this " + monthly);
        }
    };

    paper.subscribe(joe.drinkCoffee);
    paper.subscribe(joe.sundayPreNap, 'monthly');
}());
