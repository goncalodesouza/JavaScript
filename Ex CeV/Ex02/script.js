function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fAno = document.getElementById("txtano");
  var resultado = document.getElementById("res");
  if (fAno.value.length == 0 || fAno.value > ano) {
    window.alert("[ERROR] Verifica os dados e preenche outra vez!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fAno.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute(
          "src",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcpax_x_Lgt_XBBxH1H40D0boXf1hyOpfcRUAxBrVTZw&s=10",
        );
      } else if (idade < 21) {
        // Jovem
        img.setAttribute(
          "src",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT06g-8sd5p1VqtQ6BnJR15dQADYAWqgvzug7kfVoj1Zw&s=10",
        );
      } else if (idade < 50) {
        // Adulto
        img.setAttribute(
          "src",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1jotUMStt530AxO5URHTaV6_bQ7xK-I1XUzP8JgcPRQ&s=10",
        );
      } else {
        // Idoso
        img.setAttribute(
          "src",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGLQtnby0ld6zrDs2ycjpXlsGPOWEqYIpniD8fyBpl7g&s=10",
        );
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute(
          "src",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnp3dkpuOEU4nOJRNGOwiQd0LndrVjh98mpl1XAqiEaw&s=10",
        );
      } else if (idade < 21) {
        // Jovem
        img.setAttribute(
          "src",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdiqZ1aofVQobIxLQ94yrsZJGrGtrAtQ6mB24BXsPDgw&s=10",
        );
      } else if (idade < 50) {
        // Adulto
        img.setAttribute(
          "src",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOh2vtERu25Q7PCE-03VjpHQq02KVeqd_zIDSf_DVZCw&s=10",
        );
      } else {
        // Idoso
        img.setAttribute(
          "src",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIpxZhvsd5BdwjzAJvBBRHa-TiPar4MMnOXx8-adNi5g&s=10",
        );
      }
    }
    resultado.style.textAlign = "center";
    resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img);
  }
}
