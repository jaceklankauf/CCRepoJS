exports.damage = (spellString) => {

let points = 0;
let newString = spellString.toLowerCase(); //string methods are case sensitive
if (typeof newString != 'string') {
  return 0
}

if (newString.indexOf('fe')== -1 || newString.lastIndexOf('fe') != newString.indexOf('fe')) {
  return 0
} else {
  let tempSpellString = newString.substring(newString.indexOf('fe'));
  if ((tempSpellString.indexOf('ai') < tempSpellString.indexOf('fe'))||(tempSpellString.indexOf('ai')==-1)) {
    return 0
  } else {
    var newSpellString = tempSpellString.substring(0, tempSpellString.lastIndexOf('ai')+2)
    points += 1;
    var correctedSpellString = newSpellString.substring(2)
  }
}

  if (correctedSpellString.indexOf('dai')!=-1) {
  var tempString = correctedSpellString.replace(/dai/g,'');
  points += (correctedSpellString.length - tempString.length)/3*5
  correctedSpellString=tempString;
  }
  if (correctedSpellString.indexOf('aine')!=-1) {
  var tempString = correctedSpellString.replace(/aine/g,'');
  points += (correctedSpellString.length - tempString.length)/4*4
  correctedSpellString=tempString;
  }
  if (correctedSpellString.indexOf('ain')!=-1) {
  var tempString = correctedSpellString.replace(/ain/g,'');
  points += (correctedSpellString.length - tempString.length)/3*3
  correctedSpellString=tempString;
  }
  if (correctedSpellString.indexOf('ai')!=-1) {
  var tempString = correctedSpellString.replace(/ai/g,'');
  points += (correctedSpellString.length - tempString.length)/2*2
  correctedSpellString=tempString;
  }
  if (correctedSpellString.indexOf('jee')!=-1) {
  var tempString = correctedSpellString.replace(/jee/g,'');
  points += (correctedSpellString.length - tempString.length)/3*3
  correctedSpellString=tempString;
  }
  if (correctedSpellString.indexOf('je')!=-1) {
  var tempString = correctedSpellString.replace(/je/g,'');
  points += (correctedSpellString.length - tempString.length)/2*2
  correctedSpellString=tempString;
  }
  if (correctedSpellString.indexOf('ne')!=-1) {
  var tempString = correctedSpellString.replace(/ne/g,'');
  points += (correctedSpellString.length - tempString.length)/2*2
  correctedSpellString=tempString;
  }

points = points - tempString.length
points = points < 0 ? 0 : points;

  return points;
}
