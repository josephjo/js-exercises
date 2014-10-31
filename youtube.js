// Watch a YouTube video without logging in by inserting "/v" after hostname
(function() {
    if (window.location.hostname === "www.youtube.com") {
        window.location.href = window.location.origin + "/v" + window.location.pathname + window.location.search;
    }
})();
