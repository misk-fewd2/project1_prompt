

$(function(){  /* function with no name - */


  $(".enter").click(function() {
    let pin1 = $("#pin").val();
    alert(pin1);

  });


  // $("#myFloatingText").animate({ 
  // // 
  //   // .animate({width: "300px"})
  //   //         .animate({height: "300px"})
  //   //         .animate({marginLeft: "150px"})
  //   //         // .animate({borderWidth: "10px"})
  //   //         .animate({opacity: 0.5});

  //   // top: "+=80%",
  //   // left: "+=100",
  //   // marginLeft: "0.9in", opcaity: 0.9 },1300);

  //   left: '250px',
  //   opacity: '0.5',
  //   height: '150px',
  //   width: '150px'
  // });

  


    $(".hamburger").click(function(){
        $(".mobile__menu").show();
        
    });
/* automatically assign the current year */
let date = new Date();
$(".date").html(date.getFullYear()); 

/* moving text at the above */
    $(".reveiw__content").slick({
autoplay: true,
    });
/* Giraffes pictures slides */
    $(".partner__items").slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]
      });
})