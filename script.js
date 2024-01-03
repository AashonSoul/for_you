const container1 = document.getElementById("container1");
const container2 = document.getElementById("container2");
const container3 = document.getElementById("container3");
const yes_btn = document.getElementById("yes_btn");
const okay_btn = document.getElementById("okay_btn");
const no_btn = document.getElementById("no_btn");
const bd_cont = document.getElementById("bd_cont");

function entered() {
    console.log("Func called");
    container1.classList.add("show_cont1");
    container2.classList.add("d_none");
};

yes_btn.addEventListener("click", ()=>{
    console.log("yes btn clicked");
    container1.classList.remove("show_cont1");
    container2.classList.remove("d_none");
    container2.classList.add("show_cont2");
});

what_btn.addEventListener("click", ()=>{
    console.log("what btn clicked");
    container2.classList.remove("show_cont2");
    container3.classList.add("show_cont3");
});

so_btn.addEventListener("click", ()=>{
    container3.classList.remove("show_cont3");
    setInterval(() => {
        wish();
    }, 2000);
})

function wish(){
    console.log("wish would be here");
    bd_cont.classList.add("show_wish");
    bd_cont.classList.add("bg");
}