let contacts = []

const data = localStorage.getItem('contacts')
if (data) contacts = JSON.parse(data)

const containerElDOM = document.querySelector('ul')

renderContacts()

const submitBtn = document.querySelector('button')

submitBtn.addEventListener('click', () => {
	const newContact = {
		name: document.querySelector('#name').value,
		phone: document.querySelector('#phone').value,
		image: document.querySelector('#image').value,
	}

	contacts.push(newContact)

	localStorage.setItem('contacts', JSON.stringify(contacts))

	renderContacts()
})

function renderContacts() {
	containerElDOM.innerHTML = ''

	contacts.forEach((contact) => {
		const card = createCard(contact)

		containerElDOM.appendChild(card)
	})
}

function createCard(contact) {
	const card = document.createElement('li')
	const div = document.createElement('div')
	const h3 = document.createElement('h3')
	h3.textContent = contact.name
	const p = document.createElement('p')
	p.textContent = contact.phone
	const img = document.createElement('img')

	img.src = contact.image

	div.append(h3, p)
	card.append(div, img)

	return card
}

function loadSeed() {
	const contacts = [
		{
			name: 'Karla',
			phone: '+354 121222',
			image:
				'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/03/avatar-facebook-2632445.jpg',
		},
		{
			name: 'Carlas',
			phone: '+354 121222',
			image:
				'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/03/avatar-facebook-2632445.jpg',
		},
		{
			name: 'Blanca',
			phone: '+354 121222',
			image:
				'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/03/avatar-facebook-2632445.jpg',
		},
	]

	localStorage.setItem('contacts', JSON.stringify(contacts))
}
