let nbr = 0;

$(() => {
    $("div, #nbr").css("text-align", "center");

    $("#plus").on("click", () => {
        nbr++;
        display();
    });

    $("#minus").on("click", () => {
        nbr--;
        display();
    });


});

const display = () => {
    $("#nbr").val(nbr);
    $("#nbr").css("color", (nbr % 2 == 0 ? "red" : "black"))
             .css("fontWeight", (nbr % 3 ==0 ? "bold" : "normal"))
             .css("fontWeight", (nbr % 5 ==0 ? "italic" : "normal"));
    
};