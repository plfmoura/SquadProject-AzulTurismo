const array = [1,2,3,4,1,2,5,4,7,6,3,1,2]

let number = 10
for(let i = 1; i <= number; i++){
    array.push(i)
}

var novaArr = array.filter(function(este, i) {
    return array.indexOf(este) === i;
    }
)

console.log(novaArr)