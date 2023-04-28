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
            $("#team").html("");
            for(let i=0; i<data.teammembers.length; i++) {
                let member = data.teammembers[i];
                $("#team").append("<h3>" + member.name + "</h3>" + member.title + "<br>" + member.bio + "<br>")
            }
            
        }
    });
});
