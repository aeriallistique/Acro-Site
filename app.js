const $ = (q)=> document.getElementById(q);
const $$ = (q)=> document.querySelector(q);
const headerBtn = document.getElementById('headerBtn');
const nav = document.getElementById('nav');
const modal = document.getElementById('modal');
const insideModal = document.getElementById('modal-display');
let navState = true;

const highlightsButtons = [ $('photos-btn'),$('videos-btn'),$('training-btn'),$('cv-btn')]
const mainContainerDivs= [$$('.main-container .photos'), $$('.main-container .videos'),
$$('.main-container .training'), $$('.main-container .cv')]


const showMainContainerDiv = (e)=>{
    mainContainerDivs.forEach(el =>{
        if(el.classList.contains(e.target.id)){
            el.classList.remove('display-none')
        }else{el.classList.add('display-none')}
    })
}

function handleHighlightsBtn(e){
    let target = e.target.id;

    if(target === 'photos-btn' || target === 'videos-btn' || 
       target === 'training-btn' || target === 'cv-btn'){
        showMainContainerDiv(e);
    }else{return}
}

function showClickedPhoto(e){
    modal.classList.remove('display-none');
    insideModal.innerHTML = e.target.outerHTML;
}

function showClickedVideo(e){
    console.log(e.target.dataset.link);
    modal.classList.remove('display-none');
    insideModal.innerHTML = e.target.dataset.link;

}

function removeModal(){ 
    modal.classList.add('display-none');
    if(navState === false){
        nav.style.transform = "scaleY(0)";
        navState = true;
    }
}



const videoItemArray = document.querySelectorAll('.videos .item');
const trainingItemArray = document.querySelectorAll('.training .item');

const videosIframeLinks = [`<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/385643349" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<p><a href="https://vimeo.com/385643349">Demo Aeriallistique</a> from <a href="https://vimeo.com/user8698933">Aeriallistique</a> on <a href="https://vimeo.com">Vimeo</a>.</p>`,
 `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/197341276" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<p><a href="https://vimeo.com/197341276">Aerial Straps @ Schuhbecks Teatro, Munich</a> from <a href="https://vimeo.com/user8698933">Aeriallistique</a> on <a href="https://vimeo.com">Vimeo</a>.</p>`,
 `<iframe width="560" height="315" src="https://www.youtube.com/embed/-NJBeae6VE0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
 `<iframe width="560" height="315" src="https://www.youtube.com/embed/uWmxYAeEPSo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
 `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/222960821" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
 <p><a href="https://vimeo.com/222960821">Hand Balancing Act at Schuchbecks Teatro in Munich</a> from <a href="https://vimeo.com/user8698933">Aeriallistique</a> on <a href="https://vimeo.com">Vimeo</a>.</p>`,
 `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/528876255" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
 <p><a href="https://vimeo.com/528876255">Andi-Handbalancing-WideShot-Take1.mp4</a> from <a href="https://vimeo.com/user8698933">Aeriallistique</a> on <a href="https://vimeo.com">Vimeo</a>.</p>`, 
 `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/332001366" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
 <p><a href="https://vimeo.com/332001366">Andi performing Aerial Straps in Scotland</a> from <a href="https://vimeo.com/user8698933">Aeriallistique</a> on <a href="https://vimeo.com">Vimeo</a>.</p>`, 
 `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/285786177" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
 <p><a href="https://vimeo.com/285786177">Andi &amp; Jenny Duo Aerial</a> from <a href="https://vimeo.com/user8698933">Aeriallistique</a> on <a href="https://vimeo.com">Vimeo</a>.</p>`, 
 `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/316254603" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
 <p><a href="https://vimeo.com/316254603">Andi&rsquo;s Tall Canes Hand Balancing</a> from <a href="https://vimeo.com/user8698933">Aeriallistique</a> on <a href="https://vimeo.com">Vimeo</a>.</p>` ];

const trainingIframeLinks = [`<iframe width="560" height="315" src="https://www.youtube.com/embed/4h1MVcGm1bk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
 `<iframe width="560" height="315" src="https://www.youtube.com/embed/4h1MVcGm1bk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
 `<iframe width="560" height="315" src="https://www.youtube.com/embed/W1Y0aCQkaGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
 `<iframe width="560" height="315" src="https://www.youtube.com/embed/4s9Vi0Jgj9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
 `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZCeNd1M26Ak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
 `<iframe width="560" height="315" src="https://www.youtube.com/embed/6WG80aQ56kY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
 `<iframe width="560" height="315" src="https://www.youtube.com/embed/RwVcAUrusNs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
 `<iframe width="560" height="315" src="https://www.youtube.com/embed/DTYo5o4RvvI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
 `<iframe width="560" height="315" src="https://www.youtube.com/embed/Azyty8R8DHI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`]

function setDataAttributes(divs, links){
    divs.forEach((el, idx)=>{
        el.setAttribute('data-link', links[idx]);
    })
}
function handleNavButton(){
    if(navState){
        modal.classList.remove('display-none');
        nav.style.transform = "scaleY(1)";
        navState = false;
    }else{
        nav.style.transform = "scaleY(0)";
        navState = true;
    }
}
       


function initialize(){
    headerBtn.addEventListener('click', handleNavButton);
    setDataAttributes(videoItemArray, videosIframeLinks);
    setDataAttributes(trainingItemArray, trainingIframeLinks);
    highlightsButtons.forEach(btn=>{
        btn.addEventListener('click', handleHighlightsBtn)
    });
    mainContainerDivs[0].addEventListener('click', showClickedPhoto);
    mainContainerDivs[1].addEventListener('click', showClickedVideo);
    modal.addEventListener('click', removeModal);
}
initialize();