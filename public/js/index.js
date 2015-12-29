/*** DOCUMENT READY **********************************************************/

$(document).ready(function() {
  var mycontentPadding = parseFloat($("#mycontent").css('padding'));
  var mycontentHeight  = parseFloat($("#mycontent").css('height'));

  $("#mycontent").css('height', mycontentHeight - 2 * mycontentPadding);
  mycontentHeight  = parseFloat($("#mycontent").css('height'));

  var searchboxHeight = parseFloat($("#searchbox").css('height'));

  var mylistMargin = parseFloat($("#mylist").css('margin'));

  console.log(searchboxHeight);
  console.log(mycontentHeight);
  console.log(mycontentPadding);

  $("#mylist").css('max-height', mycontentHeight - 2 * mycontentPadding -
                             searchboxHeight);
});

/*****************************************************************************/