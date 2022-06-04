// gestion des progresse-bars
// prg bar 1
const progressBar1 = document.querySelector("#pb1");
const changeProgress1 = (progress) => {
    progressBar1.style.width = progress + "%";
}
progressBar1.innerHTML = "90%";
progressBar1.style.textAlign = "center";
progressBar1.style.color = "grey";
// prg bar 2
const progressBar2 = document.querySelector("#pb2");
const changeProgress2 = (progress) => {
    progressBar2.style.width = progress + "%";
}
progressBar2.innerHTML = "86%";
progressBar2.style.textAlign = "center";
progressBar2.style.color = "grey";
// prg bar 3
const progressBar3 = document.querySelector("#pb3");
const changeProgress3 = (progress) => {
    progressBar3.style.width = progress + "%";
}
progressBar3.innerHTML = "75%";
progressBar3.style.textAlign = "center";
progressBar3.style.color = "grey";
window.addEventListener(
    "scroll",
    ()=>{
        for (let i = 0; i < 91; i++) {
            changeProgress1(i);
        }
        for (let i = 0; i < 86; i++) {
            changeProgress2(i);
        }
        for (let i = 0; i < 76; i++) {
            changeProgress3(i);
        }
    }
)
//  fin  progress-bar


// >   diaporama

const diapo = document.getElementById("diapo");
const imgElements = [];
const frameImg = document.createElement("div");
const imgFull =[] ;

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
while (i < 7) {
    imgElements[i] = document.createElement("img");
    imgElements[i].src = "./assets/img/p" + i + ".jpg";
    diapo.append(imgElements[i]);
    let n=i;
    imgElements[i].addEventListener(
        "click",
        () => {
            frameImg.style.display="flex";

            imgFull[n]=document.createElement("img");
            imgFull[n].width = 700;
            imgFull[n].height =500;
            imgFull[n].src ="./assets/img/p" + n + ".jpg";
            frameImg.append(imgFull[n]);
            
        }
    )
    
    i++;
}

frameImg.addEventListener(
    "click",
    (event)=>{
        if (!frameImg.querySelector("img").contains(event.target)) {
            frameImg.style.display = "none";
            frameImg.innerHTML ="";
        }
    }
)
