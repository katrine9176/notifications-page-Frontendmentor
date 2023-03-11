const messages = document.querySelectorAll('.chat__body-mess')
const readed = document.querySelector('.chat__read')
let num = document.querySelector('h1 span')
let number = Number(num.innerHTML)

const active = () => {
	messages.forEach(mess => {
		const child = mess.querySelector('p')
		const content = child.innerHTML

		mess.addEventListener('click', () => {
			if (mess.classList.contains('active')) {
				mess.classList.remove('active')
				child.innerHTML = content.split(' ').slice(0, -1).join(' ')
                number--
				num.innerHTML = number
			} else {
				mess.classList.add('active')
				child.innerHTML = content + '<button></button>'
                number++
				num.innerHTML = number
			}
		})
	})
}

const markReaded = () => {
	messages.forEach(mess => {
		const child = mess.querySelector('p')
		const content = child.innerHTML
		mess.classList.remove('active')
		child.innerHTML = content.split(' ').slice(0, -1).join(' ')
		num.innerHTML = 0
		number = 0
	})
}

active()
readed.addEventListener('click', markReaded)
