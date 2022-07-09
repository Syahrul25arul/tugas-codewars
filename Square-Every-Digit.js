function squareDigits(num) {
	if (Number.isInteger(num)) {
		let convertString = num.toString();

		let result = "";
		for (let i of convertString) {
			let powNumber = Math.pow(parseInt(i), 2);
			result += powNumber.toString();
		}

		return parseInt(result);
	}
}
