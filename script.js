function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('light')

    // pegar a tag img

    const img = document.querySelector("#profile img")

    if (html.classList.contains('light')) {

        img.setAttribute('src', './assets/cat-whity.png')

    } else {

        img.setAttribute('src', "./assets/cat-black.png")


    }


    // substituir a imagem 
  // se estiver light mode, adicionar a imagem light
  // se estiver sem light mde, manter a imagem normal
}