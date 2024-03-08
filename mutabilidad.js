const student1 = {
	name: 'Karla',
	bootcamp: {
		mode: 'Online',
		intake: 'feb24',
	},
}

const student2 = { ...student1, bootcamp: { ...student1.bootcamp } }

console.log(student1.bootcamp === student2.bootcamp)

student2.name = 'Blanca'
student2.bootcamp.intake = 'sep21'

console.log(student1)
