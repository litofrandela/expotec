const nav = document.querySelector("#no_ver");
const abrir = document.querySelector("#abrir");
const cerrar =document.querySelector("#cerrar");
const c = document.querySelector("#c");
const ce = document.querySelector("#ce");
const cer = document.querySelector("#cer");
const logo = document.querySelector("#logo");

abrir.addEventListener("click", () => {
    logo.classList.add("ver");
})

cerrar.addEventListener("click", () => {
    logo.classList.remove("ver");
})

c.addEventListener("click", () => {
    logo.classList.remove("ver");
})

ce.addEventListener("click", () => {
    logo.classList.remove("ver");
})

cer.addEventListener("click", () => {
    logo.classList.remove("ver");
})

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

c.addEventListener("click", () => {
    nav.classList.remove("visible");
})

ce.addEventListener("click", () => {
    nav.classList.remove("visible");
})

cer.addEventListener("click", () => {
    nav.classList.remove("visible");
})