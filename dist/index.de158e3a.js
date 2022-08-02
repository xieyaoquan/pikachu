const mouthDiv = document.querySelectorAll(".down")[0];
const pikaPng = document.querySelector("#pikaPng");
console.log(pikaPng);
mouthDiv.onclick = (e)=>{
    const audio = document.querySelector("#pikaAudio");
    audio.autoplay = true;
    audio.play();
    pikaPng.style = "display:block;";
    setTimeout(()=>{
        pikaPng.style = "display:none;";
    }, 1500);
};

//# sourceMappingURL=index.de158e3a.js.map
