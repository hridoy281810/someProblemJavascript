// Assignment 4
// index.js
// first problem solv .....=========
function mindGame(number){
    if(typeof number =="number"){
        const multiplication = number * 3;
     const addition = multiplication + 10;
     const division = addition / 2 ;
     const totalResult = division - 5;
 return totalResult;
    }
    else{
        return 'please enter a number inpute value'
    }
}
const totalResult = mindGame(8)
console.log(totalResult)

//* ............................. 
// first problem discription: First I took a number as input in this function. Multiplying the input number by 3, adding 10, dividing it by 2, and subtracting 5 from it gives the result.
//* ............................. 
// Secound problem solv .....=========
function evenOdd(banglaSong){
    if(banglaSong.length % 2==0 && typeof banglaSong=="string"){ 
        console.log('even');
    }
    else if(banglaSong.length % 2==1 && typeof banglaSong=="string"){
        console.log('odd');
    }
    else{
      console.log('please enter a string inpute value')
    }
}
evenOdd('amar sonar moina pakhi ');
// ............................. 
//* Secound problem discription: This function first takes a string as input. If the number of elements of the string is even or odd, then the result is Even, and if it is odd, then the result is Odd.
//* ............................. 
// Third problem solv .....=========
function isLGSeven(number){
    const sum = number - 7;
    if( sum < 7 && typeof number =="number"){
       console.log(sum);
   }
   else if(sum >= 7 && typeof number =="number"){
    const total = sum * 2;
    console.log(total)
  }
   else{
       console.log('please enter a number inpute value');
     }
   }
isLGSeven(15);
// ............................. 
//* Third problem discription: First I took a number as input in this function. If the result of subtracting 7 from the input number is less than 7, this is the answer and if it is greater than or equal to 7, the result is multiplied by 2.
//* .............................


// Fourth problem solv .....=========
const ageNumber = [17,19,21,-24,-71,32,-34,40,-42];
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
//* ............................. 
// Third problem discription: This function first takes an age array as input. The result is given the number of negative values ​​in this input array..
//* .............................


// Fifth problem solv .....=========
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
gemsToDiamond(21,21,21);
//* ............................. 
// Third problem discription: In this function first I have taken 3 numbers as input in 3 parameters. I have multiplied 21, 32 & 43 with 1st, 2nd, & 3rd numbers. Then all the coefficients are added. If the sum is less than 2000 then this is the result and if it is more then 2000 is subtracted from it and the result is given.
//* .............................