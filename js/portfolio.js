'use strict';

var portfolio = [];

//creating our template object for portfolio items
function Portfolio (opts) {
  this.title = opts.title;
  this.category = opts.category;
  this.date = opts.date;
  this.imgUrl = opts.imgUrl;
  this.body = opts.body;
}

//creating a prototype to generate a new Portfolio object for each item in the portfolioContent.js array
Portfolio.prototype.toHtml = function() {
  //creating a new div template for our new portfolio item
  var $newPortItem = $('div.template').clone();

  $newPortItem.removeClass('template');

//creating a new data-category attribute for portfolio item category
  $newPortItem.attr('data-category', this.category);

  //find and add portfolioContent properties to each new object template
  $newPortItem.find('section.portfolio_item a').attr('href', this.imgUrl);
  $newPortItem.find('section.portfolio_item a').html(this.body);
  $newPortItem.find('div.title').text(this.title);
  $newPortItem.find('div.date').text(this.date);
  return $newPortItem;
};

//portfolioItems.sort()

//for each portfolio item, create a new Portfolio object and push that into the portfolio array
portfolioItems.forEach(function(a) {
  portfolio.push(new Portfolio(a));
});

//for each object in the portfolio array, add that (html) to the element with the id 'portfolio'
portfolio.forEach(function(b) {
  $('#portfolio').append(a.toHtml());
});
