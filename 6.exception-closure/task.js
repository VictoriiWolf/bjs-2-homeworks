/* Task 1 */

function parseCount(number) {
	let parseValue = Number.parseFloat(number);
	if (Number.isNaN(parseValue)) {
		throw new Error('Невалидное значение');
	}
	return parseValue;
}

const validateCount = number => {
	try {
		return parseCount(number);
	} catch (error) {
		return error;
	}
}


/* Task 2 */

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if (a > b + c || b > a + c || c > a + b) {
			throw new Error('Треугольник с такими сторонами не существует')
		}
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const s = this.perimeter / 2;
		return Number(Math.sqrt((s * (s - this.a) * (s - this.b) * (s - this.c))).toFixed(3));
	}
}

const getTriangle = (a, b, c) => {
	try {
		let triangle = new Triangle(a, b, c);
		return triangle;
	} catch (error) {
		return {
			get perimeter() {
				return 'Ошибка! Треугольник не существует';
			},
			get area() {
				return 'Ошибка! Треугольник не существует';
			}
		}
	}
}