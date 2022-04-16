chrome.runtime.onMessage.addListener((request) => {
  const { from, apt } = request;
  chrome.tabs.query(
    { url: `https://voyeur-house.tv/moments/${apt}/*` },
    (tabs) => {
      tabs.forEach((tab) => {
        if (tab.url !== from) {
          chrome.tabs.sendMessage(tab.id, request);
        }
      });
    }
  );

  return true;
});
