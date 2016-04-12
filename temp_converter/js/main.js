// When the user clicks the #fahrenheit_to_celsius button
// Get the value from #temperature and store in variable fahrenheit
// Convert that value to a number

// Convert to celsius and store in variable celsius

// Display in #result


//parseFloat "converts a string to a number"

var fahrenheit = 1.8 * celsius + 32;
var celsius = (fahrenheit - 32) / 1.8;

$('#fahrenheit_to_celsius').on('click', function(temperature){
		fahrenheit = $('#temperature').val();
		fahrenheit = parseFloat(fahrenheit);
		celsius = (fahrenheit - 32) / 1.8;
		$('#result').html();
});

$('#celsius_to_fahrenheit').on('click', function(temperature){
		celsius = $('#temperature').val();
		celsius = parseFloat(celsius);
		fahrenheit = 1.8 * celsius + 32;
		$('#result').html();
});