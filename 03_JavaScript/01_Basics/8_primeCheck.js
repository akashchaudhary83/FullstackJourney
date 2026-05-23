let n = 7;
let isprime = true;
for(let i=2;i<n;i++){
    if(n%i ===0){
        isprime = false;
        break;
    }
}
if(isprime){
    console.log(" prime");
    
}else{
    console.log(" not prime");

}