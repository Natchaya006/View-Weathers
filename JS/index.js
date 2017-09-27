$(function () {
    $("#btnView").click(function () {
        var province = $( "#selProcince" ).val();
        console.log(province);
        var url = "http://api.openweathermap.org/data/2.5/weather?q="+province+"&APPID=8fa2029bb98a470196e1be09a67414b6";
        $.get(url, function (data) {
            console.log(data);
            var detail = "<table><tr><td width = '100px'><b>Province : </b></td><td></td></tr><tr><td width = '100px'><b>Temperature : </b></td><td></td></tr><tr><td width = '100px'><b>Weather : </b></td><td></td></tr></table>";
            $("#detailB").append(detail);
        });
    });
});