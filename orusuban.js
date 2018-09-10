(function() {
    "use strict";

    var btn = document.getElementById("btn");
    var results = document.getElementById("results");

    btn.addEventListener("click", function() {
        var orusubanLeader = ["images/ramune001.JPG",
                              "images/ramune002.JPG",
                              "images/ramune003.JPG",
                              "images/potato001.JPG",
                              "images/potato002.JPG",
                              "images/potato003.JPG",
                              "images/nasubi001.JPG",
                              "images/nasubi002.JPG",
                              "images/nasubi003.JPG"];
        var n = Math.floor(Math.random() * orusubanLeader.length);
        document.getElementById("leader").src = orusubanLeader[n];
        if (n >=0 && n <= 2) {
            results.textContent = "ラムネくんです";
        } else if (n >= 3 && n <= 5) {
            results.textContent = "ポテトくんです";
        } else {
            results.textContent = "なすびくんです";
        }
    });

})();
