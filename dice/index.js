
let cube = document.querySelector(".cube")
let intervalId;
document.querySelector("#roll").addEventListener("click", () => {
    let xtoations = (Math.round(Math.random() * 8) + 2) * 90
    let ytoations = (Math.round(Math.random() * 8) + 2) * 90
    cube.style.transform = `rotateX(${xtoations}deg) rotateY(${ytoations}deg)`


})


