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
function Pet(name, species) {
    this.species = species;
    this.name = name;
    this.sleepy = 0;
    this.hunger = 0;
    this.awake = true;
    this.speak = function () {
        this.sleepy++;
        this.hunger++;
        if (this.species === "Dog") {
            return "Woof! That means I love you!";
        }
        else if (this.species === "Cat") {
            return "Ugh. meow.";
        }
    }
    //The Pet object has an eat method
    this.eat = function () {
        this.sleepy++;
        this.hunger = 0;
        if (this.species === "Dog") {
            return "Nom nom nom nom. Yum, thank you for this delicious food! I love you!";
        }
        else if (this.species === "Cat") {
            return "Ugh, I guess I'll eat this."
        }
    }
    //The Pet object has a nap method
    this.nap = function () {
        this.sleepy = 0;
        this.awake = false;
        return "Zzzz...";
    }
     //The Pet object has a wakeUp method
    this.wakeUp = function () {
        this.awake = true;
        this.sleepy = 0;
        this.hunger = 4;
        if (this.species === "Dog") {
            return "I'm awake! Let's eat and then play! I love you!";
        }
        else if (this.species === "Cat") {
            return "Ugh, I'm awake now. Is there anything to eat around here?";
        }
    }
    //The Pet object has a rollOver method
    this.rollOver = function () {
        this.hunger++;
        this.sleepy++;
        if (this.hunger <= 4 && this.sleepy <= 5) {
            if (this.species === "Dog") {
                return "Rolling! Now what? I love you!";
            }
            else if (this.species === "Cat") {
                return "Ugh. I'm a cat. I only roll over if I want to.";
            }
        }
        else if (this.hunger >= 5) {
            if (this.species === "Dog") {
                return "I'm hungry! Let's eat first. I love you!";
            }
            else if (this.species === "Cat") {
                return "Ugh. Feed me before I'll even think about it."
            }
        }
        else if (this.sleepy >= 5) {
            if (this.species === "Dog") {
                return "Yawn. Let's play after a nap. I love you!";
            }
            else if (this.species === "Cat") {
                return "Ugh. I need a 12 hour nap first."
            }
        }
    }
   //The Pet object has a fetch method
    this.fetch = function () {
        this.hunger++;
        this.sleepy++;
        if (this.awake == true && this.hunger < 4 && this.sleepy < 5) {
            if (this.species === "Dog") {
                return "Must get the stick! I love you!";
            }
            else if (this.species === "Cat") {
                return "Ugh. I'm a cat. I don't fetch."
            }
        }
        else if (this.hunger >= 5) {
            if (this.species === "Dog") {
                return "I'm hungry! Let's eat first. I love you!";
            }
            else if (this.species === "Cat") {
                return "Ugh. Feed me before I'll even think about it."
            }
        }
        else if (this.sleepy >= 5) {
            if (this.species === "Dog") {
                return "Yawn. Let's play after a nap. I love you!";
            }
            else if (this.species === "Cat") {
                return "Ugh. I need a 12 hour nap first."
            }
        }
        return "Zzzz...";
    }
    //The Pet object has a shake method
    this.shake = function () {
        this.hunger++;
        this.sleepy++;
        if (this.awake == true && this.hunger < 4 && this.sleepy < 5) {
            if (this.species === "Cat") {
                return "Ugh. I'm a cat. I never shake";
            }
            else if (this.species === "Dog") {
                return "Nice to meet you! I love you!";
            }
        }
        else if (this.hunger >= 5) {
            if (this.species === "Dog") {
                return "I'm hungry! Let's eat first. I love you!";
            }
            else if (this.species === "Cat") {
                return "Ugh. Feed me before I'll even think about it."
            }
        }
        else if (this.sleepy >= 5) {
            if (this.species === "Dog") {
                return "Yawn. Let's play after a nap. I love you!";
            }
            else if (this.species === "Cat") {
                return "Ugh. I need a 12 hour nap first."
            }
        }
        return "Zzzz...";
    }
}
