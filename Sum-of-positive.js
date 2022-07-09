function positiveSum(arr) {
	let newArr = arr.filter((number) => {
		if (number > 0 && Number.isInteger(number)) return number;
	});

	return newArr.reduce((total, num) => total + num, 0);

	// after refactor
	// return newArr.reduce((total, num) => total + (num > 0 && Number.isInteger(num) ? num : 0), 0);
}
