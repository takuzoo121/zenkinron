$(function(){
  $('#click').click(function(){
    if($('#hide').hasClass('open')){
      $('#hide').removeClass('open');
      $('#hide').hide();
    } else {
      $('#hide').addClass('open');
      $('#hide').show();
    }
  });

  $('#click').hover (
    function(){
      $('#click').css("color","blue");
      $('#click').css("cursor","pointer")
    },
    function(){
      $('#click').css("color","black");
    }
  );
  $('#click2').click(function(){
    if($('#hide').hasClass('open')){
      $('#hide').removeClass('open');
      $('#hide').hide();
    } else {
      $('#hide').addClass('open');
      $('#hide').show();
    }
  });

  $('#click2').hover (
    function(){
      $('#click2').css("color","blue");
      $('#click2').css("cursor","pointer")
    },
    function(){
      $('#click2').css("color","black");
    }
  );

  $('#click3').click(function(){
    if($('#hide3').hasClass('open')){
      $('#hide3').removeClass('open');
      $('#hide3').hide();
    } else {
      $('#hide3').addClass('open');
      $('#hide3').show();
    }
  });

  $('#click3').hover (
    function(){
      $('#click3').css("color","blue");
      $('#click3').css("cursor","pointer")
    },
    function(){
      $('#click3').css("color","black");
    }
  );

  $('#click4').click(function(){
    if($('#hide4').hasClass('open')){
      $('#hide4').removeClass('open');
      $('#hide4').hide();
    } else {
      $('#hide4').addClass('open');
      $('#hide4').show();
    }
  });

  $('#click4').hover (
    function(){
      $('#click4').css("color","blue");
      $('#click4').css("cursor","pointer")
    },
    function(){
      $('#click4').css("color","black");
    }
  );

  /*$("#abs").click(function(){
    $(".abstract").show();
  });
  $("#context").click(function(){
    $(".contexts").show();
  });

  $(".question").click(function(){
    $(".answer").toggle();
    var $answer = $(this).find(".answer");
    if($answer).hasClass('open')) {
     $($answer).removeClass('open');
     $($answer).slideUp();
   } else {
     $($answer).addClass('open');
     $($answer).slideOut();
 }
 });*/

});
