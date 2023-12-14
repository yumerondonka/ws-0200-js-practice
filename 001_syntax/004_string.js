/**
 *  4.1 文字列の長さを返却するメソッドを実装してください
 *
 */

/*function length(str) {
  return str;
}
const ai = length("あいうえお");
console.log(ai.length)
//5 */


function length(str) {
  console.log(str.length);
}
//length("あいうえお")
//5


/**
 *  4.2 文字列のながさが偶数の場合にtrueを返却するメソッドを実装してください
 *
 */

function lengthIsEven(str) {
  if(str % 2===0){
    console.log(true);
  }else if(str % 2=== 1){
    console.log(false);
  }
}
//lengthIsEven(27)
//false

//どっち？？？？？

function func(n) {
  return n % 2 == 0 ? true : false;
}
func(26)
//true



//めもですーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
/*substr()
substr(開始位置, 終了位置)とすることで、開始位置から終了位置までの文字を切り出すことができる。

JavaScriptで先頭・末尾の文字列を取得・削除する方法
https://kinocolog.com/javascript_first_last_slice/
*/
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

/**
 *  4.3 文字列の先頭一文字目を返却するメソッドを実装してください
 *
 */

/*function firstChar(str) {
  return str;
}
const fi = firstChar("あいうえおかきくけこ");
console.log(fi.at(0));
//あ */

function firstChar(str) {
  console.log(str.charAt(0))
}
//firstChar("あいうえおかきくけこ")
//あ


//めもですーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
/*const str2 = str.slice(0, 1);
console.log(str2);
//あ */
//ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

/**
 *  4.4 文字列の末尾一文字目を返却するメソッドを実装してください
 *
 */

function lastChar(str) {
  console.log(str.charAt(a.length - 1));
}
//lastChar("あいうえおかきくけこ")
//こ


/*function lastChar(str) {
  return str;
}
lastChar("総合Q&Aランキング");
const la = lastChar("総合Q&Aランキング");
console.log(la.at(-1));
//グ*/



/**
 *  4.5 文字列と二つの数字a, bを渡すとa文字目から, b文字目まで
 *  を返却するメソッドを実装してください
 *
 */

/*function substring(str, a, b) {
  return str, a, b
}
const ab = substring("aaaaaaa",2, 4);

console.log(ab)
//わかりません */

function substring(str, a, b) {
  //str = "総合Q&Aランキング" ; a,b=str.substr(0,4);
  const ho = str.substr(a,b);
  console.log(ho);
}
substring("総合Q&Aランキング" ,1,3)
//合Q&



/**
 *  4.6 引数に与えられた二つの引数のうち、一つ目の引数の文字列に二つ目の引数の文字列が
 *  含まれることを確認するメソッドを実装してください
 *
 *  example:
 *      "workplace", "work" => true
 *      "work", "workplace" => false
 *      "hogehoge", "" => true
 *      "hogegeho", "fugafuga" => false
 * */

/*
function isInclude(a, b) {
  return a == b ? true : false;
}
isInclude( "workplace", "work")
//わかりません*/

function isInclude(a, b) {
  if (a.includes(b)){
    return true
  }else{
    return false
  }
}
//isInclude("workplace", "huga")
//true



/*例
let text = '庭には二羽鶏がいる'

let result1 = text.includes('鶏')
let result2 = text.includes('りんご')

console.log(result1) // true
console.log(result2) // false
*/



/**
 *  4.7 引数で渡された文字列を一文字ずつ表示するメソッドを実装してください
 *
 * example:
 *   'library'
 *    出力 => 'l'
 *           'i'
 *           'b'
 *           'r'
 *           'a'
 *           'r'
 *           'y'
 *
 */

//分からない
function printByChar(str) {
  for(str.charAt(0) ; i >str.charAt(0); i++){
    console.log(i)
  }
  }
printByChar('library')



module.exports = {
  length,
  lengthIsEven,
  firstChar,
  lastChar,
  substring,
  isInclude,
  printByChar
}
