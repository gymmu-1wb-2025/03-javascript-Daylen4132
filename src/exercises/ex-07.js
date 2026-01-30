const mynumber = Number(process.argv[2]);
const remainder = mynumber % Number(process.argv[3]);

if (remainder === 0) {
  console.log("The number is divisible by [" + Number(process.argv[3]) + "].");
} else {
  console.log("The number is not divisible by [" + Number(process.argv[3]) + "].");
}