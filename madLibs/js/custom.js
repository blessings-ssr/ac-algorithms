// <!-- 
// 1) Add a script tag to the bottom of the page for your code.
// 2) Add an event listener to the button so that it calls a makeMadLib function when clicked.
// 3)In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Laura really likes good code.") -->
$(document).ready(function() {
    function makeMadLib() {
        var noun = $("#noun").val();
        var adjective = $("#adjective").val();
        var person = $("#person").val();
        $("#story").append(
            "<p>" + person + " really likes " + adjective + " " + noun + "</p>"
        );
        var userObject = {}; 
        // so were saying we want the user object to be called noun and we want the object set to blank 
        // often times the key and the variable name will be the same name. everytime the function is run the key will be the same but the value changes.
        userObject.noun = noun;
        userObject.adjective = adjective;
        userObject.person = personName;
        console.log(userObject);
    }
    //Event listener
    $("#lib-button").on("click", function(){
        makeMadLib();
    });  //closes the .on for the event
});   //closes the document.ready

// <!-- Problem: Need to get values from the user in order to create a Mad Lib -->
// <!-- We need to have two different pieces of code to handle this.
// Step 1 the user enters information into form and clicks the submit button 
// Step 2 we need to create an event listener to be listening on the button so that when the user clicks it, we can execute a callback function - jQuery, use .on() for a click event. -->

// <!-- Bonus: Make an object with the list elements as keys and the inputs as values.  --