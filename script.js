const overlay = document.getElementById("overlay");
const frame = document.getElementById("gameFrame");
const loader = document.getElementById("iframeLoader");
const title = document.getElementById("gameTitle");

function openGame(url, gameTitle){

    title.textContent = gameTitle;

    overlay.classList.add("active");

    loader.style.display = "flex";
    frame.style.display = "none";

    frame.src = url;

    frame.onload = () => {

        loader.style.display = "none";
        frame.style.display = "block";

    };

}

function closeGame(){

    overlay.classList.remove("active");
    frame.src = "";

}

function fullscreenGame(){

    const box = document.getElementById("gameBox");

    if(box.requestFullscreen){
        box.requestFullscreen();
    }

}

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("siteLoader").style.display = "none";

    }, 900);

});

window.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){
        closeGame();
    }

});

overlay.addEventListener("click", (e) => {

    if(e.target === overlay){
        closeGame();
    }

});

lucide.createIcons();
