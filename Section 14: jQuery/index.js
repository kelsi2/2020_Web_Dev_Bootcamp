$(document).ready(function() {
  $('h1').addClass('big-title margin-50');

  $('h1').text('Bye');

  // All buttons are selected by jQuery
  $('button').text('Don\'t click me');

  // Get the value of an attribute
  $('img').attr('src');

  // Set the value of an attribute
  $('a').attr('href', 'https://www.yahoo.com');

  // Adding an event listener
  $('h1').click(function() {
    $('h1').css('color', 'purple');
  });

  // Event listener is on all buttons
  $('button').click(function() {
    $('h1').css('color', 'purple');
  });

  $(document).keypress(function(event) {
    $('h1').text(event.key);
  });

  $('h1').on('mouseover', function() {
    $('h1').css('color', 'purple');
  });
})