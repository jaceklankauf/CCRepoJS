const damage = (spellString) => {
  const subspellPoints = {
  'fe':1,
  'je':2,
  'jee':3,
  'ain':3,
  'dai':5,
  'ne':2,
  'ai':2
}
let points = 0;
let newString = spellString.toLowerCase(); //string methods are case sensitive
if (typeof newString != 'string') {
  console.log("put your fuckin' strings on! you're not a wizzard!");
  return points
}

if (newString.indexOf('fe')== -1 || newString.lastIndexOf('fe') != newString.indexOf('fe')) {
  console.log("it is not a Fe-spell");
  return points
} else {
  let tempSpellString = newString.substring(newString.indexOf('fe'));
  // console.log(tempSpellString);
  if ((tempSpellString.indexOf('ai') < tempSpellString.indexOf('fe'))||(tempSpellString.indexOf('ai')==-1)) {
    console.log("wrong spell");
    return points
  } else {
    var newSpellString = tempSpellString.substring(0, tempSpellString.lastIndexOf('ai')+2)
    points += subspellPoints.fe;
    var correctedSpellString = newSpellString.substring(2)
  }
}

if (correctedSpellString.indexOf('dai')!=-1) {
  var searchDai = correctedSpellString.match(/dai/g);
  for (var i = 0; i < searchDai.length; i++) {
    points += subspellPoints.dai
    correctedSpellString=correctedSpellString.split('dai').join();
  }  
}

// var searchAi = correctedSpellString.match(/ai/g);
// for (var i = 0; i < searchAi.length; i++) {
//   points += subspellPoints.ai
//   correctedSpellString=correctedSpellString.split('ai').join();
// }

console.log(correctedSpellString);

// var searchAi = newSpellString.match(/ai/g);
// for (var i = 0; i < searchAi.length; i++) {
//   points += subspellPoints.ai
// }








console.log(searchAi);
console.log(points);


  return damage
}
damage("fedaiai");
