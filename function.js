
// addBoth()

function power(a, b){
    return Math.pow(a,b)
}

function sumOfArr(arr){
    return arr.reduce((z,b)=>z+b)
}

function capitalise(str){
    str = str.toLowerCase()
    str = str.replace(srt[0], str[0].toUpperCase())
    return str
}

function addTen(x){
    return x + 10
}

function addTenToArr(arr){
    return arr.map(addTen)
}

function five(y){
    return y % 5 === 0
}
function multipleOfFive(arr){
    return arr.filter(five)
}