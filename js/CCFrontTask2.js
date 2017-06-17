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
    correctedSpellString=correctedSpellString.split('dai').join('');
  }
}

if (correctedSpellString.indexOf('aine')!=-1) {
  var searchAine = correctedSpellString.match(/aine/g);
  for (var i = 0; i < searchAine.length; i++) {
    points += subspellPoints.ai
    points += subspellPoints.ne
    correctedSpellString=correctedSpellString.split('aine').join('');
  }
}

if (correctedSpellString.indexOf('ain')!=-1) {
  var searchAin = correctedSpellString.match(/ain/g);
  for (var i = 0; i < searchAin.length; i++) {
    points += subspellPoints.ain
    correctedSpellString=correctedSpellString.split('ain').join('');
  }
}

if (correctedSpellString.indexOf('ai')!=-1) {
  var searchAi = correctedSpellString.match(/ai/g);
  for (var i = 0; i < searchAi.length; i++) {
    points += subspellPoints.ai
    correctedSpellString=correctedSpellString.split('ai').join('');
  }
}

if (correctedSpellString.indexOf('jee')!=-1) {
  var searchJee = correctedSpellString.match(/jee/g);
  for (var i = 0; i < searchJee.length; i++) {
    points += subspellPoints.jee
    correctedSpellString=correctedSpellString.split('jee').join('');
  }
}

if (correctedSpellString.indexOf('je')!=-1) {
  var searchJe = correctedSpellString.match(/je/g);
  for (var i = 0; i < searchJe.length; i++) {
    points += subspellPoints.je
    correctedSpellString=correctedSpellString.split('je').join('');
  }
}

if (correctedSpellString.indexOf('ne')!=-1) {
  var searchNe = correctedSpellString.match(/ne/g);
  for (var i = 0; i < searchNe.length; i++) {
    points += subspellPoints.ne
    correctedSpellString=correctedSpellString.split('ne').join('');
  }
}

console.log(correctedSpellString);
console.log(correctedSpellString.length);

console.log(points);
points = points - correctedSpellString.length
if (points < 0 ) {
  points = 0
} else {
  points
}
console.log(points);
  return damage
}
damage("xfexxaixxainnexxainesdafsdfsdnenexxnexxjexxjeexxdupaaizz");
