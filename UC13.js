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
