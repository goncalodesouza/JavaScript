var btn = window.document.getElementById("button");
btn.addEventListener("click", calcular);
function calcular() {
  let n = Number(window.document.getElementById("numero").value);
  let tab = window.document.getElementById("tabuada");

  if (Number.isNaN(n) || n < 0) {
    return;
  }

  var mult = "";

  let c = 1;
  while (c <= 10) {
    let item = document.createElement("option");
    item.text = `${n} x ${c} = ${n * c}`;
    tab.appendChild(item);
    c++;
  }
}
