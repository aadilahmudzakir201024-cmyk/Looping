let teks = ''
for (let i = 1; i <= 5; i++){
    teks += i + ' '
    teks += i == 5 ? ' = ' : ' + '
}
    console.log(teks + '15')