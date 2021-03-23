const headerBtn = document.getElementById('headerBtn');
const nav = document.getElementById('nav');

let navState = true;

headerBtn.addEventListener('click', ()=>{
    if(navState){
        nav.style.transform = "scaleY(1)";
        navState = false;
    }else{
        nav.style.transform = "scaleY(0)";
        navState = true;
    }
})
