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
  let newSpellString = newString.substring(newString.indexOf('fe'), newString.lastIndexOf('ai')+2);
  console.log(newSpellString);
}

console.log(newString.indexOf('fe'));
console.log(newString.lastIndexOf('fe'));


  return damage
}
damage("desefeliciaiaita");
