function potencia(base,exponente){
    let p=1;
    for(let i=0; i<exponente; i++){
	p=base*p;
    }
    return p
}

console.log(potencia(2,3))
