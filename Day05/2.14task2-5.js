// 2.14task2 Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}
const age = prompt('Сколько вам лет?', 18);
if (checkAge(age)) {
  alert('Доступ получен');
} else {
  alert('Доступ закрыт');
}

/*
function checkAge(age) {
  return (age > 18) || confirm('А родители разрешили?');
}
const age = prompt('Сколько вам лет?', 18);
if (checkAge(age)) {
  alert('Доступ получен');
} else {
  alert('Доступ закрыт');
}
*/

// 2.14task4 Функция min(a, b)
function min(a, b) {
  if (a < b) {
      return a;
  } {
      return b;
  }
}
const a = prompt("Введите первое число", 0);
const b = prompt("Введите второе число", 0);
const result = min(a, b);
alert(`Из двух чисел ${a} и ${b} меньшее равно = ${result}`);
console.log(result);

// 2.14task5 Функция pow(x,n)
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

const x = prompt("x?", '');
const n = prompt("n?", '');

if (n >= 1 && !(n % 1)) {
  alert( pow(x, n) );
} else {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
}
console.log( pow(x, n) )
