const nameBuilder = function(firstName='Grace', lastName='Hopper') {

    let fullName = `${firstName}  ${lastName}`

    d3.select('h1').text(fullName)
};

nameBuilder()