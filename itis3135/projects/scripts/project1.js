window.onload = function() {
    const emails = [];
    const submitBtn = document.getElementById("submit-btn");

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault();

        const emailInput = document.getElementById("email");
        const email = emailInput.value;

        emails.push(email);

        console.log(emails);    // If you want to check the emails array open up the console
    });

};

    // const facebook = document.getElementById("facebook");
    // facebook.addEventListener('click', function() {
    //     alert("Sorry, I wasn't actually going to make a facebook page for this")
    // });

    // const instagram = document.getElementById("instagram");
    // instagram.addEventListener('click', function() {
    //     alert("Sorry, I wasn't actually going to make a instagram page for this")
    // });

    // const strava = document.getElementById("strava");
    // strava.addEventListener('click', function() {
    //     alert("Sorry, I wasn't actually going to make a facebook page for this")
    // });

    // const twitter = document.getElementById("twitter");
    // twitter.addEventListener('click', function() {
    //     alert("Sorry, I wasn't actually going to make a twitter page for this")
    // });


