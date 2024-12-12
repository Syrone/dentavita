import { throttle } from '../functions/throttle.js';

const headerTopHeight = () => {
	const headerTop = document.querySelector('.header-top')

	if (headerTop) {
		document.documentElement.style.setProperty('--header-top-height', `${headerTop.offsetHeight}px`)
	}
}

headerTopHeight()
window.addEventListener('resize', throttle(headerTopHeight))