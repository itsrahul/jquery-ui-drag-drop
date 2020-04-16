export default class MoveCountry
{
  constructor(options)
  {
    this.$mainContainer  = $(options.mainContainer);
    this.$leftContainer  = this.$mainContainer.find(options.leftContainer);
    this.$rightContainer = this.$mainContainer.find(options.rightContainer);
  }

  init()
  {
    this.$leftContainer.children().draggable({revert: "invalid"});
    this.$rightContainer.children().draggable({revert: "invalid"});

    this.$leftContainer.droppable({
      drop: (event, ui) => this.moveCountry(event, ui) })
    this.$rightContainer.droppable({
      drop: (event, ui) => this.moveCountry(event, ui) });
  }

  moveCountry(event, ui)
  {
    $(event.target).append(ui.draggable.attr("style","postion: relataive").draggable({revert: "invalid"}))
  }
  
}