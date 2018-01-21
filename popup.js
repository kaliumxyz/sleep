document.addEventListener('DOMContentLoaded', ev => {
	const disable = document.querySelector('.disable')
	document.querySelector('.pew').onclick = function() {
		let val = document.querySelector('input').value;
		chrome.storage.sync.set({'time': val, 'set': true}, () => {})
		alert(`Sleep reminder set to ${val}`)
	}
	disable.onclick = function() {
		chrome.storage.sync.get(['disabled'], value => {
			let disabled = value.disabled
			chrome.storage.sync.set({'disabled': !disabled}, () => {
				if (disable.classList.contains('disabled')){
					disable.classList.remove('disabled')
					disable.innerHTML = 'enable'
					chrome.runtime.sendMessage({ "newIconPath" : '/icon128.png' });
				} else {
					disable.classList.add('disabled')
					disable.innerHTML = 'disable'
					chrome.runtime.sendMessage({ "newIconPath" : '/icon128-off.png' });
				}
			})
		})
	}
	chrome.storage.sync.get(['disabled'], value => {
		if(!value.disabled){
			disable.classList.remove('disabled')
			disable.innerHTML = 'enable'
			chrome.runtime.sendMessage({ "newIconPath" : '/icon128-off.png' });
		}

	})
})
