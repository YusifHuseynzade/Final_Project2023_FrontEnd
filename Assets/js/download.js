 
    // Add To Cart

    (function(){
 
        $("#cart").on("click", function() {
          $(".shopping__cart").fadeToggle( "fast");
        });
        
      })();


    // Download PDF file

window.onload = function(){
    document.getElementById("download")
    .addEventListener("click", ()=>{
        const invoice = this.document.getElementById("invoice");
        console.log(invoice);
        console.log(window);
        var opt = {
            width: 50,
            margin:        1,
            filename:     'menu.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait'}
          };
        html2pdf().from(invoice).set(opt).save();

    })
  }  
