"use strict";

(function () {
  $(".highlight").on('click', function() {
    $(this).css("background-color", "#1D314EFF");
  });

  $(".highlight").on('dblclick', function() {
    $(this).removeClass('highlight').addClass('noHighlight').css('background-color', 'transparent');
  });

  $("#show-faqs").on("click", function () {
    $(".invisible").removeClass("invisible").addClass("visible");
  });

  $("#hide-faqs").on("click", function () {
    $(".visible").removeClass("visible").addClass("invisible");
  });


  $('#liButton').on('click', function (){
    $('ul').each(function (){
        $(this).children().last().css('background-color', 'yellow')
    })
  })

  $('h3').on('click', function (){
    $(this).next().children().first().css('font-weight', 'bold')
  })

  $('li').on('click', function () {
    $(this).parent().children().first().css('color', 'blue')
  })


})();
