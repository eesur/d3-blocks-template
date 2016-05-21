var nameBuilder = function nameBuilder() {
    var firstName = arguments.length <= 0 || arguments[0] === undefined ? "Sundar" : arguments[0];
    var lastName = arguments.length <= 1 || arguments[1] === undefined ? "Singh" : arguments[1];

    d3.select('h1').text(firstName + " " + lastName);
    console.log(firstName + " " + lastName);
};

nameBuilder();
