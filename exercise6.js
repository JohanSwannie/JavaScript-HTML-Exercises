    var array1 = [
      'one',
      'two',
      'three',
    ]
    var array2 = [
      'Tauranga',
      'Wellington',
      'Auckland',
      'Hamilton',
      'Christchurch',
      'Nelson',
    ]
    var array3 = [
      'New Zealand'
    ]
    var array4 = [
      'Rugby',
      'Cricket',
      'Tennis',
      'Golf',
    ]
    var array5 = [
      'John',
      'Mary',
      'Thomas',
      'Vallentino',
      'James',
      'Bruce',
      'Alice',
      'Peter',
      'Dan',
    ]
    var array6 = [
      1091,
      22,
      713.23,
      98.55,
      62,
      37,
      71,
      971,
    ]
    var bigArray = ''
    var string1 = ''
    var slicer1 = ''
    sort1 = 0
    lowest1 = 0

    array1.push('four')
    array1.push('five')
    document.write('<p id="wr1">' + 'The values in array1 after (push) are now : ' +
      '(' + array1 + ')' + '</p>')

    array1.pop()
    document.write('<p id="wr2">' + 'The values in array1 after (pop) are now : ' +
      '(' + array1 + ')' + '</p>')

    document.write('<p id="wr3">' + 'The values in array1 after (join) are now : ' +
      '(' + array1.join(' ---> ') + ')' + '</p>')

    bigArray = array1.concat(array2, array3)
    document.write('<p id="wr4">' +
      'The combined values of array1, array2 & array3 after (concat) are now : ' +
      '(' + bigArray + ')' + '</p>')

    array4.splice(1, 3, 'Badminton', 'Squash')
    document.write('<p id="wr5">' + 'The new values of array4 after (splice) are now : ' +
      '(' + array4 + ')' + '</p>')

    string1 = array4.toString()
    document.write('<p id="wr6">' + 'Array4 coverted to string after (toString) is now: ' +
      string1 + '</p>')

    array4.unshift('Hockey');
    array4.unshift('Water Polo');
    array4.unshift('Swimming')
    document.write('<p id="wr7">' + 'Values of array4 after (unshift) are now: ' +
      '(' + array4 + ')' + '</p>')

    array4.shift()
    document.write('<p id="wr8">' + 'Values of array4 after (shift) are now: ' +
      '(' + array4 + ')' + '</p>')

    slicer1 = array4.slice(1, 4)
    document.write('<p id="wr9">' + 'Values of array4 after (slice) are now: ' +
      '(' + slicer1 + ')' + '</p>')

    document.write('<p id="wr10">' + 'Values of array5 after (sort) are now: ' +
      '(' + array5.sort() + ')' + '</p>')

    document.write('<p id="wr11">' + 'Values of array5 after (reverse) are now: ' +
      '(' + array5.reverse() + ')' + '</p>')

    sort1 = array6.sort(function(a, b) {
      return a - b
    })
    document.write('<p id="wr12">' + 'Values of array6 after (sort) are now: ' +
      '(' + sort1 + ')' + '</p>')

    lowest1 = Math.min.apply(null, array6)
    highest1 = Math.max.apply(null, array6)
    document.write('<p id="wr13">' + 'The lowest number in array6 is : ' +
      lowest1 + '  -  ' + 'The highest number in array 6 is : ' +
      highest1 + '</p>')
