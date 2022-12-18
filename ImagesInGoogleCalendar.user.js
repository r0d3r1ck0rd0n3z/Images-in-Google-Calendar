// ==UserScript==
// @name         gCal IMG fix
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Fix IMG tags imported into Google Calendar
// @author       Roderick Ordonez
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @match        http*://calendar.google.com/*
// @include      https://calendar.google.com/*
// @icon         https://www.beyondhousing.org.au/images/favicon/favicon-16x16.png
// @grant        none
// ==/UserScript==

document.addEventListener("click", function(){

// Function to fix markup of imported images inside the image-blob tag

function replaceIMGs() {
    //var imgs = document.querySelectorAll('html-blob img');
    var imgs = document.querySelectorAll('img[src*="google.com"]');
    for (var i = 0; i < imgs.length; i++) {
        var newSrc = imgs[i].src.replace('https://www.google.com/url?q=', '').replace(/&sa=D.*/,'');
        imgs[i].setAttribute("style", "width:350px;height:auto;");
        imgs[i].src = decodeURIComponent(newSrc);
        //console.log(imgs[i].src);
    };
  };

// End of function section

setTimeout(replaceIMGs, 100);
setTimeout(replaceIMGs, 1500);

});
