$(function() {
  // jQueryを記述
  // $("p").fadeIn();
  // $("p").fadeIn(6000);
  $("p").fadeIn(function(){
    $(this).css("color","#f00");
  });
});