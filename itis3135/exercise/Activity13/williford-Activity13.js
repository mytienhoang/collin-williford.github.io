$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "team.json",
        beforeSend: function() {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            console.log("data");
            $("#team").html("");
            $(data.management).each(function() {
                let obj = $(this);
                $("#team").append("<h3>" + obj.prop("name") + "</h3>" + 
                    obj.prop("title") + "<br>" + 
                    obj.prop("bio") + "<br>");
            });
        }
    });
});


// $(data).find("management").children().each(function() {
            //     var xmlDoc = $(this);
            //     $("#team").append
            //     ("<h3>" + xmlDoc.find("name").text() + "</h3>" +
            //               xmlDoc.find("title").text() + "<br>" +
            //               xmlDoc.find("bio").text() + "<br>");
            // });