
function findMatching(names, string) {
return names.filter(function (name) {
    return name.toLowerCase() === string.toLowerCase();
});
}

function fuzzyMatch(driverArray, nameLetters) {
  return driverArray.filter(function (name) {
    return name.slice(0,2) === nameLetters;
  });
}

function matchName(driverObjs, string) {
return driverObjs.filter(function (matching){
  return matching.name === string;
}); 
  
}