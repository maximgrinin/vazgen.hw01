// Найдите сумму всех элементов в массиве.
const array = [4, 8, 7, -13, 12];
console.log(`Исходный массив: ${array}`);

let sum = 0;
array.forEach((x) => (sum += x));
console.log("Сумма элементов: " + sum);

// Найдите наибольшее число в массиве.
// Найдите наименьшее число в массиве.
const min = Math.min(...array);
const max = Math.max(...array);
console.log(`Минимальный элемент: ${min}, максимальный элемент: ${max}`);

// Посчитайте количество отрицательных чисел в массиве.
let count = 0;
array.forEach((x) => {
  if (x < 0) count++;
});
console.log(`Количество отрицательных элементов: ${count}`);

// Проверьте, все ли элементы в массиве являются положительными числами.
let flag = true;
array.forEach((x) => {
  if (x < 0) flag = false;
});
if (flag) console.log("Все элементы массива - положительные числа");
else console.log("Не все элементы массива - положительные числа");

// Отсортируйте массив в порядке возрастания.
let sorted_array = array;
sorted_array.sort((a, b) => a - b);
console.log(`Массив, отсортированный по возрастанию: ${sorted_array}`);

// Отсортируйте массив в порядке убывания.
sorted_array = array;
sorted_array.sort((a, b) => b - a);
console.log(`Массив, отсортированный по убыванию: ${sorted_array}`);

// Извлеките все уникальные элементы из массива.
sorted_array = [4, 8, 7, -13, 12, 4, 7, 12, -13];
let uniq_array = [...new Set(sorted_array)];
console.log(`Массив с уникальными элементами: ${uniq_array}`);

// Проверьте, является ли массив палиндромом (т.е. читается одинаково слева направо и справа налево).
const check = (flag) => {
  if (flag) console.log("Массив - полиндром");
  else console.log("Массив - НЕ полиндром");
};

const str = "АРОЗАУПАЛАНАЛАПУАЗОРА";
check(str == str.split("").reverse().join(""));

sorted_array = [4, 8, 7, -13, 12, -13, 7, 8, 4];
const checkPalindrome = (arr) => {
  const len = arr.length;
  if (len % 2 == 0) return false;

  for (let i = 0; i < len / 2; i++) {
    if (arr[i] !== arr[len - i - 1]) return false;
  }
  return true;
};

check(checkPalindrome(sorted_array));
check(checkPalindrome(array));

// Объедините два массива в один, чтобы получить новый массив, содержащий элементы обоих исходных массивов.
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
console.log(array3);
