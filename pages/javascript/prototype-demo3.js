
function Animal (){

    this.sleep = function(){
        console.log('Sleeping...');
        
    }
}

Animal.prototype.move = function(){
    console.log('Moving...');
}

const animal = new Animal();

function Cat(){
    this.__proto__ = Animal;
}
function Lion(){
    this.__proto__ = Animal;
}

const mano = new Cat();
const sher = new Lion();

mano.sleep();