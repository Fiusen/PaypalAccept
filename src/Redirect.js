// ==UserScript==
// @name         Redirect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Closes current payment window
// @author       fiusen
// @match        https://www.paypal.com/activity/actions/acceptdeny/accept/*
// @icon         https://www.google.com/s2/favicons?domain=paypal.com
// ==/UserScript==


(async () => {
    await new Promise(r => setTimeout(r, 2000));
    close();


})();
