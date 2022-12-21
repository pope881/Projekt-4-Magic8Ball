const ball = document.querySelector('img')
const answer = document.querySelector('.answer')
const input = document.querySelector('input')
const error = document.querySelector('.error')
const answerArr = ['a ja wiem', 'nie wiem nie powien Panu', 'chyba jednak masz rację', 'oczywiście', 'taa.. i co jescze']

const clickBall = () => {
	ball.classList.add('shake-animation')
	setTimeout(checkInput, 1000)
}

const generateAns = () => {
	const number = Math.floor(Math.random() * 5)
	answer.innerHTML = `<span>Odpowiedz:</span> ${answerArr[number]}`
}

const checkInput = () => {
	if (input.value !== '' && input.value.slice(-1) === '?') {
		generateAns()
		error.textContent = ''
	} else if (input.value !== '' && input.value.slice(-1) !== '?') {
		error.textContent = 'Pytanie musi być zakończone znakiem "!" '
        answer.textContent = ''
	} else {
        error.textContent = 'Musisz zadać jakieś pytanie!'
        answer.textContent = ''
	}
	ball.classList.remove('shake-animation')
}

ball.addEventListener('click', clickBall)
