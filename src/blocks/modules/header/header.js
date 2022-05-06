import {freezeBody, unfreezeBody} from "../../../js/import/freezeBody";

//icon
const body = document.querySelector('body');
const icon = document.querySelector('.icon');
const menu = document.querySelector('.header-menu');
icon.addEventListener('click', () => {
	icon.classList.toggle('active')
	body.classList.toggle('fixed')

	if(icon.classList.contains('active')) {
		menu.classList.add('show');
		freezeBody();
	} else {
		menu.classList.add('action'); //добавляем класс для медленного скрытия меню
		setTimeout(()=> {
			menu.classList.remove('action');
			menu.classList.remove('show')
		}, 1000)	//скрываем после задержки, такой же как и в css
		unfreezeBody()
	}
})

// закрытие меню при клике вне элемента
window.addEventListener('click', e => { // при клике в любом месте окна браузера
	const target = e.target // находим элемент, на котором был клик
	if (!target.closest('.header-menu') && !target.closest('.icon')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
		menu.classList.add('action');
		setTimeout(()=> {
			menu.classList.remove('action');
			menu.classList.remove('show')
			icon.classList.remove('active')
			body.classList.remove('fixed')
		}, 1000) // то закрываем окно навигации, удаляя активные классы
	}
})

// const mediaQuery = window.matchMedia('(max-width: 992px)');
// function mediaChange(e) {
// 	//если размер экрана < 992px
// 	if (e.matches) {
// 		menu.classList.add('hidden');
// 	} else {
// 		menu.classList.remove('hidden');
// 	}
// }
// mediaQuery.addListener(mediaChange);
// mediaChange(mediaQuery);
