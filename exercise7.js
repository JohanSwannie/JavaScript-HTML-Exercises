    var strng = ""
    var nbrs = [119, 14, 38, 71, 55, 83]
    sum = 0
    nbrs.forEach(forEachFunction);
    document.write('<p id="no1">' + 'The items in nbrs after (forEach) are now : ' +
      strng + '</p>')
    document.write('<p id="no2">' + 'The sum of all the items in nbrs after (forEach) are now : ' +
      sum + '</p>')
    document.write('<p id="no3">' + 'The new items in nbrs after (forEach) are now : ' +
      '[' + nbrs + ']' + '</p>')

    function forEachFunction(item, idx, arr) {
      strng = strng + 'Idx ' + idx + ':' + ' ' + 'Item ' + item + '  ..  '
      sum += item
      arr[idx] = item * 3.25
    }
    var nrs1 = [24, 40, 38, 16, 46, 18]
    var nrs2 = nrs1.map(mapFunction)
    document.write('<p id="no4">' + 'The items in nrs2 after (map) are now : ' +
      nrs2 + '</p>')

    function mapFunction(value, index, array) {
      return value * 4.25
    }
    var nrs3 = [19, 308, 27, 81, 38, 71, 55, 8, 45]    
    var under80 = nrs3.filter(filterFunction)
    document.write('<p id="no5">' + 'The items remaining in nrs3 after (filter) are now : ' +
      '[' + under80 + ']' + '</p>')

    function filterFunction(itm, ix, arr) {
      return itm < 80
    }
    var nrs4 = [17, 80, 26, 79, 33, 18, 20]
    var allAdded = nrs4.reduce(reduceFunction)
    document.write('<p id="no6">' + 'The sum of the items all added up in nrs4 after (reduce) are now : ' +
      allAdded + '</p>')

    function reduceFunction(total, itm, ix, arr) {
      return total + itm
    }
    var nrs5 = [12, 22, 7, 15, 30, 109, 27]
    var everyChk = nrs5.every(everyFunction)
    document.write('<p id="no7">' + 'Is it true that all items in nrs5 are less than 100 after (every) : ' +
      everyChk + '</p>')

    function everyFunction(itm, ix, arr) {
      return itm < 100
    }
    var nrs6 = [12, 22, 7, 15, 30, 109, 27]
    var someChk = nrs6.some(someFunction)
    document.write('<p id="no8">' + 'Is it true that some items in nrs6 are less than 100 after (some) : ' +
      someChk + '</p>')

    function someFunction(itm, ix, arr) {
      return itm < 100
    }
    var nrs7 = [12, 22, 77, 15, 30, 109, 27]
    var findChk = nrs7.find(findFunction)
    document.write('<p id="no9">' + 'First item found in nrs7 greater than 27 after (find) is : ' +
      findChk + '</p>')

    function findFunction(itm, ix, arr) {
      return itm > 27
    }
    var nrs8 = [2, 19, 81, 35, 41, 50, 27]
    var findIndexChk = nrs8.findIndex(findIndexFunction)
    document.write('<p id="no10">' + 'Index of first item found over 50 in nrs8 after (findIndex) is : ' +
      findIndexChk + '</p>')

    function findIndexFunction(itm, ix, arr) {
      return itm > 50
    }
    var nrs9 = ['BMW', 'Mercedes', 'Toyota', 'Ford', 'Mazda', 'Isuzu', 'Toyota']
    var index1 = nrs9.indexOf('Toyota')
    var index2 = nrs9.lastIndexOf('Toyota')
    document.write('<p id="no11">' + 'The 1st index of "Toyota" after (indexOf) in nrs9 is: ' +
      index1 + '</p>')
    document.write('<p id="no12">' + 'The last index of "Toyota" after (lastIndexOf) in nrs9 is: ' +
      index2 + '</p>')
