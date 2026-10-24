var estado = window.document.getElementById("estado");
function atualizarEstado(texto, fundo, corTexto) {
  estado.innerText = texto;
  estado.style.backgroundColor = fundo;
  estado.style.color = corTexto;
}
var l = window.document.getElementById("ligado");
l.addEventListener("click", clic);
function clic() {
  atualizarEstado("Ligado", "#005c28", "#66c28e");
}
var d = window.document.getElementById("desligado");
d.addEventListener("click", clica);
function clica() {
  atualizarEstado("Desligado", "#8b0000", "#FF2525");
}
var e = window.document.getElementById("esperar");
e.addEventListener("click", clicar);
function clicar() {
  atualizarEstado("Em espera", "#FFD500", "#FFF394");
}
