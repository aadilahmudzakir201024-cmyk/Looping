const prompt = require('prompt-sync')({})
let n = Number(prompt("Masukkan banyaknya nilai:"))
let jumlah = 0

for (let i = 1; i <= n; i++) {
  let nilai = parseFloat(prompt(`Masukkan nilai ke-${i}:`))
  jumlah += nilai
}

if (n > 0) {
  console.log("Jumlah nilai    :" + jumlah)
  console.log("Rata-rata nilai :" + jumlah / n)
}