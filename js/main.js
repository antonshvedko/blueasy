let headerBurger = document.querySelector('.header-burger');

if (typeof headerBurger !== 'undefined') {
	headerBurger.addEventListener('click', (event) => {
		event.preventDefault();
		let headerMenu = document.querySelector('.header-menu');
		if (typeof headerMenu !== 'undefined') {
			headerMenu.classList.toggle('active');
		}
	});
}

let menu = document.querySelector('.burger');

if (typeof menu !== 'undefined') {
	menu.addEventListener('click', (event) => {
		event.preventDefault();
		let activeMenu = document.querySelector('.menu');
		if (typeof activeMenu !== 'undefined') {
			activeMenu.classList.toggle('active-menu');
		}
	});
}
