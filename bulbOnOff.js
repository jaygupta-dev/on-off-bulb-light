let btnDiv = document.querySelector("#btnDiv");
let on = document.querySelector("#onBulb");
let off = document.querySelector("#offBulb");
let mvbtn = document.querySelector(".movebtn");
let cont = document.querySelector("body");

/* ***************** CLICK EVENT LISTENER ******************** */
mvbtn.addEventListener('click', () => {
    
    let offtxt = mvbtn.innerText;
    if (offtxt=='ON') {
        onLight();
    }
     if(offtxt=='OFF')
    {
         offLight();
    }
});

/* ***************** FUNCTION FOR LIGHT ON ******************** */
function onLight() {
    mvbtn.style.transform = "translateX(183px)";
    mvbtn.style.transition = "1s";
    on.style.display = "block";
    off.style.display = "none";
    btnDiv.style.backgroundColor = "#fdbf44"
    cont.classList.add("bgonlight", "shad");
    mvbtn.innerText="OFF";
}

/* ***************** FUNCTION FOR LIGHT OFF ******************** */
function offLight() {
    mvbtn.style.transform = "translateX(-12px)";
    mvbtn.style.transition = "1s";
    off.style.display = "block";
    on.style.display = "none";
    btnDiv.style.backgroundColor = "rgba(127, 124, 124, 0.637)"
    cont.classList.remove("bgonlight", "shad");
    cont.classList.add("bgofflight");
    mvbtn.innerText="ON";
}