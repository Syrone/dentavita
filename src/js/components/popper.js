import { createPopper, offset, right} from '@popperjs/core';

document.querySelectorAll('[data-popover]')?.forEach(element => {
	createPopper(element, element.querySelector('.tooltip'), {
		placement: 'top',
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, -10]
				}
			}
		],
	});
})