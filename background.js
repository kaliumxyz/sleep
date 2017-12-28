"use strict";

function checkTime() {
	chrome.storage.sync.get(['time','set'], value => {
		const debug = true;
		const set = value.set;
		const setTime = value.time;
		const time = (new Date())
			.toTimeString()
			.substring(0, 5);
		if( debug )
			console.log(time, setTime, set)
		if ( set && setTime === time ){
			chrome.storage.sync.set({'set': false}, () => {
				alert('bed time');
			});
		}
	});
};

setInterval(checkTime, 1000)
