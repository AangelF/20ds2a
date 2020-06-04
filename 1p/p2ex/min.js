let anArray =[2,3,13,4,1,9,8,4];
let min=anArray[0];
for(let x of anArray){
    if(x<=min){
      min=x;
    }
}
console.log(min);
