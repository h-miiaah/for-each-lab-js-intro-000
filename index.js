function iterativeLog(array){
    array.forEach((element, index) => {
      console.log(`${index}: ${element}`)
    });
}

function iterate(callback){
  var animals = ["dog", "cat", "bird"];
  animals.forEach(callback);
  return animals;
}
