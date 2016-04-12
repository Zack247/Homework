+// When the user clicks the #fahrenheit_to_celsius button
 +    // Get the value from #temperature and store in variable fahrenheit
 +    // Convert that value to a number
 +
 +    // Convert to celsius and store in variable celsius
 +
 +    // Display in #result
 +
 +
 +//parseFloat "converts a string to a number"
 +
 +
 +
 +    $('#fahrenheit_to_celsius').on('click', function(temperature){
 +    	var fahrenheit = $('#temperature').val();
 +        fahrenheit = parseFloat(celsius);
 +    	var celsius = (fahrenheit - 32) / 1.8;
 +        $('celsius').html(number);
 +    });
 +
 +    $('#fahrenheit_to_celsius').on('click', function(temperature){
 +    	var celsius = $('#temperature').val();
 +    	var celsius = 1.8 * celsius + 32;
 +    	return parseFloat(celsius);
 +    });
 +

