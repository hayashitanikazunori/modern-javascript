import "./styles.css";

// const（定数）は上書きできないが、プロパティ（中身）は上書きしたり、追加ができる。
const val1 = {
  name: "hayashitan",
  age: "26"
};
console.log(val1);

val1.name = "kazunori";
console.log(val1.name);

val1.addres = "Tokyo";
console.log(val1);

const val2 = ["dog", "cat"];
console.log(val2);

val2[0] = "snake";
console.log(val2[0]);

val2.push("bird");
console.log(val2);

/**
 * アロー関数
 */
// 従来の関数
function func1(str) {
  return str;
}
console.log(func1("func1です"));

// アロー関数
const func2 = (str) => str;
console.log(func2("func2です"));

const func3 = (num1, num2) => num1 + num2;
console.log(10, 20);

/**
 * 分割代入
 */
const myProfile = {
  name: "kazunori",
  age: 26
};
const message = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message);

const { name, age } = myProfile;
const message2 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message2);
