$(function () {
    $("#btnView").click(function () {
        $("#show").empty();
        var province = $("#selProcince").val();
        var d = new Date();
        var date = d.toDateString();
        console.log(date);
        var provincS = "<table><tr><td><h4 class = 'fontH'><img id = 'picH' src='google-location-icon-16.png' alt=''><b>" + province + "</b></h4><td> │ </td><td><h4>" + date + "</h4></td></tr></table>";
        $("#show").append(provincS);
        var url = "http://api.openweathermap.org/data/2.5/weather?q=" + province + "&APPID=8fa2029bb98a470196e1be09a67414b6";
        $.get(url, function (data) {
            var picCheck = data.weather[0].main;
            if (picCheck == "Clouds") {
                var picShow = "weather-icon-png-16.png";
            }
            if (picCheck == "Rain") {
                var picShow = "ms01b_example_heavy_rain_showers.png";
            }
            if (picCheck == "Clear") {
                var picShow = "Weather-Sun-icon.png";
            }
            if (picCheck == "Thunderstorm") {
                var picShow = "37891-200.png";
            }
            if (picCheck == "Mist") {
                var picShow = "Weather-Fog-Day-icon.png";
            }
            console.log(data);
            var detail = "<table align = 'center'><tr><td><img class = 'font' src='" + picShow + "' alt=''></td></tr></table><table align = 'center'><tr><td width = '100%'><p id = 'text'><b>" + data.weather[0].description + "<b></p></td></tr></table>" + "<table>" + "<tr><td><img src='Celsius-icon.png' alt=''></td><td>" + ((data.main.temp) / 10).toFixed(2) + " °C</td></tr>" + "<tr><td><img src='1841-200.png' alt=''></td><td>" + data.main.pressure + " hPa</td></tr>" + "<tr><td><img src='219816.png' alt=''></td><td>" + data.main.humidity + " %</td></tr></table>";
            $("#show").append(detail);
        });
    });
});