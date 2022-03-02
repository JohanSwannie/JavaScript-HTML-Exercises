    var a = 10;
    var b = 15;
    var c = 5;
    var d = 8;
    var e = 0;
    var f = 0
    var strng1 = 'What a beautiful day for a lovely picnic - how beautiful'
    var custs1 = ''
    var custsall = ''
    var fruitTxt = ''
    var cList = 0
    list1 = []

    function listDisp() {
      for (var n = 1; n < 41; n++) {
        cList = (Math.round(Math.random() * 144))
        list1.splice(cList, 0, n);
        cList = (Math.round(Math.random() * 144))
        list1.splice(cList, 0, n);
      }
      document.getElementById('lotto').innerHTML=
      'your next 6 lotto numbers are : ' + list1[1] + ' + ' + list1[13]
      + ' + ' + list1[32] + ' + ' + list1[21] + ' + ' + list1[7]
      + ' + ' + list1[16]
    }
    var customers = {
      cust1: 'Woolworths - ',
      cust2: 'Countdown - ',
      cust3: 'NewWorld',
      cust4: function() {
        return this.cust1 + this.cust2 + this.cust3
      }
    }
    var documents = {
      doc1: 'history',
      doc2: 'geography',
      doc3: {
        group1: 'mathematics',
        group2: 'science',
        group3: {
          subgrp1: 'Python Programming',
          subgrp2: 'Javascript Programming',
          subgrp3: 'C# Programming',
          subgrp4: 'Ruby Programming',
          subgrp5: 'PHP Programming',
          subgrp6: {
            ssubgrp1: 'Front-end programming in Javascript',
            ssubgrp2: 'Back-end programming in Python',
            ssubgrp3: 'Full Stack Web Development programming',
          }
        }
      }
    }

    function fruitDisp() {
      var fruits = {
        lemon: 'healthy + ',
        orange: 'prevent sicknesses + ',
        avocado: 'long living',
      }
      fruitTxt = ''
      for (x in fruits) {
        fruitTxt = fruitTxt + fruits[x]
      }
      document.getElementById('fruits').innerHTML = fruitTxt
    }

    function calcFunction(f) {
      e = ((((a + b) ** 2) / c) + f) * d
      document.getElementById('calc1').innerHTML = e
    }

    function myFunction(txt1, txt2) {
      document.getElementById('greeting').innerHTML = txt1 + txt2
    }

    $(document).ready(function() {
      $("#p1").click(function() {
        $(this).hide("superfast");
      });
      $("#hh1").click(function() {
        $(this).css('color', 'navy')
        $(this).css('border', '5px solid navy')
        $(this).text("I told you that this will happen !")
      });
      $("#p2").click(function() {
        $(this).css('font-size', '50px')
        $(this).text("I am much bigger now - Hahaha !")
      });
    });
    $(document).ready(function() {
      $("#p3").on({
        mouseenter: function() {
          $(this).text("Stellie is the Captain of the Ship")
          $(this).css("background-color", "lightgreen");
        },
        mouseleave: function() {
          $(this).text("Swannie is the Captain of the Ship")
          $(this).css("background-color", "cyan");
        },
        click: function() {
          $(this).text("Stellie is reconfirmed as the BOSS !!!")
          $(this).css("background-color", "pink");
        }
      });
    });
