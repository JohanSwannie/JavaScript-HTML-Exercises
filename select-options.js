
let houseSizes = {};
houseSizes['HUGE'] = ['13 Bedrooms', '11 Bedrooms', '8 Bedrooms'];
houseSizes['BIG'] = ['6 Bedrooms', '5 Bedrooms', '4 Bedrooms'];
houseSizes['MEDIUM'] = ['4 Bedrooms', '3 Bedrooms', '2.5 Bedrooms'];
houseSizes['SMALL'] = ['2 Bedrooms', '1 Bedroom'];

function ChangeHouseList() {
  let chosenHouse = house.options[house.selectedIndex].value;
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
