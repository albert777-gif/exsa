// Examen JavaScript Amaliy savollar 

// 1-savol Arifmetik operatorla

//  5 sonini 2 ga bo'ling va qoldig`ini alertga chiqaring!

// разделить 5 на 2 и вывести остаток в алерт (использовать оператор %)

// javob:Pasdan yozib keting kodini

//javob:
//let firstNumber = parseFloat(prompt("Birinchi sonni kiriting:"));
//let secondNumber = parseFloat(prompt("Ikkinchi sonni kiriting:"));
//let operation = prompt("Qaysi amalni tanlaysiz? (+, -, *, /, %)");

//let result;
//if (operation === "+") {
//    result = firstNumber + secondNumber;
//} else if (operation === "-") {
 //   result = firstNumber - secondNumber;
//} else if (operation === "*") {
//    result = firstNumber * secondNumber;
//} else if (operation === "/") {
//    result = firstNumber / secondNumber;
//} else if (operation === "%") {
//    result = firstNumber % secondNumber;
//} else {
  //  alert("Noto'g'ri amal tanlandi!");
//}

//if (result !== undefined) {
  //  alert(`jo soragan natija: ${result}`);
//}

// 2-savol  Math metodlari

// 1 dan 10 gacha bo'lgan random son yasang va alertga chiqaring

// сделать рандомное число от 1 до 10 и вывести в алерт

// Javob:Pasdan yozib keting kodini

//let randomNumber = Math.floor(Math.random() * 10) + 1;
//alert(randomNumber);



// 3-savol Math metodlari

// 12.510 sonini butun songa aylantiring! 

// сделать число 12.510 целым

// ответ должен выйти 12

// javob: 12 chiqishi kerak!


//let number = 12.510;
//let roundedNumber = Math.floor(number);
//alert(roundedNumber);



// 4-savol function

// "MARS IT SCHOOL" sozini nechta harfdan iboratligini funksiya orqali topib va alertga chiqaring!.

// с помощью функции найти сколько букв в слове "MARS IT SCHOOL" и вывести в алерт

// Javob:Kodini yozib bering 

//function countLetters(word) {
  //  let letterCount = word.replace().length;
  //   alert(`"${word}" so'zi ${letterCount} ta harfdan iborat.`);
//}

//countLetters("MARS IT SCHOOL");


// 5-savol for loop

// "MARS IT SCHOOL" sozini javascript funksiyasi orqali 10 marta console.log ga chiqaring!

// С помощью функции вывести в консоль 10 раз слово "MARS IT SCHOOL"

// Javob:Kodini yozib bering

//function choqEtamaizMarsItschool() {
//    for (let i = 0; i < 10; i++) {
 //       console.log("MARS IT SCHOOL");
 //   }
//}

//choqEtamaizMarsItschool();

// 6-savol Array methods

// let harflar = ["a" , "b" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t",  "u" , "v" , "x" , "y" , "z" ]

// Shu arraydan foydalangan holda console.log ga o'zingizni ismigizni chiqaring

// С помощью этого массива вывести в консоль свое имя

// Javob:Kodini yozib bering


//let harflar = ["a", "b", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];
//let ism = ["n", "a", "z", "a","r", "b", "e", "k"];
//let ismString = ism.map(harf => harflar[harflar.indexOf(harf)]).join("");
//console.log(ismString);


// 7-savol if else

// Promtdan yosh kiriting agar yoshi 18 yoshdan katta bo'lsa console da Siz balag'ot yoshiga yetgansiz , aks holda  siz balog'at yoshiga yetmagansiz  // agar yoshi 18 yoshga teng bolsa  balog'at yoshi muborak deb console da chiqarish kerak

// Работа с if else, проверка возраста больше 18 лет, меньше 18 лет или равен 18 годам

// Javob:Kodini yozib bering

//let age = parseInt(prompt("Yoshingizni kiriting:"));

//if (age > 18) {
 // console.log("Siz balog'at yoshiga yetgansiz.");
//} else if (age === 18) {
//  console.log("Balog'at yoshi muborak!");
//} else {
//  console.log("Siz balog'at yoshiga yetmagansiz.");
//}



// 8-savol String metodlari vs Array metodlari

// Promtdan ismigizni kiriting va console.log da ismigizni teskarisini chiqaring

// Ввести в промпт свое имя и вывести в консоль его наоборот

// Javob:Kodini yozib bering

//let name = prompt("Ismingizni kiriting:");
//let reversedName = name.split("").reverse().join("");
//console.log(reversedName);

// 9-savol DOM

// Promtdan ismigizni kiriting va yoshingizni kiriting va uni style berilgan holda DOM ga chiqaring


// Javob:Kodini yozib bering

//let name = prompt("Ismingizni kiriting:");
//let age = prompt("Yoshingizni kiriting:");

//let container = document.createElement("div");
//container.style.fontFamily = "Arial, sans-serif";
//container.style.fontSize = "20px";
//container.style.color = "blue";
//container.style.margin = "20px";

//let nameElement = document.createElement("p");
//nameElement.textContent = `Ismingiz: ${name}`;
//nameElement.style.fontWeight = "bold";

//let ageElement = document.createElement("p");
//ageElement.textContent = `Yoshingiz: ${age}`;
//ageElement.style.fontStyle = "italic";

//container.appendChild(nameElement);
//container.appendChild(ageElement);

//document.body.appendChild(container);







// 10-savol Array metodlari

// let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// shu arraydagi juft sonlarni console ga chiqaring

// найти и вывести четные массивы в консоль, с помощью методов


// Javob :Kodini yozib bering


// Define the array of numbers
let sonlar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = sonlar.filter(son => son % 2 === 0);
evenNumbers.forEach(function(son) {
  console.log(son);
});
