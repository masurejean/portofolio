// >   diaporama
const diapo =()=>{
const diapo = document.getElementById("diapo");
const imgElements = [];
const frameImg = document.createElement("div");
const imgFull = [];

frameImg.style.width = "100vw";
frameImg.style.height = "100vh";
frameImg.style.backdropFilter = "blur(8px)";
frameImg.style.backgroundColor = "rgba(255,255,255,0.7)"
frameImg.style.display = "none";
frameImg.style.justifyContent = "center";
frameImg.style.alignItems = "center";

frameImg.style.position = "fixed";


diapo.style.padding = "4rem";



document.body.prepend(frameImg);




let i = 1;
while (i < 9) {
    imgElements[i] = document.createElement("img");
    imgElements[i].src = "./assets/img/p" + i + ".jpg";
    diapo.append(imgElements[i]);
    let n = i;
    imgElements[i].addEventListener(
        "click",
        () => {
            frameImg.style.display = "flex";

            imgFull[n] = document.createElement("img");
            imgFull[n].width = 700;
            imgFull[n].height = 500;
            imgFull[n].src = "./assets/img/p" + n + ".jpg";
            frameImg.append(imgFull[n]);

        }
    )

    i++;
}

frameImg.addEventListener(
    "click",
    (event) => {
        if (!frameImg.querySelector("img").contains(event.target)) {
            frameImg.style.display = "none";
            frameImg.innerHTML = "";
        }
    }
)
}

export{ diapo };