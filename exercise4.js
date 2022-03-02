    function mathFunction() {
      var a = 4.52

      document.getElementById('math1').innerHTML = 'Math.ceil of 4.52 = ' +
        Math.ceil(a)

      document.getElementById('math2').innerHTML = 'Math.floor of 4.52 = ' +
        Math.floor(a)

      document.getElementById('math3').innerHTML = 'Math.round of 4.52 = ' +
        Math.round(a)

      document.getElementById('math4').innerHTML = 'Math.sqrt of 4.52 = ' +
        Math.sqrt(a) + '<br>'
    }

    function dateFunction() {
      var d1 = new Date()
      var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

      document.getElementById('dates').innerHTML = 'Full Date & Time ==> ' + d1 +
        '<br>' + 'Full Year ==> ' + d1.getFullYear() + '<br>' +
        'The Time now in milliseconds from midnight is ==> ' + d1.getTime() +
        '<br>' + "The actual hour is now ==> " + d1.getHours() +
        '<br>' + "The actual minutes are now ==> " + d1.getMinutes() +
        '<br>' + "The Actual seconds are now ==> " + d1.getSeconds() +
        '<br>' + "Today's date converted to a string ==> " + d1.toUTCString() +
        '<br>' + 'Display weekday as a number ==> ' + d1.getDay() +
        '<br>' + 'Display weekday as a name ==> ' + days[d1.getDay()]
    }

    function startTime() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      var s = today.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
      document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
      var t = setTimeout(startTime, 500);
    }

    function checkTime(i) {
      if (i < 10) {
        i = "0" + i
      };
      return i;
    }
