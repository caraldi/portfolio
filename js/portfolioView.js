//create empty portfolioView object
var portfolioView = {};

portfolioView.navigationPageJump = function() {
  $('.navbar').on('click', 'li.navlink', function() {
    //get the attribute value for data-content and store that in a variable
    var $navDataContent = $(this).attr('data-content');
    //hide hero content div
    $('section').hide();
    //show the selected element whose id matches the data-content
    $('#' + $navDataContent).show().css('padding-top', '10%');
  });
  $('.navbar li.navlink:first').click();
};

portfolioView.navigationPageJump();
