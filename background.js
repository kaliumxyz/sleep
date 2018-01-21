"use strict";

function checkTime() {
	chrome.storage.sync.get(['time','set', 'disabled'], value => {
		const debug = true;
		const set = value.set;
		const setTime = value.time;
		const time = (new Date())
			.toTimeString()
			.substring(0, 5);
		if( debug )
		if (!value.disabled)
		if ( set && setTime === time ){
			chrome.storage.sync.set({'set': false}, () => {
				alert('bed time');
			});
		}
		if ( !set && setTime[4] < time[4] ){
			chrome.storage.sync.set({'set': true}, () => {
			});
		}
		
	});
};
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        // read `newIconPath` from request and read `tab.id` from sender
	chrome.tabs.query({active: true, currentWindow: true}, function(arrayOfTabs) {
	     var activeTab = arrayOfTabs[0];
	     var activeTabId = activeTab.id;
		chrome.browserAction.setIcon({
		    path: request.newIconPath,
		    tabId: activeTabId
		}, console.log);
	  });
    });


setInterval(checkTime, 1000)
