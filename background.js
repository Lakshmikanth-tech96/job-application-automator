chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'searchJobs') {
    console.log("Searching for jobs...");
  }
});
