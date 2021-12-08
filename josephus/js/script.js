function countdown(arr,N,K,i){
    console.log(i);
    console.log(K);
    console.log(arr.length)
    console.log((i+K)%arr.length);
    arr.splice((i+K)%arr.length,1);
    i=(i+K)%(arr.length+1);
    console.log(arr);
    if (arr.length===1) return arr[0];
    return countdown(arr,N,K,i)
}
let N=prompt("Введите количество солдат","10");
let K=Number(prompt("Введите шаг считалочки","3"));
let arr=new Array(N);
for(let i=0;i<N;i++){
    arr[i]=i+1;
}
let i=Math.round(Math.random() * (N - 1)) + 1;
alert("Счёт начался с солдата номера "+i);
alert(countdown(arr,N,K,i-1))
