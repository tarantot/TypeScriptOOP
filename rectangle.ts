class Rectangle {
    width;
    height;

    constructor(w, h){
        this.width = w;
        this.height = h;
    }

    calcArea() {
        return this.width * this.height;
    }

    calcPerimeter() {
        return this.width + this.height;
    }
}


const rect1 = new Rectangle(5, 10)
const rect2 = new Rectangle(52, 102)
const rect3 = new Rectangle(10, 102)

rect1.calcArea()


class Rectangle_private {
    private _width;
    private _height;

    constructor(w, h) {
        this._width = w;
        this._height = h;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        if (value <= 0) {
            this._width = 1;
        } else {
            this._width = value;
        }
    }
}