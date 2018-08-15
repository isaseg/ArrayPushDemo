var firstName = [];
var lastName = [];

var userFirstName = prompt("What is your first name?");
firstName.unshift(userFirstName);
var userLastName = prompt("What is your last name?")
lastName.unshift(userLastName);

window.alert(firstName[0] + " " + lastName[0] + " " + firstName.length + " " + lastName.length);
