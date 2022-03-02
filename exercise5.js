    function arrayFunction1() {
      var array1 = ['Stellie', 'Swannie', 'Roxy', 'Tasha', 'Thomas']
      document.getElementById('arr1').innerHTML = 'Complete array1 ==> ' +
        array1 + '<br>' + '<br>' + 'Display element in array1 at index 3 ==> ' +
        array1[3]
    }

    function arrayFunction2() {
      var array2 = ['Stella', 'Swannie', 'Roxanne', 'Natasha', 'Petre']
      array2[1] = 'Swannemannetjie'
      document.getElementById('arr2').innerHTML = 'New complete array ==>' +
        array2 + '<br>' + '<br>' + 'The length of array2 ==>' + array2.length
    }

    function techFunction() {
      var technologies, txt1, tLen, i
      technologies = [
        'Python',
        'Javascript',
        'JQuery',
        'Document Object Module',
        'JSON',
        'HTML5',
        'CSS3',
        'Bootstrap4',
        'MySQL',
        'SQLITE',
        'Django2',
      ]
      tLen = technologies.length
      txt1 = "<ul>"
      for (i = 0; i < tLen; i++) {
        txt1 += "<li>" + technologies[i] + "</li>"
      }
      txt1 += "</ul>"
      document.getElementById("tech1").innerHTML = txt1;
    }

    function addElementsFunction() {
      var array3 = [
        'Sitting',
        'Walking',
        'Running',
        'Jogging',
        'Jumping',
        'Hiking',
      ]

      array3[array3.length] = 'Biking'
      array3[array3.length] = 'Eating'
      array3[array3.length] = 'Sleeping'

      document.getElementById('add1').innerHTML = 'New values of array3 ==> ' +
      array3 + '<br>' + '<br>' + 'Is array3 an Array ? --> ' + Array.isArray(array3)
    }
