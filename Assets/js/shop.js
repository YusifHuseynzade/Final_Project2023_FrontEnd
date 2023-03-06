$( ".slider-range" ).slider({
    range: true,
    min: 10,
    max: 150,
    values: [ 30, 80 ],
    slide: function( event, ui ) {
        $( ".amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
 });
 $( ".amount" ).val( "$" + $( ".slider-range" ).slider( "values", 0 ) +
 " - $" + $( ".slider-range" ).slider( "values", 1 ) ); 



//  LOAD MORE FUNCTION

$(document).ready(function(){
    $(".col-lg-4").slice(0, 6).show();
    $(".load__more").on("click", function(e){
      e.preventDefault();
      $(".col-lg-4:hidden").slice(0, 3).slideDown();
      if($(".col-lg-4:hidden").length == 0) {
        $(".load__more").text("No Content").addClass("noContent");
      }
    });
    
  })


 

 // Modal Image

let modal = document.getElementById('modal');

let modalClose = document.getElementById('modal__close');
modalClose.addEventListener('click', function() { 
  modal.style.display = "none";
});


document.addEventListener('click', function (e) { 
  if (e.target.className.indexOf('shop__food__img') !== -1) {
      let img = e.target;
      let modalImg = document.getElementById("modal__content");
      let captionText = document.getElementById("modal__caption");
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt;
   }
});
