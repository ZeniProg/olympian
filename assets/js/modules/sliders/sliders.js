import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';

function initSlider(selector, config) {
	const slider = document.querySelector(selector);
	if (!slider) return;

	new Swiper(slider, config);
}

export function initSliders() {
	initSlider('.hero-slider', {
		modules: [Pagination, Autoplay],

		spaceBetween: 30,
		loop: true,
		speed: 1200,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
}
