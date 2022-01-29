// ==UserScript==
// @name         gCal IMG fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fix IMG tags imported into Google Calendar
// @author       https://github.com/r0d3r1ck0rd0n3z
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @match        http*://calendar.google.com/*
// @include      https://calendar.google.com/*
// @icon         https://i.ibb.co/BZVSCYG/calendar-01.png
// @grant        none
// ==/UserScript==

document.addEventListener("click", function(){

// Function to fix markup of imported images inserted inside the html-blob tag

function replaceIMGs() {
    var imgs = document.querySelectorAll('html-blob img');

    for (var i = 0; i < imgs.length; i++) {
        var newSrc = imgs[i].src.replace('https://www.google.com/url?q=', '').replace(/&sa=D.*/,'');
        imgs[i].setAttribute("style", "width:350px;height:auto;");
        imgs[i].src = decodeURIComponent(newSrc);
    };
  };

// End of function section

setTimeout(replaceIMGs, 100);
setTimeout(replaceIMGs, 1500);

});
