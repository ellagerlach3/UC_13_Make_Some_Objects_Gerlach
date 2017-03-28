function Cube(length, mass) {
    this.length = length;
    this.mass = mass;
    this.volume = function () {
        return Math.pow(this.length, 3);
    }
    this.surfaceArea = function () {
        return Math.pow(this.length, 2) * 6;
    }
    this.density = function () {
        return this.mass / this.volume();
    }
}

function Dog(name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;
}

var Dog = new Dog("Kona", 11, "Sleepy");
