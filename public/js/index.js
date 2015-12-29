/*** DOCUMENT READY ******************************************************************************/

$(document).ready(function() {
  /* Page height */
  var mycontentPadding = parseFloat($("#mycontent").css('padding'));
  var mycontentHeight  = parseFloat($("#mycontent").css('height'));
  $("#mycontent").css('height', mycontentHeight - 2 * mycontentPadding);

  /* List height */
  mycontentHeight      = parseFloat($("#mycontent").css('height'));
  var topcontentHeight = parseFloat($("#topcontent").css('height'));
  $("#mylist").css('max-height', mycontentHeight - 2 * mycontentPadding -
                                 topcontentHeight);

  /* Top content width */
  var topcontentWidth = parseFloat($("#topcontent").css('width'));
  var gorightbuttonWidth  = parseFloat($("#gorightbutton").css('width'));
  var gorightbuttonMargin = parseFloat($("#gorightbutton").css('margin-left'));
  $("#topcontentleft").css('width', topcontentWidth - gorightbuttonWidth -
                                    2 * gorightbuttonMargin);
  $("#topcontentright").css('width', gorightbuttonWidth + 2 * gorightbuttonMargin);
});

/*************************************************************************************************/