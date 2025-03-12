var person = {
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;

    }
}


var student = {
    firstName: "Muhammad",
    lastName: "Abid",

}

var employee = {
    firstName: "Ali",
    lastName: "Khan",
    __proto__: person,// employee inheriting person
}

// student inheriting person
student.__proto__ = person;

console.log(student.getFullName());
console.log(employee.getFullName());

