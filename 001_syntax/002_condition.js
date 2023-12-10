/**
 *  2.1 引数から与えられた値が20以上であれば
 *    "成年です。"
 *    それ以外は "未成年です。”
 *    と出力するメソッドを実装してください
 *
 */
function printMessageByAge(age) {
  if ( age >= 20 ) {
    //return "20以上";
    console.log("20以上");}
  else {
  console.log("未成年です。");
  } 
}
printMessageByAge(20)
//20以上

/**
 *  2.2 引数から与えられた時間が
 *    4時から12時より前であれば、 Good Morning
 *    12時から17時より前であれば、 Hello
 *    17時以降であれば、 Good Night
 *    と出力するメソッドを実装してください
 *
 */
function greeding(hour) {
  if(hour < 11){
    console.log("Good Morning");
  }
  else if (hour < 16){
    console.log("Hello");
  }
  else{
    console.log("Good Night");
  }
}
greeding(6)
//Good Morning

/**
 *  2.3 引数から与えられた数字に対応する曜日を返却するメソッドを実装してください
 *    0 ・・・Sunday
 *    1 ・・・Monday
 *    2 ・・・Tuesday
 *    3 ・・・Wednesday
 *    4 ・・・Thursday
 *    5 ・・・Friday
 *    6 ・・・Saturday
 *    と出力するメソッドを実装してください
 *
 */

function getDay(day) {
  if(day===0){
    console.log("Sunday")
  }else if(day===1){
    console.log("Monday")
  }else if(day===2){
    console.log("Tuesday")
  }else if(day===3){
    console.log("Wednesday")
  }else if(day===4){
    console.log("Thursday")
  }else if(day===5){
    console.log("Friday")
  }else if(day===6){
    console.log("Saturday")
  }
}
getDay(0)
//Sunday


module.exports = {
  printMessageByAge,
  greeding,
  getDay
}
