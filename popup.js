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
				disable.classList.toggle('disabled')
				disable.innerHTML = disable.classList.contains('disabled')?'disabled':'enabled'
			})
		})
	}
	chrome.storage.sync.get(['disabled'], value => {
		if(!value.disabled){
			disable.classList.remove('disabled')
			disable.innerHTML = 'enabled'
		}

	})
})
