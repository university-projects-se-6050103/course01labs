//Дано два цілі числа А і B (А < B). Знайти суму всіх цілих чисел від А до B включно.

var a = 10,
	b = 38,
	sum = 0;
for (var i = a; i <= b; i++) {
	sum += i;
}
console.log("Сума =", sum);