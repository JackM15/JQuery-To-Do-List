//Check off specific todos by clicking
$("ul").on("click", "li" , function() {
    $(this).toggleClass("completed");
});

//when x is clicked, delete the item from the todo list
$("ul").on("click", "span" , function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    //stop it bubbling up to trigger any higher dom element events
    //no parent element events will trigger
    event.stopPropagation();
});

//creation of new todos
$("input[type='text']").on("keypress", function(event) {
    //check if enter key is pressed
    if (event.which === 13) {
        //get value from input
        var todoText = $(this).val();
        //create a new li and add to ul
        $("ul").append("<li>" + "<span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
        //clear the textbox
        $(this).val("");
    }
});

//input show/hide
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle(500);
});