import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

Swiper.use([Navigation, Pagination])

document.querySelectorAll('.trust-swiper')?.forEach(element => {
	new Swiper(element.querySelector('.swiper'), {
		slidesPerView: 5,
		spaceBetween: 16,
		pagination: {
			el: element.querySelector('.swiper-pagination'),
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