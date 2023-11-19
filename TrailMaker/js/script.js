$(".btn__burger").click(function () {
  $(".body").toggleClass("body__active");
  $(".spanOne").toggleClass("spanOne__active");
  $(".spanTwo").toggleClass("spanTwo__active");
  $(".btn__burger").toggleClass("btn__burger__active");
  $(".header__burger").toggleClass("header__burger__active");
});
