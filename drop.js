import MoveCountry from "./MoveCountry.js";

$(document).ready(function () {
  let options = {
    mainContainer: "#container",
    leftContainer: "#left",
    rightContainer: "#right",
    connectorClass: ".dragndrop",
  }
  let move = new MoveCountry(options);
  move.init();
});
