function loginSuccess() {
    document.querySelector(".form_al").classList.add("hide");
    document.querySelector(".screen_fixed").classList.add("hide");
}
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".navbar_item_btn").onclick = function(){
        document.querySelector(".dropdown").classList.toggle("hide");
    }

    document.querySelector(".navbar_signin_btn").onclick = function(){
        document.querySelector(".form_al").classList.toggle("hide");
        document.querySelector(".screen_fixed").classList.toggle("hide");
    }
    document.querySelector(".navbar_singin_user").onclick = function(){
        document.querySelector(".dropdown_user").classList.toggle("hide");
    }
    document.querySelector(".close_btn").onclick = function(){
        document.querySelector(".form_al").classList.toggle("hide");
        document.querySelector(".screen_fixed").classList.toggle("hide");
    }
});