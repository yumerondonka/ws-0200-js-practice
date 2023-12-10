/**
 *  3.1 0~10までを表示するメソッドを実装してください
 *
 */

function printOneToTen() {
  console.log([0,1,2,3,4,5,6,7,8,9,10])
}
printOneToTen()
//(11) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


/**
 *  3.2 0~10までの数字を数字の大きい順に表示するメソッドを実装してください
 * */

function printOneToTenDesc(x,y) {
  return y - x;
}
var num = [0,1,2,3,4,5,6,7,8,9,10];
num.sort(printOneToTenDesc);
console.log(num);
//(11) [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

/**
 *  3.3 while文を使って0~10までの数字を小さい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhile(count) {
  while(count<=10){
    console.log(count);
    count++;
  }
}
printOneToTenWhile(0)
/*
printOneToTenWhile(0)
VM282:3 0
VM282:3 1
VM282:3 2
VM282:3 3
VM282:3 4
VM282:3 5
VM282:3 6
VM282:3 7
VM282:3 8
VM282:3 9
VM282:3 10
*/

/**
 *  3.4 while文を使って0~10までの数字を大きい順番に表示するメソッドを実装してください
 *
 */

function printOneToTenWhileDesc(count) {
  while(count<=10){
    if(count<=0){//
      break;//while文を強制終了する。
    }
    console.log(count);　
    count--;
  }
}
printOneToTenWhileDesc(10)
/*
printOneToTenWhileDesc(10)
VM318:6 10
VM318:6 9
VM318:6 8
VM318:6 7
VM318:6 6
VM318:6 5
VM318:6 4
VM318:6 3
VM318:6 2
VM318:6 1
*/



module.exports = {
  printOneToTen,
  printOneToTenDesc,
  printOneToTenWhile,
  printOneToTenWhileDesc
}
