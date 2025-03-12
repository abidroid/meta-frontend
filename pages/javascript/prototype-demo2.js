
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

const ali = new Person("M", "Ali", 1984);
console.log(ali.getFullName());
console.log(ali.getAge());

