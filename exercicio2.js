// Faça o exercício da galeria de imagens aqui
// Este arquivo ainda não está incluído no arquivo HTML

const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

let currentImg = 0
document.querySelectorAll('.controle').forEach((button) => {
  button.addEventListener('click', (event) => {
    if(event.target.id === 'proximo') {
      currentImg++
      if(currentImg >= todasAsImagens.length) {
        currentImg = 0
      }
    } else {
      currentImg--
      if(currentImg < 0) {
        currentImg = todasAsImagens.length - 1
      }
    }
    document.querySelector('#slide').src = servidorDasImagens + todasAsImagens[currentImg]
  })
})