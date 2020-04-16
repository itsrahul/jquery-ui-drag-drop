import MoveCountry from "./MoveCountry.js";

$(document).ready(function () {
  let options = {
    mainContainer: "#container",
    leftContainer: "#left",
    rightContainer: "#right",
  }
  let move = new MoveCountry(options);
  move.init();
});
