document.querySelector("button").addEventListener("click", function() {
    if (navigator.vibrate) {
        navigator.vibrate(200);
        console.log("Vibrating");
    }
});