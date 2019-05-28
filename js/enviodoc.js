    // Thanks http://callmenick.com/post/check-if-everything-loaded-with-javascript

    //prevent user scroll
    document.body.style.overflow = "hidden";

    //Once everything has loaded
    var everythingLoaded = setInterval(function() {
        if (/loaded|complete/.test(document.readyState)) {
            clearInterval(everythingLoaded);
            init(); // this is the function that gets called when everything is loaded
        }
    }, 200);

    function init() {
        setTimeout(function() {

            // This will append loaded to the body better for cms such as wordpress
            document.body.className += " loaded";

            // this will remove all other class and replace with loaded
            //document.body.setAttribute("class", "loaded");

            // Allow user scroll
            document.body.style.overflow = "visible";
        }, 700);

    }