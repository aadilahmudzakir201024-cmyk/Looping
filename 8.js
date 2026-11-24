let teks = ''
for (let i = 2; i <= 10; i+=2) {
    teks += i + ' '
    teks += i == 10 ? ' = ' : ' + '}
console.log(teks + ' 30')