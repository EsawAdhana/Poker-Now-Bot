chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({ showPopup: true });
  });
  
  chrome.action.onClicked.addListener((tab) => {
    chrome.storage.local.get(['showPopup'], (result) => {
      if (result.showPopup) {
        chrome.action.setPopup({ popup: 'popup.html' });
      } else {
        chrome.action.setPopup({ popup: '' });
      }
    });
  });
  