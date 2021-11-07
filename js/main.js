
$("#req").click(function() {
    $.ajax({
        url: "http://www.boomlings.com/database/getGJUserInfo20.php",
        type: "GET",
        datatype: "json",
        success: function(response) {
            console.log(response)
        }
    })
})