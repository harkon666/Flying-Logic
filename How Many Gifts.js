/**

How Many Gifts
==============

Anastasia meminta Sergei untuk membeli daftar oleh-oleh saat trip berikutnya, sekarang Sergei ingin tahu berapa jumlah oleh-oleh PALING BANYAK yang bisa dia beli.

Implementasikan function dibawah untuk membantu Sergei:

function howManyGifts(maxBudget, gifts)
  Parameter pertama adalah budget Sergei, yang kedua adalah sebuah Array yang berisi harga setiap oleh-oleh. Function ini harus mengembalikan nilai yang mewakili jumlah maksimum oleh-oleh yang Sergei dapat beli.


Contoh:
Maximum budget: 25000
Daftar harga oleh-oleh: [20000, 5000, 10000, 6000, 4000 ]
Maka akan mengembalikan 4 karena bisa membeli oleh-oleh dengan harga 5000, 10000, 6000, 4000

Asumsi:
- Semua angka akan memiliki nilai >= 0, dan array tidak akan pernah kosong.

RULE:
 WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

*/
/*PSEUDOCODE
jadi akan ada dua loop untuk menentukan jumlah terbanyak oleh-oleh yang bisa dibeli
loop pertama untuk perulangan total yang akan selalu menjadi 0 kalau di ulang lalu
  if total > result maka result = total .... dengan if statement ini, program bisa menggunakan budget
  dengan efisien
loop kedua untuk menentukan total ada berapa dan ketika angka loop pertama dan kedua itu sama.. maka loop
  kedua tidak akan menghitung angka tersebut dan memilih untuk mengulang kembali

dengan contoh if (i === 3) {continue}

sehingga akan ada salah satu oleh oleh yang ga akan dipilih.


  RETURN TOTAL BARANG
*/

function howManyGifts(maxBudget, gifts) {
  //var result untuk menentukan berapa gifts yang bisa dibeli
  var result = 0

  //kalau maxbudget 0 ya ga bisa beli lah
  if (maxBudget === 0) {
    return 0
  }

  //loop untuk menentukan berapa gift yang bisa dibeli
  for (var i = 0; i < gifts.length; i++) {
    var total = 0
    var budget = maxBudget
    for (var j = gifts.length - 1; j >= 0; j--) {
      if ( j === i) {
        continue
      }
      budget -= gifts[j]
      total += 1
      if (budget < 0) {
        budget += gifts[j]
        total -= 1
      }
    }

    if (total > result) {
      result = total
    }
  }
  return result

}

console.log(howManyGifts(30000, [15000, 12000, 5000, 3000, 10000])); // 4
console.log(howManyGifts(10000, [2000, 2000, 3000, 1000, 2000, 10000])); // 5
console.log(howManyGifts(4000, [7500, 1500, 2000, 3000])); // 2
console.log(howManyGifts(50000, [25000, 25000, 10000, 15000])); // 3
console.log(howManyGifts(0, [10000, 3000])); // 0