const add1= document.getElementById("add");
const schedule1= document.getElementById("schedule");

function newpage(){
    window.open('client page/Client-Page.html');
}

function newpage1(){
    window.open('client meeting/Client-Meeting-Schedule.html');
}

schedule1.addEventListener("click",newpage1);
add1.addEventListener("click",newpage);