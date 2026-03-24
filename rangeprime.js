1.
function primeNumbers() {
    let n=100
    for(let i=1;i<n;i++){
    if(isvalid(i))
        console.log(i);
}

}
primeNumbers()
function isvalid(n){
    for(let i=2;i<n/2;i++){
        if(n%i===0){
            return false
        }  
    }
    return true
}
2.
function primeNumbers() {
    let n=100
    for(let i=1;i<n;i++){
    if(isvalid(i))
        console.log(i);
}

}
primeNumbers()
function isvalid(n){
    for(let i=2;i<n;i++){
        if(n%i===0){
            return false
        }  
    }
    return true
}


3.
function primeNumbers() {
    let n=100
    for(let i=1;i<n;i++){
    if(isvalid(i))
        console.log(i);
}

}
primeNumbers()
function isvalid(n){
    for(let i=2;i<Math.sqrt(n);i++){
        if(n%i===0){
            return false
        }  
    }
    return true
}


4.
function prime() {
    let n = 10
    for (let i = 2; i < n; i++) {
        let isprime = true
        for (let j = 2; j < i; j++) {           
            if (i === 2) {
                isprime = true               
            }
            else if ( i % j === 0) {
                isprime = false
                break    
            }  
    }
    if (isprime) console.log(i);
}
}
prime()