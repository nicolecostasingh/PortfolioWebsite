$(document).ready(function () {
    $('#menu-icon, #close-icon').click(function () {
        console.log('Icon clicked'); // Add this line to check if the event is triggered
        $('nav').toggleClass("navexpanded");
        return false;
    });
});
