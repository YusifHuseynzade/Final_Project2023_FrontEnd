//  LOAD MORE FUNCTION

$(document).ready(function(){
    $(".load").slice(0, 4).show();
    $(".load__more").on("click", function(e){
      e.preventDefault();
      $(".load:hidden").slice(0, 2).slideDown();
      if($(".load:hidden").length == 0) {
        $(".load__more").text("No Content").addClass("noContent");
      }
    });
    
  })