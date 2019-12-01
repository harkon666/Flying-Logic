/*
================
SENSOR SENTENCE
================
description: Sebuah fungsi yang akan mendeteksi apakah kalimat tersebut merupakan kalimat yang
tidak baik dan akan mengembalikan nilai kalimat yang telah di sensor

rules:
1. Wajib menggunakan Pseudocode/ Algoritma
2. tidak boleh menggunakan built in function .filter(), .map(), .split(), .findIndex(), indexOf(), .join()
3. tidak boleh menggunakan REGEX, seperti .match, .replace


examples:
JIKA INPUT KALIMAT = 'HAHAHA PAYAH LOOO' dan INPUT SENSOR = 'PAYAH'
MAKA OUTPUT = 'HAHAHA ***** LOOO'
                    
*/

// PSEUDOCODE
/* 
    pisahkan parameter sentence per spasi dan masukan ke dalam array baru
    cocokan item array dengan parameter words
    ketika cocok item array yang sama akan diubah menjadi huruf bintang (*) sepanjang length nya
    lalu masukan semua item array tersebut dengan spasi
    maka sentence yang ada wordnya akan ke sensor
*/



function sensorSentence(sentence, words) {
    var temp = ''
    var arr = []
    var result = ''
    for (var i = 0; i < sentence.length; i++) {
        if (sentence[i] != ' ') {
            temp += sentence[i]
        }
        if (sentence[i + 1] === ' ' || sentence[i + 1] === undefined) {
            arr.push(temp)
            temp = ''
        }
    }

    for (var j = 0; j < arr.length; j++) {
        for (var k = 0; k < words.length; k++) {
            if (arr[j] === words) {
                temp += '*'
            }
        }
        
        if (arr[j] === words) {
            arr[j] = temp
        }

        result += arr[j] + ' '
    }
    return result
}


console.log(sensorSentence('Hey you are a murderer', 'murderer')) // Hey you are a ********

console.log(sensorSentence('I will kill you later, i swear', 'kill')) // I will **** you later, i swear

console.log(sensorSentence("Oh my god, holy cow! i can't believe it", "cow!")) // Oh my god, holy **** i can't believe it

console.log(sensorSentence("Aku ingin pindah ke meikartu", "meikartu")) // Aku ingin pindah ke ********

console.log(sensorSentence('HAHA HEHE HIHI HUHU HOHO', 'WEY')) // 'HAHA HEHE HIHI HUHU HOHO'

// console.log(sensorSentence('', '')) // ''