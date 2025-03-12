
var student = {
    firstName: "Muhammad",
    lastName: "Abid",

    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

var employee = {
    firstName: "Ali",
    lastName: "Khan",

    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;

    }
}

console.log(student.getFullName());
console.log(employee.getFullName());

