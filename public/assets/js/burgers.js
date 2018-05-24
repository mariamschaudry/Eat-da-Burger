// Wait to attach handlers until the DOM fully loads
$(function(){
    $(".devour").on("click", function(event){
        var id = $(this).data("id");

        // Send PUT request
        $.ajax("/api/create/" + id, {
            type: "PUT"
        }).then(
            function(){
                console.log ("i'm here now at the PUT request");
                console.log("changed devoured to devoured");
                // Reload page to get updated list
                location.reload();
            }
        );
    });

    $(".create-update-form").on("submit", function(event){
        // preventDefault
        event.preventDefault();

        var newBurger = {
            burger_name: $("#userBurger").val()
        };

        // Send POST request
        $.ajax("/api/create", {
            type: "POST",
            data: newBurger
        }).then(
            function(data){
                console.log("created new burger", data);
                // Reload the page to get updated list
                location.reload();
            }
        );
    });

    // $(".readyToEat").on("click", function(event) {
    //     var id = $(this).data("id");
    
    //     // Send the DELETE request.
    //     $.ajax("/api/create" + id, {
    //       type: "DELETE"
    //     }).then(
    //       function() {
    //         console.log("deleted burger until ordered again!", id);
    //         // Reload the page to get the updated list
    //         location.reload();
    //       }
    //     );
    //   });
    });
