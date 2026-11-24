const prompt = require('prompt-sync')({})
let n = parseInt(prompt("Masukkan jumlah perkalian:"))
for (let i = 1; i <= 5; i++) {
  let baris = ""
  for (let j = 1; j <= n; j++) {
    baris += `${j} x ${i} = ${j * i}\t`
  }
  console.log(baris);
}