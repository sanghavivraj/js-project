const name ="vraj"
const repocount=50

// console.log(name+repocount) // this is the outdated techniqe which is not readable as the coder view

console.log(`heelo my name is ${name} and repo count is ${repocount}`)

const gameName=new String("vraj sanghavi")

console.log(gameName[0])
console.log(gameName.length)
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'))


const newstring=gameName.substring(0,5)
console.log(newstring)

const secstring=gameName.slice(-13,2)
console.log(secstring)

//trim
const word="  vraj   "
console.log(word)
console.log(word.trim())

//replace
const url="http://vraj.com%20cod"
console.log(url.replace('%20', '//*'))

console.log(url.includes('vraj'))






