'use strict';

$(document).ready(function() {
  var $clearAll = $('#clearAll');
  var $form = $('form');
  var $itemToAdd = $('input[name=checkListItem]');
  var $list = $('#list');
  var $status = $('#status');
  var EMPTY_STRING = '';

  function addItem(toAdd) {
    if (toAdd !== EMPTY_STRING) {
      $list.append('<li class="item">' + toAdd + '</li>');
      status();
    } else {
      alert('Blanks are not valid entries!');
    }
  }

  function status() {
    var total = $('.item').length;
    console.log(total);
    var done = $('.checked').length;
    console.log(done);
    $status.html('<span>' + (total - done) + '/' + total + '</span>');
  }

  $form.on('submit', function(event) {
    event.preventDefault();
    addItem($itemToAdd.val());
    $itemToAdd.val('');
  });

  $clearAll.on('click', function() {
    $('.item').remove();
    status();
  });

  $list.on('click', function(event) {
    var $el = $(event.target);
    if ($el.is('.item')) {
      $el.toggleClass('checked');
      status();
    }
  });
  $list.on('dblclick', function(event) {
    var $el = $(event.target);
    if ($el.is('.item')) {
      $el.remove();
      status();
    }
  });
});
