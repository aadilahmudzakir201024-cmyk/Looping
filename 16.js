let teks = '';

for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= 5 - i; j++) {
        teks += ' ';
    }

    for (let k = 1; k <= (2 * i) - 1; k++) {
        teks += '*';
    }

    teks += '\n';
}


let teks2 = '';

for (let i = 4; i >= 1; i--) {

    for (let j = 1; j <= 5 - i; j++) {
        teks2 += ' ';
    }

    for (let k = 1; k <= (2 * i) - 1; k++) {
        teks2 += '*';
    }

    teks2 += '\n';
}

console.log(teks + teks2);