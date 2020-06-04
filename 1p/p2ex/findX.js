let anArray =[2,3,4,5,6]
let f=false;
for(let x of anArray){
    if(x===8){
	f=true
	break;
    }
}
if(f){
    console.log("encontrado")
}else{
    console.log("no encontrado")
}

