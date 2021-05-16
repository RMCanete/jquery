
$(function() {
    $("#movie-form").on("submit", function(evt) {
        evt.preventDefault();
        let name = $("#movie-name").val();
        let rating = $("#movie-rating").val();
        const ul = document.querySelector("#ul");
        ul.append(makeMovieList(name, rating));

        $("#newButton").on("click", function(evt) {
            $("#ul").empty();
            });
    });

    function makeMovieList(name, rating) {
        const newLI = document.createElement('LI');
        const movieInfo = document.createElement('B');
        movieInfo.innerText = name + " " + rating;
        const newButton = document.createElement("button");
        newButton.innerText = 'Remove';
        newButton.setAttribute ("id", "newButton");
        newLI.append(movieInfo);
        newLI.appendChild(newButton);
        return newLI;
    }
});
