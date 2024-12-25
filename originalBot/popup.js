/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/pages/popup.ts ***!
  \****************************/

var _a, _b;
function sendMessageToTab(message, callback) {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
        if (tabs.length === 0) {
            alert("No active tab found.");
            return;
        }
        const currentTab = tabs[0];
        const currentTabID = currentTab.id;
        chrome.tabs.sendMessage(currentTabID, message, callback);
    });
}
(_a = document.getElementById("start-bot")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
        if (tabs.length === 0) {
            alert("No active tab found.");
            return;
        }
        const currentTab = tabs[0];
        const currentTabURL = currentTab.url || "";
        // Check if the site is PokerNow
        if (!currentTabURL.includes("pokernow.club")) {
            alert("This extension only works on PokerNow (pokernow.club).");
            return;
        }
        // If the URL is correct, send the message to start the bot
        sendMessageToTab("start_bot");
    });
});
(_b = document.getElementById("kill-bot")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => {
    sendMessageToTab("kill_bot");
});
setInterval(() => {
    sendMessageToTab("get_bot_status", (response) => {
        if (response) {
            document.getElementById("bot-status").textContent = response;
        }
    });
}, 500);

/******/ })()
;
//# sourceMappingURL=popup.js.map