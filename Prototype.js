function person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

var myFather = new person("John", "Doe", 50, "blue")

myFather.nationality = "English";

myFather.name = function () {
    return this.firstName + " " + this.lastName;
};
