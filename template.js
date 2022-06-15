
//
const items = [
	"<script>alert(1)</script>",
	"Полить цветы",
	"Пройти туториал по Реакту",
	"Сделать фронт для своего проекта",
];

const itemTemplate = document.querySelector(".item_template").content;//.content - это и есть document-fragment;
//document-fragment - это содержимое темплейта (template)
const list = document.querySelector(".list");
const formButton = document.querySelector(".form__submit");
const form = document.querySelector('.form');
const formInput = document.querySelector('.form__input');
let editingItem = undefined;

function renderItem(text) {
	const newElement = itemTemplate.querySelector('.list__item').cloneNode(true);
	newElement.querySelector('.item__text').innerText = text;
	// const textElements = newElement.querySelectorAll('.item__text');
	// textElements[0].innerText = text;
	// textElements[1].innerText = `Пометить выполнененным "${text}"`;
	// list.appendChild(newElement);//добавили ребенка

  newElement.querySelector('.delete').addEventListener('click', () => {
		deleteItem(newElement);
	})
  newElement.querySelector('.duplicate').addEventListener('click', () => {
		renderItem(text);
	})

  newElement.querySelector('.edit').addEventListener('click', () => {
		editItem(newElement);
	})

	list.insertAdjacentElement('afterbegin', newElement);
}

function editItem(item) {
	editingItem = item;
  formInput.value = item.querySelector('.item__text').innerText;
	formButton.innerText = 'Изменить';
}

// function cloneItem(item){
  // list.insertAdjacentElement('afterbegin', item.cloneNode(true));
// }
function deleteItem(item){
  item.remove();
}

function createItem(e) {
	e.preventDefault(); // предотвратили дефолтное событие - перезагрузку страницы и отправку данных на сервер
	if (editingItem === undefined) {
	renderItem(formInput.value); //вызываем ф-цию renderItem и аргументом(т.е. text в параметре ф-ции)
	//задаем formInput.value(то что ввел пользователь)
	} else {
    editingItem.querySelector('.item__text').innerText = formInput.value;
		formButton.innerText = 'Добавить';
		editingItem = undefined;
	}
	formInput.value = ''//после того как вписали в инпут новое значение и добавили его, поле очиститься
}

form.addEventListener('submit', createItem) // повесил обработчик на форму, при сабмите вызываем
//функцию createItem(создание элемента)

items.forEach(renderItem);//обращаемя к массиву items, вызываем метод
//forEach в параметре вызываем к каждому элементу массива функцию renderItem(а она принимает как
//аргумент (text) значение каждого элемента массива)
