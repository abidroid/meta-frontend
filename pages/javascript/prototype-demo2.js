
function Person(firstName, lastName, year){
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;

     this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;

    }

    this.getAge = function() {
        return new Date().getFullYear() - year;
    }
}

function Student(firstName, lastName, year) {
// Call the Person constructor (like super in classes)
Person.call(this, firstName, lastName, year);
}

const ali = new Person("M", "Ali", 1984);
console.log(ali.getFullName());
console.log(ali.getAge());

console.log('******************************');

const abid = new Student('Abid', "Ali", 1988);
console.log(abid.getFullName());
console.log(abid.getAge());
