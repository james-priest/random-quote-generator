/**
 * https://www.sitepoint.com/jsonp-examples/
 */
const queryString = "format=jsonp&method=getQuote&jsonp=displayQuote&lang=en";

function init() {
    $('#get-quote').on('click', eraseOpacity);
    // $('#get-quote').on('click', getQuote);
    getQuote();
}

function eraseOpacity() {
    $(".quote-container").css("opacity", "0");
    setTimeout(getQuote, 700);
    // getQuote();
}

function getQuote() {
    console.log("button click!");
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/",
        dataType: "jsonp",
        data: {
            method: "getQuote",
            format: "jsonp",
            lang: "en",
            jsonp: "displayQuote"
        },
        // jsonpCallback: "displayQuote"
    });
}

function displayQuote(json) {
    console.log(json);
    $(".quote-text").html(json.quoteText);
    $(".quote-author").html(json.quoteAuthor);
    $(".quote-container").css("opacity", "1.0");
}
