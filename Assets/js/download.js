// Download PDF file

var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };

    $('#cmd').click(function () {
        doc.fromHTML($('.tab-content').html(), 25, 25, {
            'width': 700,
            'height': 700,
                'elementHandlers': specialElementHandlers
        });
        doc.save('sample-file.pdf');
    });


    // Add To Cart

    (function(){
 
        $("#cart").on("click", function() {
          $(".shopping__cart").fadeToggle( "fast");
        });
        
      })();