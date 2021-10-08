var a = document.getElementById("js_burger_btn");
var s = document.getElementById("js_menu_flow");

var burgerBtn = document.getElementById("js_burger_btn");
burgerBtn.addEventListener("click", function (e) {
  e.stopPropagation(); 
  magicHappens();
});
function magicHappens() {
  a.classList.toggle("burger_rotation");
  s.classList.toggle("flowing_navigation");
}

document.addEventListener("click", function (e) {
  a.classList.remove("burger_rotation");
  s.classList.remove("flowing_navigation");
});

$('.photos-slider_one').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    centerMode: true,
    variableWidth: true,
    arrows:false,
    dots:false,
  });
$('.photos-slider_two').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1100,
    centerMode: true,
    variableWidth: true,
    arrows:false,
    dots:false,
  });
$('.photos-slider_three').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1250,
    centerMode: true,
    variableWidth: true,
    arrows:false,
    dots:false,
  });