// ==UserScript==
// @name         Accept Payment
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Gets all pendent payments and accepts them
// @author       fiusen
// @icon         https://www.google.com/s2/favicons?domain=paypal.com
// @match        https://www.paypal.com/myaccount/activities/*
// @grant    GM.getValue
// @grant    GM.setValue
// ==/UserScript==

function getAncestors(node) {
    var ancestors = [];
    while (node.parentNode) {
        ancestors.push(node.parentNode.className);
        node = node.parentNode;
    }
    return ancestors;
}


function getAcceptElements() {
    var aTags = document.getElementsByClassName("ppvx_row___2-7-9");
    var foundList = [];

    for (var i = 0; i < aTags.length; i++) {
        if (aTags[i].className == "ppvx_row___2-7-9") {
            foundList.push(aTags[i]);
        }
    }

    return foundList;
}

function getDescendants(node) {
    var list = [], desc = node, checked = false, i = 0;
    do {
        checked || (list[i++] = desc);
        desc =
            (!checked && desc.firstChild) ||
            (checked = false, desc.nextSibling) ||
            (checked = true, desc.parentNode);
    } while (desc !== node);
    return list;
}

(async () => {
    if (await GM.getValue("running")) close();
    var index = 0;
    GM.setValue("running", true);
    var values = [];
    var ancestors = getDescendants(getAcceptElements()[0]);
    for(var j = 0; j < ancestors.length; j++) {
        let o = ancestors[j];
        if(typeof(o.className) === "string" && o.className.includes("list_item")) {
            let id = o.className.replace("list_item js_transactionItem-", "");
            let href = "https://www.paypal.com/activity/actions/acceptdeny/edit/"+id;

            window.open(href, '_blank').focus();
            await new Promise(r => setTimeout(r, 16000)); // so it doesnt break bc of the captcha
        }
    }
})();
