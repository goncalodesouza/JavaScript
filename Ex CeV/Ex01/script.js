function carregar() {
  var m = window.document.getElementById("msg");
  var img = window.document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  m.innerText = `Agora são ${hora} horas.`;
  if (hora >= 0 && hora < 12) {
    // Bom dia
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7CHLpzLSOWTZdK3d8y28qcl7ADaMDVdw99VONqhzflA&s=10"
      alt="Foto de dia  "
      className="src"
    />;
    document.body.style.background = "#FFF0D1";
  } else if (hora >= 12 && hora < 18) {
    // Boa tarde
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7oBrdSyOJ1iZHUJipL4IjTjj9W76-uH9hBjNpi9kZjg&s=10"
      alt="Foto de tarde"
      className="src"
    />;
    document.body.style.background = "#C96541";
  } else {
    // Boa noite
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQEV9RSEr6rruSt7cmRrO6UQZLwIjZWVLP6gOu0bFaA&s=10"
      alt="Foto de noite"
      className="src"
    />;
    document.body.style.background = "#191970";
  }
}
