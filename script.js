// const cars = [
// 	{
// 		make: 'Ford',
// 		model: 'Mustang',
// 		year: 1969,
// 	},
// 	{
// 		make: 'Renualt',
// 		model: 'Megane',
// 		year: 2010,
// 	},
// ]

// localStorage.setItem('nombre', 'Vamos')
// localStorage.setItem('age', 4)

// const value = localStorage.getItem('age')

// localStorage.setItem('coches', JSON.stringify(cars))

const arr = JSON.parse(localStorage.getItem('coches'))

console.log(arr[0].make)
