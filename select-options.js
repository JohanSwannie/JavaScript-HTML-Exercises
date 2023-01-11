let houseSizes = {};
houseSizes['PALACE'] = ['150 Bedrooms', '120 Bedrooms', '100 Bedrooms'];
houseSizes['HUGE'] = ['30 Bedrooms', '25 Bedrooms', '20 Bedrooms'];
houseSizes['EXTRA LARGE'] = ['15 Bedrooms', '12 Bedrooms', '10 Bedrooms'];
houseSizes['BIG'] = ['7 Bedrooms', '6 Bedrooms', '5 Bedrooms'];
houseSizes['MEDIUM'] = ['4 Bedrooms', '3 Bedrooms', '2.5 Bedrooms'];
houseSizes['SMALL'] = ['2 Bedrooms', '1 Bedroom'];
houseSizes['TINY'] = ['1 Bedroom', 'half Bedroom'];

const housy = document.getElementById('house');

function addHouseSizeList() {
  let chosenHouse = housy.options[housy.selectedIndex].value;
  while (houseSize.options.length) {
    houseSize.remove(0);
  }
  let roomSelections = houseSizes[chosenHouse];
  if (roomSelections) {
    for (let i = 0; i < roomSelections.length; i++) {
      let houseRoomSelection = new Option(roomSelections[i], i);
      houseSize.options.add(houseRoomSelection);
    }
  }
}
