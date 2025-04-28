
let cube = document.querySelector(".cube")
let frontface = document.querySelector("#frontface")
let topface = document.querySelector("#frontface")
let leftface = document.querySelector("#leftface")
let rightface = document.querySelector("#rightface")
let bottomface = document.querySelector("#bottomface")
let backface = document.querySelector("#backface")
let rotatex = document.querySelector("#rotatex")
let rotatey = document.querySelector("#rotatey")
let rotatez = document.querySelector("#rotatez")



rotatex.addEventListener("change", (e)=>{
    cube.style.animation = "none"
    cube.style.transform = `rotateX(${rotatex.value}deg)`
})
rotatey.addEventListener("change", (e)=>{
    cube.style.animation = "none"
    cube.style.transform = `rotateY(${rotatey.value}deg)`
})
rotatez.addEventListener("change", (e)=>{
    cube.style.animation = "none"
    cube.style.transform = `rotateZ(${rotatez.value}deg)`
})


frontface.addEventListener("change", (e) => {
    document.documentElement.style.setProperty("--frontcolor" ,frontface.value)
 })
topface.addEventListener("change", (e) => {
    document.documentElement.style.setProperty("--topcolor" ,topface.value)
 })
leftface.addEventListener("change", (e) => {
    document.documentElement.style.setProperty("--leftcolor" ,leftface.value)
 })
rightface.addEventListener("change", (e) => {
    document.documentElement.style.setProperty("--rightcolor" ,rightface.value)
 })
bottomface.addEventListener("change", (e) => {
    document.documentElement.style.setProperty("--bottomcolor" ,bottomface.value)
 })
backface.addEventListener("change", (e) => {
    document.documentElement.style.setProperty("--backcolor" ,backface.value)
 })

document.querySelector("#size").addEventListener("change", (e) => {
    e.preventDefault();

    document.documentElement.style.setProperty("--size", e.target.value + "px")
    document.documentElement.style.setProperty("--tran", (e.target.value) / 2 + "px")
    document.documentElement.style.setProperty("--neg-tran", -(e.target.value) / 2 + "px")


});

