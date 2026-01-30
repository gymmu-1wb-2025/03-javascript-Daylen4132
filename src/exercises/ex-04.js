const weight = Number(process.argv[2]);
const heightCm = Number(process.argv[3]);

const heightM = heightCm / 100;
const bmi = weight / (heightM * heightM);

console.log(`Dein BMI ist ${bmi}.`);
