/* eslint-disable no-undef */
import createOverlay from 'app/scripts/util/createOverlay';

const onDOMContentLoadedListener = (details) => {
  if (details.frameId === 0) {
    chrome.tabs.executeScript(details.tabId, {
      code: 'chrome.extension.sendMessage({data: document.documentElement.innerHTML});'
    });
  }
};

chrome.extension.onMessage.addListener((request, sender) => {
  if ((request.data).match(/coinhive\.min\.js/g)) {
    chrome.tabs.executeScript(sender.tab.id, {
      code: createOverlay({minerName: 'Coin Hive'})
    });
  }
});

chrome.webNavigation.onDOMContentLoaded.addListener(onDOMContentLoadedListener);
