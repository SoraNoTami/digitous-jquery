$("button").click(function () {
    $.ajax({
        url: 'https://restcountries.com/v3.1/name/' + $("input").val(),
        success: function (data, statuts, response) {
            $("#country").text(data[0].name.common)
            $("#capital").text(data[0].capital)
        }
    })
})