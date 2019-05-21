

$(document).ready(function(){
  const readMoreBtn = $('.read-more-btn');
  const readLessBtn = $('.read-less-btn');

  readMoreBtn.click(function(){
    $(this).addClass('.hide');
    $(this).siblings('.more').toggle();
  });

  readLessBtn.click(function(){
    $(this).parent().toggle();
    $(this).toggle();
  });

});
