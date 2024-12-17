import { getHeaderHeight } from '../functions/header-height.js'
import { throttle } from '../functions/throttle.js';

const header = document.querySelector('.header')

if (header) {
	const headerTopHeight = () => {
		const headerTop = document.querySelector('.header-top')
	
		if (headerTop) {
			document.documentElement.style.setProperty('--header-top-height', `${headerTop.offsetHeight}px`)
		}
	}
	
	headerTopHeight()
	getHeaderHeight()
	window.addEventListener('resize', throttle(headerTopHeight))
	window.addEventListener('resize', throttle(getHeaderHeight))
}