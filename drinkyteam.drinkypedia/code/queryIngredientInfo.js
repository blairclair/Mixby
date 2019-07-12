var http = require('http')
var console = require('console')

// Takes one ingredient and returns information about it.

module.exports.function = function queryIngredientInfo (strIngredient1) {
  var apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i='
  var results = []
  var tmpResults = http.getUrl(encodeURI(apiUrl + strIngredient1))
  tmpResults = JSON.parse(tmpResults)
  for (id in tmpResults.ingredients) {
    results.push(tmpResults.ingredients[id])
  }
  return results
}