$(document).ready( function(){

    //== News block modification
    var toggleNewsOnce = $(document).outerWidth() > 973;

    if (!toggleNewsOnce) {
        moveNewsOut();
    }
    changeNews();

    // Event handler on window.resize
    function changeNews() {
        $(window).resize(function() {
           toggleNews();
        });
    }

    // Toggle news when change medium size
    function toggleNews() {

        if ($(document).outerWidth() <= 973 && toggleNewsOnce) {
            moveNewsOut();
            toggleNewsOnce = false;
        }
        if ($(document).outerWidth() > 973 && !toggleNewsOnce) {
            moveNewsIn();
            toggleNewsOnce = true;
        }
    }

    // Move .news into .basic-stn
    function moveNewsOut() {
        $('.news').appendTo($('.basic-stn'))
            .wrapInner('<div class="container"></div>');
    }

    // Move news into container of .product
    function moveNewsIn() {
        $('.news')
            .find('.container')
            .children()
            .unwrap()
            .parent()
            .appendTo($('.basic-stn>.container'));
    }
});