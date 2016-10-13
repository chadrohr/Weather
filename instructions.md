###City Weather Challenge

Using jQuery, add a click handler to the Add City button that does the following:

1. Read the value of the New Zip Code input field into a zipcode variable.
2. Call the asynchronous getCity function with the zipcode and a callback function that receives the city data.
3. Call the asynchronous getWeather function with the zipcode and a callback function that receives the weather data.
4. Use the html contents of the cityTemplate script tag to create a new element.
5. Replace the tokens in the new element with the relevant data.
6. Bind the the button in the new element with a click handler that deletes the element.
7. Append the new element to the cityList element.

###Hints
1. You will need to nest one of the asynchronous function calls in the callback of the other asynchronous function call.