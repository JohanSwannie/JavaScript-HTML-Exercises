  var x = 5;
  var y = 17;
  var z = 29;
  var a = x + y + 'Volunteer'
  var stellieMsg = ''
  var people = {
    firstName: 'John',
    lastName: 'Piper',
    age: 27,
    address1: '14 Narrow road',
    address2: 'Palmerston North',
    postCode: 5018,
    country: 'New Zealand',
    innerobject: {
      secret1: "My name is Johan and I am a secret Billionaire. ",
      secret2: "My secret has been kept quiet for many years now, ",
      secret3: "but has been exposed due to the Lamborgini I bought",
      finalMsgs: {
        msg1: "It is better to give than to receive, ",
        msg2: "because by means of that we will please God",
        msg3: [
          'stellie', 'is', 60, 'years', 'old'
        ]
      }
    }
  }

  function swanSeLekkerFunction() {
    document.getElementById('swannie6').innerHTML = "OOPSY we are changing"
  }

  function stellieFunction() {
    for (var i = 0; i < 5; i++) {
      stellieMsg = stellieMsg + ' ' + people.innerobject.finalMsgs.msg3[i]
    }
    document.getElementById('stellie1').innerHTML = stellieMsg
  }
  document.write('When we add 5 and 6 together we get : ' + (5 + 6) + '<br>')
  document.write('<br>' + 'The sum of x, y & z is : ' + (x + y + z))
  window.alert('19 times 12 equals : ' + (19 * 12))
