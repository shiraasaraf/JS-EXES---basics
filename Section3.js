


let carArrey = {BMW: 100, Mercedes: 30, BYD: 10, Chery: 110, Tesla: 170, Mazda: 150 }
 
 function mapFilter(carArrey){

    let result = Object.keys(carArrey)
    .filter(car => carArrey[car] > 80)
    .map(car => `${car}: ${carArrey[car]}`)

    console.log(result)

 }

mapFilter(carArrey)