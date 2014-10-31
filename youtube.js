// Watch a YouTube video without logging in by inserting "/v" after hostname
(function() {
    var url = window.location;
    if (url.hostname === "www.youtube.com") {
        url.href = url.origin + "/v" + url.pathname + url.search;
    }
})();
