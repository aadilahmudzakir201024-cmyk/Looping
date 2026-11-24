let huruf = ['a', 'b', 'c', 'd', 'e']
let teks = ''
for (let i = 0; i <= 4; i++){
    for (let j = 1; j <= 5; j++) {
        teks += huruf[i] + ' '}
    teks += '\n'
}
console.log(teks)