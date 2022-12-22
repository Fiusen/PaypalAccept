// ==UserScript==
// @name         Submit (Accept)
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Submit "accept" button
// @author       fiusen
// @match        https://www.paypal.com/activity/actions/acceptdeny/edit/*
// @icon         https://www.google.com/s2/favicons?domain=paypal.com
// ==/UserScript==


(async () => {
    let d = document.getElementsByClassName("vx_btn")
    d[0].click();
})();


