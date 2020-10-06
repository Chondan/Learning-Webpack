require("../css/style.css");
// put ! to tell that we want to use style loader and css loader.
const people = require("./people");
const $ = require("jquery");


$.each(people.peoples, function(key, value) {
    $("body").append(`<h1>${people.peoples[key].name}</h1>`);
});

console.log(people.getHello());
console.log(people.peoples);