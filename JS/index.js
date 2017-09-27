$(function () {
    $("#btnView").click(function () {
        $("#show").empty();
        var province = $("#selProcince").val();
        var provincS = "<h4><img id = 'picH' src='google-location-icon-16.png' alt=''><b>" + province + "</b></h4>";
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
            var detail = "<table><tr><td width = '350px'><img src='" + picShow + "' alt=''></td><td width = '350px'><img src='Celsius-icon.png' alt=''></td></tr><tr><td width = '300px'><h4>" + data.weather[0].main + "</h4></td><td width = '300px'><h4>" + (data.main.temp) / 10 + "</h4></td></tr></table>";
            $("#show").append(detail);
        });
    });
});