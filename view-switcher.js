// Переключатель вида Сетка/Список

// Заявки
document.querySelector('.view-switcher.applications .view--list').addEventListener('click', function() {
	document.querySelector('.view-switcher.applications').className = 'view-switcher applications list';
	document.querySelector('.applications--client').classList.remove('grid-view');
	document.querySelector('.applications--client').classList.add('list-view');
}, false);
document.querySelector('.view-switcher.applications .view--grid').addEventListener('click', function() {
	document.querySelector('.view-switcher.applications').className = "view-switcher applications grid";
	document.querySelector('.applications--client').classList.remove('list-view');
	document.querySelector('.applications--client').classList.add('grid-view');
}, false);

// Банковские гарантии
document.querySelector('.view-switcher.guarantees .view--list').addEventListener('click', function() {
	document.querySelector('.view-switcher.guarantees').className = "view-switcher guarantees list";
	document.querySelector('.guarantees--client').classList.remove('grid-view');
	document.querySelector('.guarantees--client').classList.add('list-view');
}, false);
document.querySelector('.view-switcher.guarantees .view--grid').addEventListener('click', function() {
	document.querySelector('.view-switcher.guarantees').className = "view-switcher guarantees grid";
	document.querySelector('.guarantees--client').classList.remove('list-view');
	document.querySelector('.guarantees--client').classList.add('grid-view');
}, false);
