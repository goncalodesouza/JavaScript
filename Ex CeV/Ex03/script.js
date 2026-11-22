let btn = window.document.getElementById("button");
btn.addEventListener("click", contagem);
function contagem() {
  const i = Number(window.document.getElementById("inicio").value);
  const f = Number(window.document.getElementById("fim").value);
  const p = Number(window.document.getElementById("passo").value);
  const r = window.document.getElementById("resultado");

  if (Number.isNaN(i) || Number.isNaN(f) || Number.isNaN(p) || p <= 0) {
    r.innerText = "[ERROR] Introduz um valor válido!";
    return;
  }

  let seq = "";

  if (i < f) {
    for (let c = i; c <= f; c += p) {
      seq = seq + c + "\n";
    }
  }
  if (i > f) {
    for (let c = i; c >= f; c -= p) {
      seq = seq + c + "\n";
    }
  }
  r.innerHTML = seq;
}
