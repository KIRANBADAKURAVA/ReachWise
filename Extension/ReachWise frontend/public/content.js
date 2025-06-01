window.addEventListener('message', (event) => {
    if (event.source !== window) return;
    if (event.data.type === 'FROM_PAGE') {
      chrome.runtime.sendMessage({ token: event.data.token });
    }
  });
  