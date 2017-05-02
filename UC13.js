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

//The Pet object also has a sleepy property that is initially 0, a hunger property that is initially zero, and an awake property that is initially true.

function Pet(species, name) {
    this.species = species;
    this.name = name;
    this.sleepy = 0;
    this.hunger = 0;
    this.awake = true;

//The Pet object has a speak method that returns "Woof! That means I love you!" if the pet is a dog and "Ugh. meow." if the pet is a cat.

    this.sleepy++;
    this.hunger++;

    this.speak = function() {
        if(this.species == "Dog") {
            return "Woof! That means I love you!";
        }
        else if(this.species == "Cat") {
            return "Ugh. Meow.";
        }
    //    else{}
    }

    //The Pet object has an eat method

    this.eat = function() {
        this.hunger = 0;
        this.sleepy++;

        if (this.species == "Cat") {
            return "Ugh, I guess I'll eat this.";

        }
        else if (this.species == "Dog"); {
            return "Nom nom nom nom. Yum, thank you for this delicious food! I love you!";
        }

     //   else{}
    }

    //The Pet object has a nap method

    this.nap = function() {
        this.sleepy = 0;
        this.awake = false;
        return "Zzzz...";
    }

    //The Pet object has a wakeUp method

}
