document.getElementById('searchBtn').addEventListener('click', function() {
  chrome.runtime.sendMessage({ action: 'searchJobs' });
});
