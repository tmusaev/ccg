// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');
  
  $.get('/dreams', function(dreams) {
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#dreams');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    username = $('input[name^=username]').val();
    password = $('input[name^=password]').val();
    $.post('/dreams?' + $.param({username: username, password: password}), function() {
      $('<li></li>').text(username).appendTo('ul#dreams');
      $('input').val('');
      $('input').focus();
    }).fail(function(){ 
  // Handle error here
      console.log("invalid user/pass");
      $('input[name^=username]').val('');
      $('input[name^=password]').val('');
    });
  });

});
