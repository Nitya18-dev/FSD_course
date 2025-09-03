// var n=5;
// function arr(num){
//     var ans =num * num;
//     return ans;
//     // console.log(ans)
// }

// var v1=arr(n);
// var v2=arr(4);

var n = 20;
var b = 30;
function add(num, num1) {
  var sum = num + num1;
  function multi(num) {
    var multi = num * num;
    console.log(multi);
    return multi;
  }
  multi(b);
  console.log(sum);
}
add(n, b);
