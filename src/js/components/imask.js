import IMask from 'imask'

const phoneElements = document.querySelectorAll('input[type="tel"]')

phoneElements?.forEach((element) => {
	const maskOptions = {
		mask: '+{7}(000)0000000',
	}


	const telMask = IMask(element, maskOptions);

	element.addEventListener('focus', () => {
		telMask.updateOptions({
			lazy: false,
		})
	})
	element.addEventListener('blur', () => {
		telMask.updateOptions({
			lazy: true,
		})
	})
})