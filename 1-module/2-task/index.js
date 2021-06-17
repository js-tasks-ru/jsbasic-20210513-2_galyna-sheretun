function print(text) {
	console.log(text);
}

function isValid(name) {
	return !!name && !name.includes(' ') && name.length >= 4;
}
/*if (name == null || name === " " || name.length < 4) {
	alert('fuck')
	return false;
}
return true;

}*/ //это было мое решение но оно не сработало до конца

function sayHello() {
	let userName = prompt('Введите ваше имя');

	if (isValid(userName)) {
		print(`Welcome back, ${userName}!`);
	} else {
		print('Некорректное имя');
	}
}
