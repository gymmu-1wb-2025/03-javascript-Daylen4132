const bodyHeight = Number(process.argv[2]);
const talentScore = Number(243-bodyHeight);

if (talentScore < 50) {
    console.log(`Du hast sehr viel Potenzial`);
} else if (50 <= talentScore && talentScore < 60) {
    console.log(`Du musst dringend an deiner Sprungkraft arbeiten.`);
} else if (60 <= talentScore && talentScore < 70) {
    console.log(`Wenn du schnell bist, kannst du dir die Libero-Position überlegen.`);
} else if (70 <= talentScore) {
    console.log(`Du wirst im Volleyball nicht glücklich werden.`);
}
