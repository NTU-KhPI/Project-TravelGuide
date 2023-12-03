document.addEventListener("DOMContentLoaded", () => {

    var sel_count=0;
    var filter = document.getElementById("filt_sel");
    document.querySelectorAll(".item_sel").forEach(inputElement => {
        inputElement.addEventListener("click", e=> {
            e.target.classList.toggle("item_sel_s");
            if(e.target.classList.contains("item_sel_s")){
                sel_count++;
            }
            else{
                sel_count--;
            }
            if(sel_count===0 || sel_count===6){
                filter.textContent = "Selected everything"
            }
            else if(sel_count>1){
                filter.textContent = "Selected multiple"
            }
            else{
                document.getElementById("filt_sel").textContent = document.getElementsByClassName("item_sel_s")[0].textContent;
            }
        });
    });

});