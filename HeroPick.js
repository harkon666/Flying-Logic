/*
	Dalam sebuah game, hero yang dapat dipilih memiliki jenis tertentu
	Dalam game ini satu tim harus memilih 5 heroes yang akan dimainkan
  Disini kamu diminta menampilkan apakah pick hero yang dilakukan tergolong good atau bad dengan kodisi sebagai berikut
  
	good pick : jika dari hero yang di pick tidak memiliki lebih dari 2 tipe hero yang sama
    bad pick : jika dari hero yang di pick ada 3 atau lebih tipe hero yang sama
    pick list : ranger, mage, tank, warrior, atau assassin (cuma ada 5 tipe ini)


  tampilkan apakah good pick atau bad pick dan jenis apa yang lebih dari 2, pesan seperti pada test case

  [RULES]
  1. Wajib menggunakan Algoritma/Pseudocode
  2. Hanya boleh menggunakan built in function .split(), .unshift(), dan .push()
*/

function heroPick(composition) {
  //var split berguna untuk menyaring string parameter composition kedalam array
  var split = composition.split(',')
  //var job adalah pilihan yang tersedia dalam memilih hero
  var job = ['ranger', 'mage', 'tank', 'warrior',  'assassin']
  // var typehero adalah variabel yang menyimpan var split namun tanpa index duplikat
  var typeHero = []
  // total adalah variabel untuk menentukan tipe hero mana yang paling banyak digunakan
  var total = 0

  //kalau var split indexnya kurang dari 5 maka sudah diketahui satu tim ini hanya berjumlah 4 kebawah
  //jadi ga boleh main
  if (split.length < 5) {
    return 'not sufficient players'
  }

  //ini loop untuk memproses segala hal yang terjadi dan akan menghasilkan output yang sesuai
  for (var i = 0; i < split.length; i++) {
    //var is adalah sebagai flag untuk mempush ke var typeHero tanpa ada duplikat item
    var is = false
    // var many sebagai jumlah tipe hero yang digunakan
    var many = 0
    //loop dengan var j untuk memproses flag
    for (var j = i; j >= 0; j--) {
      //kalau pada typehero ada item yang sama dengan split[i] maka var is akan berubah menjadi true
      if (typeHero[j] === split[i]) {
        is = true
      }
    }
    //kalau is itu false maka sudah jelas item split[i] tidak ada disana dan tidak ada yang sama dengan seluruh itemnya
    if (is === false) {
      typeHero.push(split[i])
    }

    //var ini sebagai penentu apakah pada komposisi ada yang menggunakan hero yang ada pada pick list
    var legalHero = 0

    //loop dengan var k untuk memproses dan mengecek var legalhero dan var total
    for (var k = 0; k < job.length; k++) {
      //if statement ini berguna untuk mengecek apakah hero split[i] legal digunakan atau tidak
      if (split[i] === job[k]) {
        legalHero++
      }

      //if statement ini untuk mengecek apakah job pada split[i] banyak digunakan atau tidak 
      if (split[i] === job[k]) {
        many++
        
        //nah ini penentu untuk tipe hero apa yang paling banyak digunakan
        if (many > total) {
          total = many
          var mostHero = split[i]
        }
      }
    }

    //if statement ini berguna untuk menentukan apakah pada split[i] ada hero yang legal atau tidak
    //kalau legal hero === 0 maka sudah diketahui hero itu ga legal dipakai
    if (legalHero === 0) {
      return `${split[i]} is not on the pick list`
    }
  }

  //if statement ini berguna untuk menentukan apakah tim itu bagus atau tidak
  //kalau typeher.length nya hanya berjumlah 3 maka sudah pasti tim itu bad pick karena ada 3 orang yang menggunakan
  //tipe hero yang sama
  if (typeHero.length <= 3) {
    return `bad pick too many ${mostHero}`
  } else {
    return 'good pick'
  }
  
}





console.log(heroPick("ranger,ranger,mage,tank,warrior")); // good pick
console.log(heroPick("mage,mage,tank,mage,warrior")); // bad pick too many mage
console.log(heroPick("mage,mage,tank,mage")); // not sufficient players
console.log(heroPick("mage,mage,god,mage,mage")); // god is not on the pick list