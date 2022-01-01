// const val3 = "const変数を際宣言";

//objectの定義はほとんどconstで定義する

// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };
// val4.name = "ryo";
// val4.address = "hiroshima";
// console.log(val4);

// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "ryo";
// const age = "20";
// //私の名前はりょうです。年齢は20歳です。
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// //テンプレート文字列を用いる方法

// const message2 = `my name is ${name}. my age is ${age} years old`;
// console.log(message2);
/**
 * アロー関数
 */
//従来の関数。
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// // console.log(func1("ryo"));

// //アロー関数
// const func2 = (str = 3, huga = 0) => {
//   return str + huga;
// };
// console.log(func2(100, 2));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "りょう",
//   age: "20"
// };

// const message1 = `私の名前は${myProfile.name}です。私の年齢は${myProfile.age}歳です。`;

// // console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。私の年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["りょう", "20"];

// const [name, age] = myProfile;
// const message3 = `私の名前は${name}です。私の年齢は${age}歳です。`;
// console.log(message3);

/**
 * デフォルト値、引数など
 */

// const seyHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！！`);

// seyHello();

/**
 * スプレッド構文
 */
//配列の展開
//配列の中身を順番に処理してくれる。とっても便利。
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(...arr1);

//まとめる

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(...arr3);

// 配列のコピー、結合
//Reactでもよく使うよ！

// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// console.log(arr8);

// //=を使って配列を操作すると、不具合の温床になる＝＞破壊的な更新というやつ。

// arr8[0] = 100;
// console.log(arr8);

// console.log(arr4);

//スプレッド構文でコピーをすると元の配列は維持された状態で配列がコピーされる。
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */

//従来の配列の処理方法
// const nameArr = ["田中", "山田", "諒"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(`${i}番目は${nameArr[i]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// map関数は、第一引数に配列の中身の要素を一つづつとり、第二引数にその配列のindex番号を与える。
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

//奇数の値だけを取り出したい。配列に対してある条件だけを付与したい。
//returnのさきに条件式を書くイメージ。その条件に一致した物だけをreturnで返す。
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "諒") {
//     return name;
//   } else {
//     return `${name}さん。`;
//   }
// });
// console.log(newNameArr);
