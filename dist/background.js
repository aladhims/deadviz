chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.get('deadlines', function(data) {
        if (data.deadlines !== undefined || data.deadlines.length !== 0) {
            return
        }

        chrome.tabs.update({url: '/welcome/welcome.html'})
    })
});