// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function() {
  chrome.windows.getAll({populate: true}, function(windows) {
    for (var i = 0; i < windows.length; i++) {
      var window = windows[i]
      var firstTab = window.tabs[0]
      chrome.tabs.update(firstTab.id, {active: true})
    }
  })
})
