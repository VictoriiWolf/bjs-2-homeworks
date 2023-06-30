function parseCount(number) {
    let parseValue = Number.parseFloat(number)
        if(Number.isNaN(parseValue)) throw new Error ('Невалидное значение');
        return parseValue
        }

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (error) {
        return error;
    }
}


class Triangle{
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c
    }
    
    if(a > (b + c) || b > (a + c) || c > (a + b)) {
        throw new Error ('Треугольник с такими сторонами не существует')
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const S = this.perimeter() / 2;
        this._area = Number(Math.sqrt((s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(3)));
        return this._area;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle;
        } catch (error) {
            return 
    }
}
