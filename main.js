do {
  number = prompt("Введите число больше 100");
} while (number < 100 && number == NaN);

if (number === null) {
  document.write("Вы не ввели число");
}
