module.exports = function toReadable (number) {
  let Arr1 = ['one','two','three','four','five','six','seven','eight','nine'];
  let Arr2 = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let Arr3 = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  let hundredStr = 'hundred';
  let resultStr='';
  if(number == 0){
      return 'zero';
  }
  if(number>0 && number< 10){
      for(let i=0;i<number;i++){
          resultStr=Arr1[i];
      }
  }
  if(number>10 && number<20){
    for(let i=0;i<number-10;i++){
        resultStr=Arr2[i];
    }
  }
  if(number>20 && number<100){
    resultStr = Arr3[Math.floor(number/10)-1] + ' ' + Arr1[number%10 -1 ];
  }
  if( number%10 == 0 && number%10 <100){
    for(let i=0;i<number/10;i++){
        resultStr=Arr3[i];
    }
  }
  if(number>100 && number <1000){
    resultStr =Arr1[Math.floor(number/100)-1] + ' ' + hundredStr + ' ' + Arr3[Math.floor((number%100)/10-1)] + ' ' + Arr1[number%10 -1 ];
  }
  if(number>100 && number <1000 && number%10 == 0){
    resultStr =Arr1[Math.floor(number/100)-1] + ' ' + hundredStr + ' ' + Arr3[(number%100)/10-1];
  }
  if(number > 100 && number < 110 || number>200 && number<210 || number >300 && number<310 || number >400 && number< 410 || number>500 && number <510 || number>600 && number<610 || number > 700 & number <710 ||number >800 && number <810 || number > 900 && number<910){
    resultStr = Arr1[Math.floor(number/100)-1] + ' ' + hundredStr + ' ' + Arr1[(number%100)%10 -1];
  }
  if(number > 110 && number < 120 || number>210 && number<220 || number >310 && number<320 || number >410 && number< 420 || number>510 && number <520 || number>610 && number<620 || number > 710 & number <720 ||number >810 && number <820 || number > 910 && number<920){
    resultStr = Arr1[Math.floor(number/100)-1] + ' ' + hundredStr + ' ' + Arr2[(number%100)%10 -1];
  }
  if(number%100 == 0){
    for(let i=0;i<number/100;i++){
        resultStr=Arr1[i] + ' '+ hundredStr;
    }
  }
  return resultStr;
}
//console.log(toReadable(900));