(function () {
//  $('#cityList').on('click', function (e) {
//         e.preventDefault();
//         for(var i=0; i<cityarr.length; i++){
//             if()
//         }
        
//  })
 $( "#cityList" ).on( "click", ".close", function( event ) {
    event.preventDefault();
    // var cityname = $(this).parent().siblings(".panel-heading").next("span:first-child").text()
    // console.log(cityname);
    //console.log( $( this ).;
    var zip = $(this).attr("id");
    console.log(zip)
    for(i=0; i< cityarr.length; i++){
        var city = cityarr[i]
        if(city.zipcode == zip){
            cityarr.splice(i,1);
        }   
    }
    update()
});
    var cityarr = [];
    $('#addCityBtn').on('click', function (e) {
        e.preventDefault();
        var zip = $('#newZipCode').val()
         console.log($('#newZipCode').val())
    
        $('#newZipCode').val('');

        var city;
        
        getCity(zip)
            .then(function (data) {
                city = data;
                console.log(city)
                return getWeather(zip);
            })
            .then(function (weather) {

                console.log(weather);
                var cityobject = {
                    zipcode: city['post code'],
                    cityname: city.places[0]['place name'],
                    statename: city.places[0]['state abbreviation'],
                    temper: parseInt(weather.main.temp),
                    condition: weather.weather[0].description 
                      
                };
                cityarr.push(cityobject);
                update();

           
            },
            function (error) {
                console.log('Zip is a bad one')
            });


    function getCity(zip) {

        var urlBase = 'http://api.zippopotam.us/us/';
        var url = urlBase + zip;

        return $.get(url);

    }

    function getWeather(zip) {

        var urlBase = 'http://api.openweathermap.org/data/2.5/';
        var appId = 'bd82255fd0a21fa1238699b9eda2ee35';
        var url = urlBase + 'weather?appid=' + appId + '&units=imperial&zip=' + zip;

        // add jQuery AJAX call here

        return $.get(url);
    }
    
    // })
})
function update(){
         $('#cityList').empty()
        for(var i = 0; i < cityarr.length; i++){    
            var city = cityarr[i] 
            console.log(city)
         var template = $('#cityTemplate').html();
                template = template
                    .replace('{{ city }}', city.cityname)
                    .replace('{{ state }}', city.statename)
                    .replace('{{ temp }}', city.temper)
                    .replace('{{ conditions }}', city.condition)
                    .replace('{{ zip code }}', city.zipcode)
                $('#cityList').append($(template));
        }
}

})()