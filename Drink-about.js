function peopleWithAgeDrink(old) {
	if (old < 14) return "drink toddy";
	else if (old > 13 && old < 18) return "drink coke";
	else if (old > 17 && old < 21) return "drink beer";
	else return "drink whisky";
}
