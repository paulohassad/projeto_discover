function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Pegar a imagem
  const img = document.querySelector("#profile img")
  // substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar imagem light
    img.setAttribute("src", "./assets/eu-light.jpeg")
  } else {
    // se tiver sem light mode, manter a imagem original
    img.setAttribute('src','./assets/eu-dark.jpeg')

  }
}
