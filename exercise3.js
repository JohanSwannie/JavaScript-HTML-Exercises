    var name1 = "Johny Clever Man"
    var name2 = "The Python Monster Programmer"
    var msg1 = "Stellie the Senior Payroll Officer at Bay Venues has been chosen as the \
    employer of the year and has received a huge cheque of $ 100 000"

    function matchReplace() {
      var msg2 = "Johny Bravo ski down the mountain and the crowd went crazy  -  "
      var msg3 = ''
      var msg4 = "Match found in msg2 = "
      var msg5 = ''
      var msg6 = "  - HE WILL GO FAR IN TENNIS"
      var msg7 = ''
      var msg8 = ' '
      var string1 = "Stellie will walk down the wet narrow long road";
      var array1 = string1.split(" ");
      msg3 = msg2.replace("Bravo", "Coward")
      msg3 = msg3.replace("the crowd went crazy", "fall his ass off")
      msg3 = msg3.toUpperCase()
      msg6 = msg6.toLowerCase()
      msg5 = msg2.match(/crowd/g)

      document.getElementById('msg2').innerHTML = msg3 + msg4 + msg5 + msg6

      for (var i = 0; i < array1.length; i++) {
        if (i % 2 == 0) {
          msg7 += (array1[i] + msg8)
        }
      }
      document.getElementById('msg3').innerHTML = msg7
      var nbr1 = 1259

      document.getElementById('msg4').innerHTML ='Number 59 ==> ' +
      " Decimal format " + nbr1.toString(10) +
      "    Hexadecimal " + nbr1.toString(16) +
      "    Octal " + nbr1.toString(8) +
      "    Binary " + nbr1.toString(2);
      var nbr2 = 313.5376, nbr3 = 3.231, nbr4 = 19.5576

      document.getElementById('msg5').innerHTML ='The value of nbr2 rounded = ' +
      Math.floor(Math.round(nbr2).valueOf()) + ' - ' +
      'The value of the square root of nbr2 = ' + Math.sqrt(nbr2)
      var a = 123, b = 99, c = 177, d = 108, e = 19, f = 38, g = 149, h = 149.8121

      document.getElementById('msg6').innerHTML ='The maximum value of array2 = ' +
      Math.max(a,b,c,d,e,f,g) + ' -  The minimum value of array 2 = ' +
      Math.min(a,b,c,d,e,f,g) + ' -  The truncated value of h is ' + Math.trunc(h) +
      '<br>' + '<br>' + "e to the power of 3 ==> " + Math.pow(e,3) +
      '  - A random number between 0 and 1000 ==> ' + Math.floor(Math.random() * 1000) +
      '<br>' + '<br>' + 'The exponential notation of 3.231 to power of 6  ==> ' +
       nbr3.toExponential(6) + '<br>' + '<br>' +
       'nbr4 - 19.5576 fixed to 3 digits and 0 digits ==> ' + nbr4.toFixed(3) +
       '  +  ' + nbr4.toFixed() + '<br>' + '<br>' +
       'nbr4 - 19.5576 precised to 2 digits and 3 digits ==>' + nbr4.toPrecision(2) +
       '  +  ' + nbr4.toPrecision(3)
    }
