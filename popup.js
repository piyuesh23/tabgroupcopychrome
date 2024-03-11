document.getElementById('copyBtn').addEventListener('click', () => {
    chrome.tabs.query({currentWindow: true, highlighted: true}, (tabs) => {
      if(tabs.length > 0 && tabs[0].groupId > -1) {
        chrome.tabs.query({currentWindow: true, groupId: tabs[0].groupId}, (tabsInGroup) => {
          const urls = tabsInGroup.map(tab => tab.url).join('\n');
          navigator.clipboard.writeText(urls).then(() => {
            alert('URLs copied to clipboard.');
          }).catch(err => {
            console.error('Failed to copy URLs: ', err);
          });
        });
      } else {
        alert('Please highlight a tab in the group you want to copy URLs from.');
      }
    });
  });
  