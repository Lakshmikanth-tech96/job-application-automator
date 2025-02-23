// Listener for messages sent from the popup (index.html)
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  // Check if the action is 'searchJobs'
  if (request.action === 'searchJobs') {
    // Log a message when the button is clicked
    console.log("Searching for jobs...");

    // Here, you can add the functionality to search for jobs in the future.
    // For now, we are just logging a message to the console.
  }
});
