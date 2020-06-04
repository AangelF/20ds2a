function radio(a,b,c){
    let r,r1,s,r2
    s=(1/2)*(a+b+c); 
    r1=(s)*((s-a)*(s-b)*(s-c));
    r2=Math.sqrt(r1)/s;
    return r2;
}

console.log(radio(5,6,7));



