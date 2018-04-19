// Faça o exercício dos parágrafos aqui
// Este arquivo ainda não está incluído no arquivo HTML
document.querySelectorAll('.botao-expandir-retrair').forEach((button) => {
	button.addEventListener('click', () => {
		if(button.parentElement.classList.toggle('expandido')) {
			button.innerHTML = '-'
		} else {
			button.innerHTML = '+'					
		}
	})
})