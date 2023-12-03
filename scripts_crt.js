function clearInputError(inputElement) {
    inputElement.classList.remove("input_error");
    inputElement.parentElement.querySelector(".msg_error").textContent = "";
    inputElement.classList.add("msg_ofset");
}
function setInputError(inputElement, message) {
    inputElement.classList.add("input_error");
    inputElement.parentElement.querySelector(".msg_error").textContent = message;
    inputElement.classList.remove("msg_ofset");
}
function showSelSubmenu(){
    document.querySelector(".sel_div").style['max-height'] = "1000px";
    document.querySelector(".sel_div").style['padding-bottom'] = "6rem";
}
function hideSelSubmenu(){
    document.querySelector(".sel_div").style['max-height'] = "0";
    document.querySelector(".sel_div").style['padding-bottom'] = "0";
}
function progbar(a, b, c, d){
    var input = a + b + c + d;
    document.getElementById("progbar_prog").style.width = input + "%";
}

document.addEventListener("DOMContentLoaded", () => {
    var progr=0;
    var pr_c=0;
    var pr_p=0;
    var pr_st=0;
    var pr_s=0;
    var sel_in;
    var page=0;

    document.getElementById("btn_c_n").onclick = function(){
        if(page==0) {
            if(document.getElementById("sel_c").value != 0) {
                if(document.getElementById("sel_p").value != 0) {
                    document.getElementById("cr_st1").classList.add("hide");
                    document.getElementById("cr_st2").classList.remove("hide");
                    document.getElementById("cr_st1_c").classList.add("hide");
                    document.getElementById("btn_c_b").classList.remove("hide");
                    document.getElementById("pan_prog").style['justify-content']="space-between";
                    page=1;
                    progbar(progr);
                }
                else {
                    setInputError(document.getElementById("sel_p"), "Select a city");
                }
            }
            else {
                setInputError(document.getElementById("sel_c"), "Select a country");
            }
        }
        else if(page==1) {
            if(pr_c + pr_p + pr_s + pr_st === 100){
                if(document.querySelector(".sel_div").style['max-height'] == "1000px"){time=700;}
                hideSelSubmenu();
                setTimeout(() => { 
                    document.getElementById("cr_st2").classList.add("hide");
                    document.getElementById("cr_st3").classList.remove("hide");
                    document.getElementById("footer_cr").classList.add("hide");
                    page=2;
                }, time);

            }
            else
            {
                alert("At least one flter or one place must be selected");
            }
        }
    }
    document.getElementById("btn_c_b").onclick = function(){
        var time=0;
        if(page==1)
        {
            if(document.querySelector(".sel_div").style['max-height'] == "1000px"){time=700;}
            hideSelSubmenu();
            setTimeout(() => { 
                document.getElementById("cr_st1").classList.remove("hide");
                document.getElementById("cr_st2").classList.add("hide");
                document.getElementById("cr_st1_c").classList.remove("hide");
                document.getElementById("cr_st2_c").classList.add("hide");
                document.getElementById("btn_c_b").classList.add("hide");
                document.getElementById("pan_prog").style['justify-content']="right";
                page=0;
            }, time);
        }
    }

    document.getElementById("btn_si").onclick = function(){
        document.getElementById("cr_st2_c").classList.add("hide");
        document.getElementById("cr_st3_c").classList.remove("hide");

        document.getElementById("btn_si").classList.remove("bcb");
        document.getElementById("btn_sf").classList.remove("bcb");
        document.getElementById("btn_si").classList.add("bcb_s");
        document.getElementById("btn_si").classList.remove("bcb_ns");
        document.getElementById("btn_sf").classList.remove("bcb_s");
        document.getElementById("btn_sf").classList.add("bcb_ns");
        showSelSubmenu();
        pr_st=25;
        pr_s = 0;
        if(sel_s_i>0){ pr_s = 25; }
        else{ pr_s = 0; }
        progbar(pr_c, pr_p, pr_st, pr_s);
    }
    document.getElementById("btn_sf").onclick = function(){
        document.getElementById("cr_st2_c").classList.remove("hide");
        document.getElementById("cr_st3_c").classList.add("hide");

        document.getElementById("btn_si").classList.remove("bcb");
        document.getElementById("btn_sf").classList.remove("bcb");
        document.getElementById("btn_si").classList.remove(".bcb_s");
        document.getElementById("btn_si").classList.add("bcb_ns");
        document.getElementById("btn_sf").classList.add("bcb_s");
        document.getElementById("btn_sf").classList.remove("bcb_ns");
        showSelSubmenu();
        pr_st=25;
        pr_s = 0;
        if(sel_s_f>0){ pr_s = 25; }
        else{ pr_s = 0; }
        progbar(pr_c, pr_p, pr_st, pr_s);
    }

    document.querySelectorAll(".input_b").forEach(inputElement => {
        inputElement.addEventListener("focus", e => {
            if (e.target.id === "sel_c") {
                document.getElementById("sel_p").parentElement.style['max-height'] = "0px"
            }
            if(e.target.id === "sel_p") {
                document.getElementById("sel_c").parentElement.style['max-height'] = "0px"
            }
            showSelSubmenu();
            sel_in = e.target.id;
            clearInputError(inputElement);
        });
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "sel_c") {
                document.getElementById("sel_p").parentElement.style['max-height'] = "500px"
                if(e.target.value != 0) {
                    pr_c = 25;
                }
                else {
                    pr_c = 0;
                }
            }
            if(e.target.id === "sel_p") {
                document.getElementById("sel_c").parentElement.style['max-height'] = "500px"
                if(e.target.value != 0) {
                    pr_p = 25;
                }
                else {
                    pr_p = 0;
                }
            }
            hideSelSubmenu();
            progbar(pr_c, pr_p, pr_st, pr_s);
        });
    });

    document.querySelectorAll(".dest_ico").forEach(inputElement => {
        inputElement.addEventListener("click", e=> {
            document.getElementById(sel_in).value = e.target.parentElement.querySelector(".dest_name").textContent;
        });
    });

    var sel_s_i=0;
    var sel_s_f=0;
    document.querySelectorAll(".filt_box").forEach(inputElement => {
        inputElement.addEventListener("click", e=> {
            e.target.classList.toggle("fbs");
            if(e.target.classList.contains("fbs")){
                sel_s_f++;
            }
            else{ sel_s_f--; }
            if(sel_s_f>0){ pr_s = 25; }
            else{ pr_s = 0; }
            progbar(pr_c, pr_p, pr_st, pr_s);
        });
    });
    document.querySelectorAll(".dest_desc").forEach(inputElement => {
        inputElement.addEventListener("click", e=> {
            e.target.classList.toggle("ds");
            if(e.target.classList.contains("ds")){
                sel_s_i++;
            }
            else{ sel_s_i--; }
            if(sel_s_i>0){ pr_s = 25; }
            else{ pr_s = 0; }
            progbar(pr_c, pr_p, pr_st, pr_s);
        });
    });

    var sel_count=0;
    var filter = document.getElementById("filt_sel");
    document.querySelectorAll(".item_sel").forEach(inputElement => {
        inputElement.addEventListener("click", e=> {
            document.getElementById("filt_sel").textContent = e.target.textContent;
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
        });
    });

});