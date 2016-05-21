var nameBuilder = function(firstName='Sundar', lastName='Singh') {
	d3.select('h1').text(firstName + ' ' + lastName);
    console.log(firstName + ' ' + lastName);
};

nameBuilder();