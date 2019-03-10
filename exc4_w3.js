/*data Handling2*/

var output = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'] 

function dataHandling2 (output) {


output.splice(1, 1, 'Roman Alamsyah Elshawary')
output.splice(2, 1, 'Propinsi Bandar Lampung')
output.splice(4, 0, 'Pria')
output.splice(5, 1, 'SMA Internasional Metro')
console.log(output)

var tanggal = output[3].split(' ', 3)
var bulan = tanggal

switch (5) {
  case 1:  
    console.log('Januari'); break
  case 2:  
    console.log('Februari'); break
  case 3:  
    console.log('Maret'); break
  case 4:  
    console.log('April'); break
  case 5:  
    console.log('Mei'); break
  case 6:  
    console.log('Juni'); break
  case 7:  
    console.log('Juli'); break
  case 8:  
    console.log('Agustus'); break
  case 9:  
    console.log('September'); break
  case 10: 
    console.log('Oktober'); break
  case 11: 
    console.log('November'); break
  case 12: 
    console.log('Desember'); break
  default: 
    console.log('wrong input')
}


var tanggal = output[3].split('/')
var tanggal1 = 
tanggal.sort(function(a, b) { return b - a })
console.log(tanggal1)


var tanggalDescending = tanggal.reverse()
var tanggalJoin = tanggalDescending.join('-')
console.log(tanggalJoin)

var nama = output[1].split('')
var namaSlice = nama.slice(0,15)
var namaJoin = namaSlice.join('')
console.log(namaJoin)

}

dataHandling2(output)