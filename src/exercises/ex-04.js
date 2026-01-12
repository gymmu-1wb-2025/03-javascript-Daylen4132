const myweight = Number(process.argv[2]);
const myheight = Number(process.argv[3]);
const bmi = (myweight / (myheight * myheight)).toFixed(2);

console.log(`Dein BMI ist ${bmi}.`);