function loginSuccess() {
    document.querySelector(".form_al").classList.add("hide");
    document.querySelector(".screen_fixed").classList.add("hide");
}
document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("LoginLink").onclick = function(){
        document.querySelector(".form_al").classList.toggle("hide");
        document.querySelector(".screen_fixed").classList.toggle("hide");
    }
});