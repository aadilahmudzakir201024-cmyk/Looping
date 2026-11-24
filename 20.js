const prompt = require('prompt-sync')({})
let n = parseInt(prompt("Masukkan Jumlah Perkalian:"))
let header = "\t"
for (let h = 1; h <= n; h++) {
  header += h + "\t"
}
console.log(header);

for (let i = 1; i <= n; i++) {
  let baris = i + "\t"
  for (let j = 1; j <= n; j++) {
    baris += (i * j) + "\t"
  }
  console.log(baris)
}