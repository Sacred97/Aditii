$(document).ready(function(){

    PopUpHide();

    $('.slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnFocus: false,
        pauseOnHover: true,
        pauseOnDotsHover: false
    });

});

function PopUpShow(){
    $("#popup").show(500);
}

function PopUpHide(time=0){
    $("#popup").hide(time);
}

$('.header__basket').click(function(){
    PopUpShow();
});

$('.basket-popup__close>a').click(function(){
    PopUpHide(500);

});

/*let row = 1

let price = $('.price')

for (let index = 0; index < price.length; index++) {

    let cost = price.text()
    console.log(cost)

    let datatable = price[index].text();
    console.log(datatable);
    
}
*/