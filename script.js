
console.log("--- zadanie 1 ---");
/*zadanie 1 */
console.log("Olga");

console.log("--- zadanie 2 ---");
/*zadanie 2*
2+3;
5
10/4;
2.5
30*2;
60

/*zadanie 3
"Hello World";
"Hello World"
Hello World;
Uncaught SyntaxError: Unexpected identifier
"Hello World;
Uncaught SyntaxError: Invalid or unexpected token*/

/*ZMIENNE I TYPY DANYCH*/

console.log("--- zadanie 1 ---");
/*zadanie 1*/
//Ta zmienna przechowuje typ Number
var number=1;
  console.log(number);
//Ta zmienna przechowuje typ String
var string="Hello world";
  console.log(string);
//Ta zmienna przechowuje typ Liczba + String
var combination=2+"dwa";
  console.log(combination);
//Ta zmienna przechowuje typ wartość logiczna
var boolean=false;
  console.log(boolean);
//Ta zmienna przechowuje typ wartosc specjalna
var special=null;
  console.log(null);
//Ta zmienna przechowuje typ tablica
var board=[1,2,3,4,5];
  console.log(board);

console.log("--- zadanie 2 ---");
/*zadanie 2*/
var first=3;
var second=1;
var result=0;
result=first+second
console.log(result);

console.log("--- zadanie 3 ---");
  /*zadanie 3*/
  var nothing;
  console.log(nothing);
  /* wartość w konsoli: undefined */

  /*OPERATORY*/

console.log("--- zadanie 1 ---");
  /* zadanie 1*/
  var prawda=true;
  var falsz=false;
  console.log(prawda==falsz);
/*wartość w konsoli:
false
*/

console.log("--- zadanie 2 ---");
/* zadanie 2*/
var first1=9;
var second2=4;
var resultModulo=0;
resultModulo=first1 % second2;
console.log(resultModulo);

console.log("--- zadanie 3 ---");
/* zadanie 3*/
var firstWord="Olga";
var secondWord="Hudzik";
var joinedStrings="";
joinedStrings=firstWord + secondWord;
  console.log(joinedStrings);

console.log("--- zadanie 4 ---");
/*zadanie 4*/
var myNumber = 4;
var myString = "4";
  console.log(myNumber==myString); //wartość w konsoli: true
  console.log(myNumber===myString); //wartość w konsoli: false

console.log("--- zadanie 5 ---");
/*zadanie 5*/
var counter=145;
  console.log(counter);
  console.log(counter=counter+1);
  console.log(counter=counter-1);

console.log("--- zadanie 6 ---");
/*zadanie 6*/
var first11=5;
var second22=9;
var result=null;
  console.log(second22>first11);

/*KONTROLA PRZEPLYWU PROGRAMU*/
console.log("--- zadanie 1 ---");
/*zadanie 1*/
var compare1=6;
var compare2=12;

if (compare2 > compare1){
  console.log("true");
  }
else {
  console.log("false");
}



console.log("--- zadanie 2 ---");
/*zadanie 2*/
var compare3=5;
var compare4=6;
var compare5=7;

if (compare5>compare4){
  console.log("true");
}
else if (compare4>compare3){
  console.log("true");
}
else{
  console.log("false");
}

console.log("--- zadanie 3 ---");
/*zadanie 3*/
for (var i=0; i<10; i++){
  console.log("Lubie JavaScript");
}

console.log("--- zadanie 4 ---");
/* zadanie 4*/
var result=0;
for (var i=1; i<=10; i++){
  result=result+i;
}
  console.log(result);

console.log("--- zadanie 5 ---");
/*zadanie 5*/
var n=5;
for(var i=0; i<=n; i++){
  if (i%2==0) {
      console.log(i + " - parzysta");
  } else {
    console.log(i + " - nieparzysta");
  }
}

console.log("--- zadanie 6 ---");
/*zadanie 6*/
for(var i=0; i<3; i++) {
  for(var j=0; j<3; j++) {
    console.log("i=" + i + ", j=" + j);
  }
}

