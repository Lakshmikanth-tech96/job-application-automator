
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript({
    file: 'content.js'
  });
});

function applyToJob(jobUrl) {
  console.log(`Applying to job at ${jobUrl}`);
}
