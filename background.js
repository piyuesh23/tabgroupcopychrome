chrome.runtime.onInstalled.addListener(() => {
    chrome.action.onClicked.addListener((tab) => {
      chrome.tabs.query({currentWindow: true, groupId: tab.groupId}, (tabs) => {
        const urls = tabs.map(tab => tab.url).join('\n');
        navigator.clipboard.writeText(urls).then(() => {
          console.log('URLs copied to clipboard.');
        }).catch(err => {
          console.error('Failed to copy URLs: ', err);
        });
      });
    });
  });
  