
function Animal (){}

Animal.prototype.move = function(){
    console.log('Moving...');
}

const animal = new Animal();

function Cat(){}
function Lion(){}


Object.setPrototypeOf(Cat, Animal);
Object.setPrototypeOf(Lion, Animal);

const mano = new Cat();
const sher = new Lion();

mano.move();