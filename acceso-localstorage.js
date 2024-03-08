const cars = [
	{
		make: 'Ford',
		model: 'Mustang',
		year: 1969,
	},
	{
		make: 'Renualt',
		model: 'Megane',
		year: 2010,
	},
]

const shadowCopyCars = JSON.parse(JSON.stringify(cars))

const carJSON = JSON.stringify(cars)
console.log(carJSON)
console.log(carJSON[0].make)

const copyCar = { ...cars }

const carArr = JSON.parse(carJSON)
console.log(carArr)
console.log(carArr[0].make)

console.log(cars[0] === carArr[0])
