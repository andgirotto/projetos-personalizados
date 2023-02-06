/*
identificar o click do botao do mouse
abrir a modal
identificar o click no botao de fechar
fechar a modal
fechar o audio do video
reabrir o link do video
*/

const botaoVejaTrailer = document.querySelector (".botao-trailer");
const modal = document.querySelector (".modal");
const botaoFecharTrailer = document.querySelector (".fechar-modal");
const video = document.getElementById ("video");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
};

botaoVejaTrailer.addEventListener ("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

botaoFecharTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src","");
});