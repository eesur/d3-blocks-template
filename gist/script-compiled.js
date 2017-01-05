var nameBuilder = function(firstName, lastName) {
    if ( firstName === void 0 ) firstName='Grace';
    if ( lastName === void 0 ) lastName='Hopper';


    var fullName = firstName + "  " + lastName

    d3.select('h1').text(fullName)
};

nameBuilder()
