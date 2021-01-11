function avg(){
    let sum = 0;
    let array = [5,10,15,20,25]
    for(let i=0;i<array.length;i++){
        sum+=array[i]
    }
    document.write(`average ${sum/array.length}`)
}
avg();