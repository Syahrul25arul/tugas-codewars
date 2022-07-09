function factorial(n) {
	if (n < 0 || n > 12) throw RangeError(-1);
	else if (n == 0) return 1;
	else {
		return n * factorial(n - 1);
	}
}