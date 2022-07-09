function sumCubes(n) {
	// let result = n;
	// for (let i = 1; i <= n; i++) {
	// 	result = result * n;
	// }
	// return result ;
	// exp

	let result = 0;
	for (let i = 1; i <= n; i++) {
		result += Math.pow(i, 3);
	}
	return result;
}

// console.log(sumCubes(4));

// function quarter(month) {
// if(month > 1 && month < 4) return 1;
// else if(month > 4 && month < 7) return 2;
// else if(month > 7 && month < 10) return 3
// else return 4;
// }

// function peopleDrink(old) {
// 	switch (old) {
// 		case old < 14:
// 			return "drink toddy";
// 		case old > 13 && old < 18:
// 			return "drink coke";
// 		case old > 17 && old < 21:
// 			return "drink beer";
// 		case old >= 21:
// 			return "drink whisky";
// 	}
// }
// console.log(peopleDrink(21));

function positiveSum(arr) {
	let newArr = arr.filter((number) => {
		if (number > 0 && Number.isInteger(number)) return number;
	});

	return newArr.reduce((total, num) => total + num, 0);

	newArr.reduce((total, num) => total + (num > 0 && Number.isInteger(num) ? num : 0), 0);
}

// function peopleWithAgeDrink(old) {
// 	if (old < 14) return "drink toddy";
// 	else if (old > 13 && old < 18) return "drink coke";
// 	else if (old > 17 && old < 21) return "drink beer";
// 	else return "drink whisky";
// }

// console.log(peopleWithAgeDrink(22));

// function factorial(n) {
// 	if (n < 0 || n > 12) throw RangeError(-1);
// 	else if (n == 0) return 1;
// 	else {
// 		return n * factorial(n - 1);
// 	}
// }

// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(0));

// let test = 09809234234;

// for (let i of test) {
// 	console.log(i);
// }

// function squareDigits(num) {
// 	if (Number.isInteger(num)) {
// 		let convertString = num.toString();

// 		let result = "";
// 		for (let i of convertString) {
// 			let powNumber = Math.pow(parseInt(i), 2);
// 			result += powNumber.toString();
// 		}

// 		return parseInt(result);
// 	}
// }

// console.log(squareDigits(3212));

// function uppercase() {}

// function getGrade(s1, s2, s3) {
// 	let average = (s1 + s2 + s3) / 3;
// 	if (average >= 0 && average < 60) return "F";
// 	else if (average >= 60 && average < 70) return "D";
// 	else if (average >= 70 && average < 80) return "C";
// 	else if (average >= 80 && average < 90) return "B";
// 	else if (average >= 90 && average <= 100) return "A";
// }
