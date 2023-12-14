/**
 *  5.1 配列の要素を全て表示するメソッドを実装してください
 *
 */

/*function printArray(array) {
  return array;
}
const ar =  printArray(['イチゴ','ミカン','モモ']);
console.log(ar);
//(3) ['イチゴ', 'ミカン', 'モモ']
 */

function printArray(array) {
  return array;
}
//printArray(['イチゴ','ミカン','モモ'])

/**
 *  5.2 関数内で全ての曜日を配列として宣言して返却するメソッドを実装してください
 *
 *  example:
 *     [
 *       "Monday",
 *       "Tuesday",
 *       "Wednesday",
 *       "Thursday",
 *       "Friday",
 *       "Saturday",
 *       "Sunday",
 *      ]
 *
 */


function getDays() {
  const get = [ "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",];
  return get;
}
//console.log(getDays());
//(7) ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

/**
 *  5.3 配列に特定の数があった場合にtrue、そうでない場合にfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3], 1 => true
 *    [1, 2, 3], 5 => false
 *    [], 5 => false
 *
 */

function findNum(array, num){
  if (array==[1,2,3] && num===1){
    return true;
  }else{
      return false;
    }
}
//findNum([1,2,3], 1)
//false


function findNum(array, num){
  if (array===2 && num===1){
    return true;
  }else{
      return false;
    }
}
findNum(2, 1)
//true


/**
 *  5.4 配列に重複した要素があれば、true、そうでなければfalseを返す関数を実装してください
 *
 *  example:
 *    [1, 2, 3] => false
 *    [1, 2, 2, 3] => true
 *    [] => false
 *
 */

function isDuplicate(array) {
}

module.exports = {
  printArray,
  getDays,
  findNum,
  isDuplicate
}
