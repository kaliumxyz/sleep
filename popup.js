document.addEventListener('DOMContentLoaded', ev => {
	document.querySelector('.pew').onclick = function() {
		let val = document.querySelector('input').value;
		chrome.storage.sync.set({'time': val, 'set': true}, console.log)
		alert(`Sleep reminder set to ${val}`)
	}
})
