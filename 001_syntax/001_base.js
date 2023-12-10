/**
 *  1.1 Hello Worldという文字を出力するメソッドを定義してください
 *
 */
function helloWorld() {
  console.log("helloWorld")
}
helloWorld()
//helloWorld

/**
 *  1.2 const を使って"hoge"という文字列を定義した変数を定義し、それを出力する関数を定義してください
 *
 */
function displayConst(ho) {
  return ho;
}
const hogo = displayConst("hoge")
console.log(hogo);
//hoge


//めもですーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
/**return文の使い方
 * 
  function hello(name){
    return 'こんにちは、' + name + 'さん。';
  }
  console.log(hello('桜井')); // コンソールには「こんにちは、桜井さん。」が出力


function hello(name){
  return 'こんにちは、' + name + 'さん。';
}
var message = hello('杉田');
console.log(message); // コンソールには「こんにちは、杉田さん。」が出力
 */
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


/**
 *  1.3 let を使って"hoge"という文字列を定義した変数を定義し、それを出力する関数を定義してください
 *
 */
function displayLet(ho) {
    return ho;
}
  let hog = displayLet("hoge")
  console.log(hog);
//hoge



  //めもですーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
/*
function addPrefix(text, prefix = "デフォルト:") {
  return prefix + text;
}
// falsyな値を渡してもデフォルト値は代入されない
console.log(addPrefix("文字列")); // => "デフォルト:文字列"
console.log(addPrefix("文字列", "")); // => "文字列"
console.log(addPrefix("文字列", "カスタム:")); // => "カスタム:文字列"


function addPrefix(text, prefix = "デフォルト:") {
  return prefix + text;
}
console.log(addPrefix("")); // => "カスタム:文字列"
→デフォルト:
 */
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー


/**
 *  1.4 引数に渡した変数を表示するメソッドを実装してください
 *
 */
function displayArgument(arg = "チキン") {
  return arg;
}
displayArgument()
//'チキン'


/**
 *  1.5 渡された二つの引数の合計を返却するメソッドを実装してください
 *
 */
function sumTwoArgs(a, b) {
  return a + b ;
}
sumTwoArgs(1,2);
//3

/**
 *  1.6 渡された二つの引数の差を返却するメソッドを実装してください
 *
 */
function subtractTwoArgs(a, b) {
  return a - b ;
}
subtractTwoArgs(7,2);
//5

/**
 *  1.7 渡された二つの引数の商を返却するメソッドを実装してください。0での割り算はnullを返却してください。
 *
 */
function quotientTwoArgs(a, b) {
  return a / b ;
}
quotientTwoArgs(49,7);
//7

/**
 *  1.8 渡された二つの引数の積を返却するメソッドを実装してください
 *
 */
function productTwoArgs(a, b) {
  return a * b ;
}
productTwoArgs(7,7);
//49

/**
 *  1.9 渡された引数の2で割ったあまりを返却するメソッドを実装してください
 *
 */
function remainderTwoArgs(a) {
  return a % 2 ;
}
remainderTwoArgs(7)
//1

/**
 *  1.10 渡された引数が2の倍数であることを確認するメソッドを実装してください
 *
 */
function isEven(a) {
  if ( a % 2 === 0) {
    return "2の倍数です";
  } 
  return "2の倍数ではない";
}
isEven(7)
//'2の倍数ではない'


/**
 *  1.11 渡された二つの文字列を連結するメソッドを実装してください
 *
 */
function concatString(a, b) {
  return a + b;
}
concatString("内田","さん")
//'内田さん'



module.exports = {
  helloWorld,
  displayConst,
  displayLet,
  displayArgument,
  sumTwoArgs,
  subtractTwoArgs,
  quotientTwoArgs,
  productTwoArgs,
  remainderTwoArgs,
  isEven,
  concatString
}
