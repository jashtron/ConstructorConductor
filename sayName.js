//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.
function Person(name, age) {
	this.name = name;
	this.age = age;
}



//Now create three instances of Person with data you make up
var josh = new Person("Josh", "36");
var annie = new Person("Annie", "34");
var pele = new Person("Pele", "9");

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

Person.prototype.sayName = function() {
	alert(this.name);
};

