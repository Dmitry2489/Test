$(document).ready(function(){

    $('#carousel__section__f3').slick({
        autoplay:true,
        autoplaySpeed: 3000,
        arrows:false,
        loop: true,
        dots:true
    });

    $(".section__f2__form__button").click(function(e){
      if ($("#phone").val() == '') {

      }else{
        e.preventDefault();
        $(".fon__modal").fadeIn(300);

        setTimeout( function(){
          $(".fon__modal").fadeOut(300)
        }, 3000);
      }
    });

    $(document).click( function(event){
      if( $(event.target).closest(".fon__modal").length ){
        $(".fon__modal").fadeOut(300);
      };
      event.stopPropagation();
    });


});
