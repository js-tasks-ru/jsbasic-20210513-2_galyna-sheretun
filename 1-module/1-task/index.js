function factorial(n) {
	let result = 1;
	while (n) {
		result *= n--;
	}

	return result;

}

alert(factorial(1));
alert(factorial(2));
alert(factorial(3));
alert(factorial(4));
alert(factorial(5));