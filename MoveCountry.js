export default class MoveCountry
{
  constructor(options)
  {
    this.$mainContainer  = $(options.mainContainer);
    this.$leftContainer  = this.$mainContainer.find(options.leftContainer);
    this.$rightContainer = this.$mainContainer.find(options.rightContainer);
    this.connectorClass = options.connectorClass;
  }

  init()
  {
    this.$leftContainer.sortable({
      connectWith: this.connectorClass
    }).disableSelection();
    this.$rightContainer.sortable({
      connectWith: this.connectorClass
    }).disableSelection();
  }
  
}