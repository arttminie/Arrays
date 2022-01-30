// 1

function info(nome, idade, comida) {
    console.log(`Meu nome é ${nome} e tenho ${idade} anos, minha comida preferida é ${comida}`)
}
info("Brenda", 18, "lasanha")


// 2

let languages = ["Inglês", "Italiano", "Javascript", "Python"]

languages.unshift("C")
console.log(languages)

languages.pop()
console.log(languages)

languages.push("Português", "Mandarim")
console.log(languages)

languages.shift()
console.log(languages)

// 3

let numbers = [7,5,6,3,8,9,2,1,4]

numbers.sort()
console.log(numbers)