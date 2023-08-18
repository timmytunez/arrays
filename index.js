// var movies = ['jagunjagun', 'wednesday', 'acrimony', 'gifted hande', 'batman', 'ironman', 'spiderverse']
// console.log(movies)
// movies.push('fast-x')
// console.log(movies)
// movies.shift()
// console.log(movies)
// movies.pop()
// console.log(movies)
// movies.unshift('back')
// console.log(movies.length)
// movies.join('*')
// console.log(movies)
// movies.join(' * ')
// console.log(movies)
// movies.join('*');
// console.log(movies)

// var Person = {
//     name: 'Emma Dangote',
//     gender: 'Trans',
//     job: 'BDC',
//     age: 55,
//     nowd: 28,
//     wpd: 5000,
//     hobbies: ['coding', 'sleep', 'food']
// }
// console.log(Person)
// console.log(Person.name)
// console.log(Person.gender)
// console.name= 'male'
// console.log(Person)
// Person.gender = 'male'
// console.log(Person)
// console.log(Person.hobbies[1])
// Person.hobbies[1]= 'travelling'
// console.log(Person)
// delete Person.hobbies
// console.log(Person)

// function declaration

// function profitCalculator(cp,sp){
//     return  sp-cp
// }
// profitCalculator(5000000,11000000)
// console.log(profitCalculator(5000000,11000000))

// function ageCalculator(cy,bod){
//     return cy-bod
// }
// ageCalculator(2023,2002)
// console.log(ageCalculator(2023,2002)
// )

// function text(n){
//     return n/5
// }
// text(256)
// console.log(text(256))

// // function expression

// var cube = function(n){
//     return n**2
// }
// cube(4)
// console.log(cube(4))

// function sellTicket(age){
//     if(age <= 18 ){
//         return console.log('sell ticket for 50% off')
//     }

//     else{
//         return console.log('sell ticket for 100% price')
//     }
// }

// console.log(sellTicket(16))
// console.log(sellTicket(34))

// function timeCalculator(time) {
//     if(time <= 8){
//         return console.log('Goodmoring')
//     }
//     else{
//         return console.log('Good day')
//     }
// }

// console.log(timeCalculator(8))

// console.log(timeCalculator(4))

// console.log(timeCalculator(9))


// function buyTickets(age){
//     if(age <= 6){
//         return console.log('sell ticket for 500naira')
//     }
//     else if (age == 7 && age <= 12) {
//         return console.log( 'sell tickets for 100naira')
//     }
//     else if(age >= 13 && age <= 17){
//         return console.log('sell ticket for 1500naira')
//     }
//     else{
//         return console.log('sell ticket for 2500naira')
//     }
// }

console.log(buyTickets(4))
console.log(buyTickets(11))
console.log(buyTickets(15))
console.log(buyTickets(20))

function  busTickets(job){
    if(job == 'millitary' &&  'pregnant'){
        return console.log('30% off')
    }
    else if(job == 'staff' && 'doctors'){
        return console.log('50% off')
    }
    else if (job == 'student' && 'disables'){
        return console.log ('100%')
    }
    else{
        return console.log ('0%')
    }     
    
}

console.log(busTickets(pregnant))
console.log(busTickets(millitary))
console.log(busTickets(disable))
console.log(busTickets(student))
console.log(busTickets(disable))
console.log(busTickets(doctors))




