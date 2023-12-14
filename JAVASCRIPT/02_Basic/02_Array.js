const marvel_heros = ["Thor","Ironman","Captain America"]
const dc_heros =["Batman","Superman","Flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros[3][0]);

//  const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const allHeros = [...marvel_heros,...dc_heros]

// console.log(allHeros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array)


console.log(Array.isArray("iqbal"))
console.log(Array.from("iqbal"))
console.log(Array.from({name:"iqbal"})) //intersting case 


let score1 =243
let score2 = 3445
let score3 = 787

console.log(Array.of(score1,score2,score3));
