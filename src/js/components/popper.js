import { createPopper } from '@popperjs/core'

document.querySelectorAll('[data-popover]').forEach(element => {
	const tooltip = element.querySelector('.tooltip')

	if (!tooltip) return

	// Создаем Popper
	const popperInstance = createPopper(element, tooltip, {
		placement: 'top',
		modifiers: [
			{
				name: 'offset',
				options: {
					offset: [0, -10]
				}
			}
		]
	})

	// Обновляем Popper при наведении
	element.addEventListener('mouseenter', () => {
		popperInstance.update()
	})
})
