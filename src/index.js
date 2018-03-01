module.exports = function getZerosCount(number) {

  //var numb;
  var t,z,h;
  var p=0, k=0;
  var res = [];
  for (i = 1; i<=number; i++){
      t=i;
      while(t%5==0){
        p++;
        t = Math.floor(t/5);}}

  return p;

  // your implementation
}