console.log("--- zadanie 7 ---");
/*zadanie 7*/
var size = 5;
var lineOfStars = "";

for(var i = 0; i < size; i++) {
    lineOfStars = "";
    for(var j = 0; j < size; j++) {
        lineOfStars = lineOfStars + "*";
    }
    console.log(" ");
    console.log(lineOfStars);
}

console.log("--- zadanie 8 ---");
/* zadanie 8*/
var size5 = 5;
var lineOfStars = "";

for(var i = 1; i <= size5; i++) {  // i - numer wiersza
    lineOfStars = "";
    for(var j = 1; j <= i; j++) {  // j - ilość gwiazdek
        lineOfStars = lineOfStars + "*";
    }
    console.log(lineOfStars);
}

console.log("--- zadanie 9 ---");
  /*zadanie 9*/
  var n1 = 5;
  var lineOfStars1 = "";

  for(var i = 1; i <= n1; i++) {  // i - numer wiersza
      lineOfStars1 = "";
      for(var j = 1; j <= n1; j++) {  // j - ilość gwiazdek
        if (j<=i){
          lineOfStars1 = lineOfStars1 + "*";
        }
        else {
          lineOfStars1 = lineOfStars1 + j;
        }
      }
      console.log(lineOfStars1);
  }
  for(var i = n1; i>=1; i--) {  // i - numer wiersza
      lineOfStars1 = "";
      for(var j = 1; j <= n1; j++) {  // j - ilość gwiazdek
        if (j<=i){
          lineOfStars1 = lineOfStars1 + "*";
        }
        else {
          lineOfStars1 = lineOfStars1 + j;
        }
      }
      console.log(lineOfStars1);
  }

/*TABLICE*/
/*zadanie 1*/
console.log("--- zadanie 1 ---");
var elements=[1,2,3];
  console.log(elements[0]);
  console.log(elements[1]);
  console.log(elements[2]);

/*zadanie 2*/
console.log("--- zadanie 2 ---");
var fruits=["banana", "grapes", "apple", "orange"];
  console.log(fruits[0]);
  console.log(fruits[fruits.length - 1]);
  for (var i=0; i < fruits.length; i++){
    console.log(fruits[i]);
  }

/*zadanie 3 */
console.log("--- zadanie 3 ---");
var table1=[20,6,100,8,18,10,11,35,13,14];
var sum=0;
for (var i=0; i<table1.length; i++){
  sum=sum+table1[i];
}
  console.log(sum);

  /*zadanie 4*/
  console.log("--- zadanie 4 ---");
  var board1=[1,2,3,4,5,6,7,8,9,10];
  var evenNumbers=0;
  for (var i=0; i<board1.length; i++){
    if (board1[i]%2==0){
      evenNumbers=evenNumbers+board1[i]; //zwiekszam sume o wartosc z tablicy
    }
  }
    console.log(evenNumbers);

  /*zadanie 5*/
  console.log("--- zadanie 5 ---");
  var board2=[20,6,100,8,18,101,11,35,13,14];
  var max=0;
  for (var i=0; i<board2.length; i++){
    if (board2[i] > max) {
      max = board2[i];
    }
  }
    console.log(max);

  /*zadanie 6*/
  console.log("--- zadanie 6 ---");
  var arrWithNumbers = [6,2,4,5,2,3,5,1,4];
  firstIndex=-1;
  for (var i=0; i<arrWithNumbers.length; i++){
    for (var j=i+1; j<arrWithNumbers.length; j++){
      if (arrWithNumbers[i]==arrWithNumbers[j]){
        firstIndex=i;
        break;
      }
    }
    if (firstIndex!=-1){
      break;
    }
  }
    console.log(firstIndex);

/*zadanie 7*/
console.log("--- zadanie 7 ---");
var board5=[1,2,3,4,5,6,7,8,9,10];
for (var i=board5.length-1; i>=0; i--){
  console.log(board5[i]);
}
