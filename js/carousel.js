window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 2,
        slidesToScroll: 2,
        draggable: true,
        dots: '.dots',
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 330,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 3,
                slidesToScroll: 3,
               
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 500,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                
              }
            }
           
          ]
      });

   
})

