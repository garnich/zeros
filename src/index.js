module.exports = function getZerosCount(number) {

  //var numb;
  // var t,z,h;
  // var p=0, k=0;
  // var res = [];
  // for (i = 1; i<=number; i++){
  //     t=i;
  //     while(t%5==0){
  //       p++;
  //       t = Math.floor(t/5);}}
  //
  // return p;

  //var number = 36625114;  //9156272

  var m, f, t;
  var z = 0;
  m =  Math.floor(Math.log(number)) / Math.floor(Math.log(5));

  var t = 0;
  for(var i=1; i<=m; i++){
    f = Math.pow(5,i);
    z = z + Math.floor(number/f);
  }
  return z;

    // вариант по материалам с сайта http://www.smekalka.pp.ru/math/answer_math_calc_12.html
  // var f = number;
  // var n = 1;
  // var a;
  // var b = 0;
  // 
  // for (n; n<=f/5; n++){
  //   a = f/Math.pow(5,n);
  // 
  //     if(a>=1){
  //       b = b + Math.floor(a);}
  //   }
  //   console.log(b);
  //   return b;
  
  
  
  // your implementation
}
