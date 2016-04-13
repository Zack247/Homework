// When the user clicks the #fahrenheit_to_celsius button
// Get the value from #temperature and store in variable fahrenheit
// Convert that value to a number

// Convert to celsius and store in variable celsius

// Display in #result


//parseFloat "converts a string to a number"



var fahrenheit = 1.8 * celsius + 32;								/*set up so comp. knows what var. fahrenheit is*/
var celsius = (fahrenheit - 32) / 1.8;								/*set up so comp. knows what var. celsius is*/

$('#fahrenheit_to_celsius').on('click', function(temperature){      /*when the user clicks on F_to_C, initiate temperature*/
		fahrenheit = $('#temperature').val();     					/*store the data of the temperature*/
		fahrenheit = parseFloat(fahrenheit);						/*change the strin to a number*/
		celsius = (fahrenheit - 32) / 1.8;    					    /*convert C_to_F*/  /*   Q: Is this neccessary since we have defined the variable above?  */
		$('#result').html();										/*calcualte result of the statement above*/
		return result = celsius;									/*return the result*/
});

$('#celsius_to_fahrenheit').on('click', function(temperature){
		celsius = $('#temperature').val();
		celsius = parseFloat(celsius);
		fahrenheit = 1.8 * celsius + 32;
		$('#result').html();
		return result = fahrenheit;
});