let teks1 = '';

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        teks1 += '* ';
    }
    teks1 += '\n';
}

let teks2 = '';

for (let i = 4; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        teks2 += '* ';
    }
    teks2 += '\n';
}

console.log(teks1 + teks2);