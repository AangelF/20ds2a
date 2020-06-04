
function factorial (n){
    let i=1,f=1
    for(; i<=n; i++){
	f=f*i
    }
    return f
}

function permutacion (n,r){
    let perm=0, res=0, fact=0, n1=0, r1=0
    res=n-r
    n1=factorial(n)
    r1=factorial(res)
    perm=n1/r1
    return perm
}


console.log(permutacion(8,3))
console.log('done..')



