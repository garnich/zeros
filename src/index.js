module.exports = function getZerosCount(number) {

  //var numb;
  var t,z,h;
  var p=0, k=0;
  var res = [];
  var re = /0+$/g;
  for (i = 1; i<=number; i++){
      t=i;
      while(t%5==0){
        p++;
        t = Math.trunc(t/5);}}

  return p;

  // your implementation
}
