const numbers = [48, 20, 18, 7, 12,9, 8,10,12, 96, 3,36,51]
function tsnFilter(arr){
    let newArray = []
    for(i=0; i < arr.length; i++){
        if(arr[i] % 3 === 0 && arr[i] % 6 === 0 && arr[i] % 9 != 0){
            newArray.push(arr[i])
        }
    }
    return newArray
}

console.log(tsnFilter(numbers))