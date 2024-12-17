import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

Swiper.use([Navigation, Pagination])

document.querySelectorAll('.trust-swiper')?.forEach(element => {
	new Swiper(element.querySelector('.swiper'), {
		slidesPerView: 5,
		spaceBetween: 16,
		pagination: {
			el: element.querySelector('.swiper-pagination'),
			clickable: true,
		},

		breakpoints: {
			0: {
				slidesPerView: 1.25,
				spaceBetween: 10,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 4,
				spaceBetween: 16,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 16,
			}
		}
	})
})

document.querySelectorAll('.tech-swiper')?.forEach((element) => {
	new Swiper(element.querySelector('.swiper'), {
		slidesPerView: 'auto',
		spaceBetween: 20,
		pagination: {
			el: element.querySelector('.swiper-pagination'),
			clickable: true,
		},

		breakpoints: {
			0: {
				slidesPerView: 1.25,
				spaceBetween: 10,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 'auto',
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 'auto',
				spaceBetween: 20,
			}
		}
	})
})

document.querySelectorAll('.photos-swiper')?.forEach((element) => {
	new Swiper(element.querySelector('.swiper'), {
		slidesPerView: 'auto',
		spaceBetween: 20,
		pagination: {
			el: element.querySelector('.swiper-pagination'),
			clickable: true,
		},
		navigation: {
			nextEl: element.querySelector('.swiper-button-next'),
			prevEl: element.querySelector('.swiper-button-prev'),
		},

		breakpoints: {
			0: {
				slidesPerView: 1.125,
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 'auto',
				spaceBetween: 20,
			},
		}
	})
})

document.querySelectorAll('.staff-swiper')?.forEach((element) => {
	new Swiper(element.querySelector('.swiper'), {
		slidesPerView: 5,
		spaceBetween: 20,
		navigation: {
			nextEl: element.querySelector('.swiper-button-next'),
			prevEl: element.querySelector('.swiper-button-prev'),
		},

		breakpoints: {
			0: {
				slidesPerView: 'auto',
				spaceBetween: 10,
			},
			576: {
				slidesPerView: 'auto',
				spaceBetween: 10,
			},
			768: {
				slidesPerView: 'auto',
				spaceBetween: 10,
			},
			992: {
				slidesPerView: 'auto',
				spaceBetween: 20,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 20,
			}
		}
	})
})