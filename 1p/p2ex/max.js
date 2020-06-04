let anArray =[2,3,13,4,1,9,8,4];
let max=anArray[0];
for(let x of anArray){
    if(x>=max){
      max=x;
    }
}
console.log(max);
