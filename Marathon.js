/*
========
MARATHON
========

[INSTRUCTION]
Kamu mengikuti lomba marathon, dengan rute lintasan tertentu dan stamina tertentu;

[EXAMPLE]
input lintasan: 'XXXXXXOOO-XXOOXXXXXOO-XXXXO'

'X' adalah jalan datar yang akan mengkonsumsi 1 stamina dengan maskimal repetisi 'X' 4 kali  ('XXXX')
'O' adalah jalan menanjak yang akan mengkonsumsi 1 stamina dengan maksimal repetisi 'O' 2 kali ('OO')
'-' adalah spot minum meningkatkan 2 stamina

partisi track:   XXXX XX OO O -  XX OO XXXX X OO-XXXXO
stamina      : 5    4  3  2 1 3   2  1    0 (ENERGI HABIS, TIDAK BISA MELANJUTKAN)
jarak lari   :   1234 56 78 9 10 11,12 13,14 15,16,17,18
input stamina: 5
output: Selamat anda telah menempuh jarak 18

[RULES]
- Dilarang menggunakan .split, .join, .map, .sort, .filter, .indexOf, .includes
- WAJIB menggunakan pseudocode

*/

function marathon(track, stamina) {
    // sebagai variabel penentu
    var x = 0
    var o = 0
    var km = 0

    //loop untuk memproses track dan stamina
    for (var i = 0; i < track.length; i++) {
        //setiap var i bertambah 1 km harus bertambah 1 itu menandakan sudah melewati track dengan index i
        km++

        //if statement untuk menambah nilai stamina dan x dan o
        if (track[i] === 'X') {
            x++
        } else if (track[i] === 'O') {
            o++
        } else if (track[i] === '-') {
            stamina += 2
        }

        // kalau x ===  4 maka stamina harus dikurangi 1
        if (x === 4 ) {
            x = 0
            stamina -= 1
        } 
        
        //kalau track yang kita lewati x dan track didepannya bukan x maka stamina harus dikurangi 1
        if (track[i] === 'X' && track[i + 1] != 'X') {
            x = 0
            stamina -= 1
        }

        //sama seperti diatas
        if (track[i] === 'O' && track[i + 1] != 'O') {
            o = 0
            stamina -= 1
        }
        //kalau track kita sudah melewati track O sebanyak 2 kali maka stamina dikurangi 1
        if (o === 2) {
            o = 0
            stamina -= 1
            
        }

        //kalau didepan track ga ada apa apa lagi maka stamina ditambah 1
        if (track[i + 1] === undefined) {
            stamina += 1
        }

        //kalau stamina habis maka kilo meternya akan dicatat
        if (stamina === 0) {
            return `Selamat anda telah menempuh jarak ${km} km`
        }
        
    }

    //kalau berhasil melewati semua track maka kamu sampai garis finish
    if (km === track.length) {
        return 'Selamat anda telah menempuh garis finish'
    }
};

console.log(marathon('XXXXXXOOO-XXOOXXXXXOO-XXXXO', 5)); //Selamat anda telah menempuh jarak 18 km
console.log(marathon('XXXXXXOOOXXOOXXXXXOOXXXXO', 5)); //Selamat anda telah menempuh jarak 11 km
console.log(marathon('XXXXXXXX', 3)); //Selamat anda telah menempuh garis finish