function groupAnimals (arr){
    var kebunBinatang = []
    arr.sort()
  
    for (var i = 0; i < arr.length; i++){
      var kandang = []
      var check = false
      for (var j = 0; j < kebunBinatang.length; j++){
        if (kebunBinatang[j][0][0] === arr[i][0]){
          kebunBinatang[j].push(arr[i])
          check = true
        }
      }
      if (check === false){
        kandang.push(arr[i])
        kebunBinatang.push(kandang)
      }
    }
   return kebunBinatang
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]