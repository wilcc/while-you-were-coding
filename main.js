// ##### Introduction #####
//
// The below assignment will require NO functions, except for the challenge banner function in number 1.
//
// Instead, our focus is going to be on console.logging the characters at certain indices of strings.
//



// ##### Challenges #####

// 1.
//
// Write a function that takes in a parameter and prints the string below, with the given paramter place of the $ symbol.
// 
// ###### Challenge $ #####
//
// Call it before EVERY challenge below!
//
// Even though we'll USUALLY be calling this function with a number indicating the challenge we're on, THIS TIME call it with the parameter 'Banner Function Works!'. You should see the below result:
//
// ###### Challenge Banner Function Works! #####
function bannerMaker($){
    console.log(`###### Challenge ${$} #####`)
}
bannerMaker('banner function works')

// 2.
//
// Console out the numbers from 1-20, but only if they're divisible by 3.

// Use `if` and a modulus operation.
let num = 1
let n = 20
while (num <= n){
    if (num % 3 === 0)
    console.log(num)
    num++
}
bannerMaker('3')
// 3.
//
// Same problem as #2, but no `if`s, `mods`, or `but`s (and no, `but` is not a JavaScript tool). There may be more ways to solve this problem without `if` or `%` (there usually are in JavaScript!), but if you did it the way we did, you should run the loop 6 times with console log per loop iteration.
num = 3
n = 20
while (num <= n){
    console.log(num)
    num = num +3
}

bannerMaker(4)
// 4.
//
// Console out the numbers from 1-20. BACKWARDS.
num = 1
n = 20
while (num <= n){
    console.log(n)
    n--
}
bannerMaker(5)
// 5.
//
// For the string 'Boy howdy am I good at this!', console out the letters
// individually.
num = 0
let str = 'Boy howdy am I good at this!'
while (num < str.length){
    console.log(str[num])
    num++
}
bannerMaker(6)
// 6.
//
// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.
num = 1
str = 'And getting better every day.'
while (num < str.length){
    console.log(str[num])
    num = num + 3
}
bannerMaker(7)
// 7. 
//
// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.
str = 'Am I the best?'
num = 0
// let upCaseStr = str.toUpperCase
for (let i = 0; i < str.length ; i++ ){
    console.log(str[i].toUpperCase())

}
// while (num < str.length){
    
//     console.log(upCaseStr[num])
//     num = num + 1
// }
bannerMaker(8)
// 8.
//
// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.
str = 'Whoa, I am the best!'
num = 0
let space = 0

while (num < str.length){
    if (str[num] === ' '){ 
    space = space + 1
    console.log(str[num])
}  
    else if(space === 2){
    console.log(str[num].toUpperCase())
}
    else if(space !== 2){
        console.log(str[num])
}
    num = num + 1
       // if (str[num] === 'a' && str[num+1] === 'm'|| str[num] === 'm')
    
    // if (str[num] === 'm')
    // {console.log(str[num].toUpperCase())

//  } 
}
bannerMaker(9)
// 9.
//
// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.
str = 'I am become death, destroyer of worlds.'
for (let i = str.length-1; i >= 0;i--){
    console.log(str[i])
}
bannerMaker(10)
// 10.
//
const names = 'Colin|Mesuara|Denis|Wilson|Michael|Patrick|DeAundre|Jumary|Marc|Bogdan|Sharod|David|LaToddra|Carlos';

// Console out the individual letters of each person in class today, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!


for (let i = -1; i < names.length; i ++){
    if (i === -1){console.log('Here today is:')}
    else if (names[i]==='|'){
        console.log('Here today is:')
    }else 
    console.log(names[i])
    
    
}

// 11.
//
// There is no 11. Celebrate! You did it!
