$(document).ready(function(){


    var storedJson;
    var searchSubmitButton = document.getElementById('searchSubmit');
    var searchSubmitReturn = document.getElementById('searchInput');
    var randomArticleButton = document.getElementById('randomButton');

    searchSubmitButton.addEventListener('click', getSearch, false);
    randomArticleButton.addEventListener('click', getRandom, false);
    searchSubmitReturn.addEventListener('keypress', function(e) {
        if (e.keyCode === 13) {
            getSearch();
        }
    });

    function getSearch() {
        var userInput = document.getElementById('searchInput').value;
        if (userInput.length !== 0) {
            $("#results-area").html("");
            for (var i = 0; i < userInput.length; i++) {
                var searchString = userInput.split(" ").join("_");
            }
            $.ajax({
                url: "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchString + "&limit=max&namespace=0&format=json",
                dataType: "jsonp",
                success: function (parsedJson) {
                    storedJson = parsedJson;
                    console.log(storedJson);
                    $("#results-area").show();
                    for (var j = 0; j < storedJson[1].length; j++) {
                        $("#results-area").append("<div class = " + "'article'" + "><p class = " + "'article-title'" + "><a href =" + "'" + storedJson[3][j] + "'" + ">" + storedJson[1][j] + "</a></p>" + "<p class = " + "'article-blurb'" + ">" + storedJson[2][j] + "</p></div>");
                    }
                }
            })
        }
    }

    function getRandom() {
        window.open("https://en.wikipedia.org/wiki/Special:Random");
    }
});