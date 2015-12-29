/*** VARIABLES ***********************************************************************************/

var selectedColor = 'rgb(255, 0, 0)'

/*************************************************************************************************/



/*** DOCUMENT READY ******************************************************************************/

$(document).ready(function() {
  firstPageSize();

  var isSecondPageSizeSet = false;
  $(document).on("pageshow", "#mypage2", function() {
    console.log("mypage2");
    if (isSecondPageSizeSet == false) {
      secondPageSize();
      isSecondPageSizeSet = true;
    }
  });

  var firstClick = false;
  var defaultColor;
  $('#mylist').delegate('li', 'click', function () {
    if (firstClick == false) {
      defaultColor = $(this).children().css("background-color");
      firstClick = true;
    }

    if ($(this).children().css("background-color") != selectedColor) {
      $(this).children().css("background-color", selectedColor);
    } else {
      $(this).children().css("background-color", defaultColor);
    }
  });
});

/*************************************************************************************************/



/*** FUNCTIONS ***********************************************************************************/

function firstPageSize() {
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
  var navbuttonWidth  = parseFloat($("#navbutton").css('width'));
  var navbuttonMargin = parseFloat($("#navbutton").css('margin-left'));
  $("#topcontentleft").css('width', topcontentWidth - navbuttonWidth -
                                    2 * navbuttonMargin);
  $("#topcontentright").css('width', navbuttonWidth + 2 * navbuttonMargin);
}


function secondPageSize() {
  /* Page height */
  var mycontentPadding = parseFloat($("#mycontent2").css('padding'));
  var mycontentHeight  = parseFloat($("#mycontent2").css('height'));
  $("#mycontent2").css('height', mycontentHeight - 2 * mycontentPadding);

  /* List height */
  mycontentHeight      = parseFloat($("#mycontent2").css('height'));
  var topcontentHeight = parseFloat($("#topcontent2").css('height'));
  $("#mylist2").css('max-height', mycontentHeight - 2 * mycontentPadding -
                                 topcontentHeight);

  /* Top content width */
  var topcontentWidth = parseFloat($("#topcontent2").css('width'));
  var navbuttonWidth  = parseFloat($("#navbutton2").css('width'));
  var navbuttonMargin = parseFloat($("#navbutton2").css('margin-left'));
  $("#topcontentleft2").css('width', navbuttonWidth + 2 * navbuttonMargin);

  $("#topcontentright2").css('width', topcontentWidth - navbuttonWidth -
                                      2 * navbuttonMargin);
}

/*************************************************************************************************/
