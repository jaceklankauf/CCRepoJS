const damage = function(spellString) {
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
  console.log("put your strings on! you're not a wizzard!");
  return points
}

if (newString.indexOf('fe')== -1 || newString.lastIndexOf('fe') != newString.indexOf('fe')) {
  console.log("it is not a Fespell");
  return points
} else {
  let tempSpellString = newString.substring(newString.indexOf('fe'));
  // console.log(tempSpellString);
  if ((tempSpellString.indexOf('ai') < tempSpellString.indexOf('fe'))||(tempSpellString.indexOf('ai')==-1)) {
    console.log("wrong spell");
    return points
  } else {
    let newSpellString = tempSpellString.substring(0, tempSpellString.lastIndexOf('ai')+2)
    points += subspellPoints.fe;
    console.log(newSpellString);
    console.log(points);
  }
}



  return damage
}
damage("deseaifeliaictetata");
