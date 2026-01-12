const weight = Number(process.argv[2]);
const heightCm = Number(process.argv[3]);

const heightM = heightCm / 100;
const bmi = weight / (heightM * heightM);

console.log(`Dein BMI ist ${bmi.toFixed(2)}.`);
console.log(`Das bedeutet, du bist ${
    bmi < 18.5 ? 'untergewichtig'
    : bmi < 24.9 ? 'normalgewichtig'
    : bmi < 29.9 ? 'übergewichtig'
    : 'adipös'
}.`
);