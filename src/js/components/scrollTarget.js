// Получаем значение переменной --header-height из :root
const headerHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height'), 10) || 0

// Получаем все секции и кнопки
const sections = document.querySelectorAll('section')
const buttons = document.querySelectorAll('[data-scroll-target]')

// Создаем Map для быстрого соответствия секций и кнопок
const sectionButtonMap = new Map()
buttons.forEach(button => {
	const targetSelector = button.getAttribute('data-scroll-target')
	const targetElement = document.querySelector(targetSelector)
	if (targetElement) {
		sectionButtonMap.set(targetElement, button)
	}
})

// Функция для сброса класса is-active
function removeActiveClass() {
	buttons.forEach(button => button.classList.remove('is-active'))
}

// Создаем IntersectionObserver
const observer = new IntersectionObserver(
	entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// Удаляем is-active со всех кнопок
				removeActiveClass()

				// Добавляем is-active к соответствующей кнопке
				const activeButton = sectionButtonMap.get(entry.target)
				if (activeButton) {
					activeButton.classList.add('is-active')
				}
			}
		})
	},
	{
		root: null,
		rootMargin: `-${headerHeight}px 0px 0px 0px`,
		threshold: 0.25
	}
)

// Наблюдаем за каждой секцией
sections.forEach(section => observer.observe(section))

// Добавляем клик для прокрутки и управления классом
buttons.forEach(button => {
	button.addEventListener('click', event => {
		const targetSelector = event.target.getAttribute('data-scroll-target')
		const targetElement = document.querySelector(targetSelector)

		if (targetElement) {
			const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight

			// Удаляем is-active со всех кнопок
			removeActiveClass()

			// Добавляем is-active к нажатой кнопке
			button.classList.add('is-active')

			// Скроллим к секции
			window.scrollTo({
				top: targetPosition,
				behavior: 'smooth'
			})
		}
	})
})
