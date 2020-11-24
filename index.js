// ==UserScript==
// @name         YouTube Video Liker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       lxuancheng
// @match        https://www.youtube.com/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/mousetrap/1.6.3/mousetrap.min.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const activeButtonClass = 'style-default-active';

    function likeIt() {
        const likeButton = document.querySelector('#menu-container #top-level-buttons').children[0];
        if (!Array.from(likeButton.classList).includes(activeButtonClass)) likeButton.click();
    }

    Mousetrap.bind(['v'], likeIt);
})();
