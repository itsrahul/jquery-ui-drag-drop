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
    this.$leftContainer.sortable({
      connectWith: ".dragndrop"
    }).disableSelection();
    this.$rightContainer.sortable({
      connectWith: ".dragndrop"
    }).disableSelection();
  }
  
}