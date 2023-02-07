// 1.
function isLGSeven(number){
    const sum = number - 7;
    if( sum < 7  ){
       console.log(sum);
   }
   else{
    const total = sum * 2;
    console.log(total)
     }
   }
isLGSeven(20);
// ............................... 
// 2.
function evenOdd(banglaSong){
    if(banglaSong.length % 2==0){ 
        console.log('even');
    }
    else{
        console.log('odd');
    }
}
evenOdd('tumi bondu kala pakhi  ');
// ............................. 
// 3.
function isLGSeven(number){
    const sum = number - 7;
    if( sum < 7){
       console.log(sum);
   }
   else{
    const total = sum * 2;
    console.log(total)
     }
   }
isLGSeven(15);
// ............................. 
// 4.
const ageNumber = [17,19,-20,-71,-32,-40,-42];
function findinBadData(age){
    const badData = [];
    for(let i = 0 ; i<age.length; i++){
        if(age[i] < 0){
           badData.push(age[i]);
        }
    }
    return badData;
}
const badValue = findinBadData(ageNumber);
console.log(badValue.length);
// ............................... 
// 5.
function gemsToDiamond(friends1Gems,friends2Gems,friends3Gems){

    const friends1Diamond = friends1Gems * 21;
    const friends2Diamond = friends2Gems * 32;
    const friends3Diamond = friends3Gems * 43;
const totalDiamond = friends1Diamond + friends2Diamond + friends3Diamond;
if(totalDiamond < 1000 * 2 && typeof friends1Gems =="number" && typeof friends2Gems =="number" && typeof friends3Gems =="number" ){
    console.log(totalDiamond)
}
else if(totalDiamond >= 1000 * 2){
    const newtotalDiamond = totalDiamond - 2000;
    console.log(newtotalDiamond)
}
else{
    console.log('please enter a number inpute value');
}
}
gemsToDiamond(20,15,52);
// ............................... 








