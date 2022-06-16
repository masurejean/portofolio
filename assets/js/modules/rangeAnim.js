const basDePage =()=> {// *gestion des progresse-bars *//


//* prg bar 1 *//
const progressBar1 = document.querySelector("#pb1");
const changeProgress1 = (progress) => {
    progressBar1.style.width = progress + "%";
}
//progressBar1.innerHTML = "90%";
progressBar1.style.textAlign = "center";
progressBar1.style.color = "grey";


//* prg bar 2 *//
const progressBar2 = document.querySelector("#pb2");
const changeProgress2 = (progress) => {
    progressBar2.style.width = progress + "%";
}
//progressBar2.innerHTML = "86%";
progressBar2.style.textAlign = "center";
progressBar2.style.color = "grey";


//* prg bar 3 *//
const progressBar3 = document.querySelector("#pb3");
const changeProgress3 = (progress) => {
    progressBar3.style.width = progress + "%";
}
//progressBar3.innerHTML = "75%";
progressBar3.style.textAlign = "center";
progressBar3.style.color = "grey";
window.addEventListener(
    "scroll",
    () => {
        for (let i = 0; i < 91; i++) {
            progressBar1.innerHTML = i+"%";
            changeProgress1(i);
        }
        for (let i = 0; i < 86; i++) {
            progressBar2.innerHTML = i+"%";
            changeProgress2(i);
        }
        for (let i = 0; i < 76; i++) {
            progressBar3.innerHTML = i+"%";
            changeProgress3(i);
        }
    }
)
//*  fin  progress-bar *//
}

export{basDePage};