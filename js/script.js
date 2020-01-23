//Selecciono la clase .menu
const menu = document.querySelector('.menu');

//Selecciono botón menu
const burgerButton = document.querySelector('#burguer-menu');


//Media queries con javascript
const ipad = window.matchMedia('screen and (max-width: 767px)')

//Agregar evento
ipad.addListener(validation);

//Validación al darle click al boton
function validation(event){
	if(event.matches) {
		burgerButton.addEventListener('click', hideShow)
	}
	else {
		burgerButton.removeEventListener('click', hideShow)
	}
}

validation(ipad)

//Validación para agregar o remover la clase
function hideShow(){
	if(menu.classList.contains('is-active')){
		menu.classList.remove('is-active')
	}
	else {
		menu.classList.add('is-active')
	}
}




//función = Al presionar el botón, activa la clase o desactiva
// burgerButton.addEventListener('click', function() {
// 	menu.classList.toggle('is-active')
// })

//Con un arrow function ES6
// burgerButton.addEventListener('click', () => {
// 	menu.classList.contains('is-active') ? menu.classList.remove('is-active') : menu.classList.add('is-active');
// })