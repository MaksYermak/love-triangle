/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var personInTrianglesCount = 0;
  
  for( var i=0; i<preferences.length; i++){
  	var person = i+1;
  	if (person==preferences[i]) continue;
  	if ((preferences[preferences[i]-1] == preferences[i]) || (preferences[preferences[i]-1] == person)) continue;
  	if (preferences[preferences[preferences[i]-1]-1] == person) personInTrianglesCount++;
  	else continue;
  }

  var loveTrianglesCount = personInTrianglesCount/3;

  return loveTrianglesCount;
};
