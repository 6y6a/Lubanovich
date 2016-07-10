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



    //== Search block modification
    changeSearch();

    // Event handlers for .search block
    function changeSearch() {
        var elem = $('.search__text');
        var preventChange;



        elem.mouseenter(function() {
            toggleSearch($('.icon-loupe'));

        });

        elem.mouseleave(function() {
            if (!preventChange) { toggleSearch($('.icon-loupe-hover')); }
        });

        elem.focus(function() {
            preventChange = true;
        });

        elem.blur(function() {
            toggleSearch($('.icon-loupe-hover'));
            preventChange = false;
        });

        $('window').resize(function(){
            preventChange = $('window').width() < 768;
        })

    }

    // Change .loupe image
    function toggleSearch(elem) {
        elem.fadeOut(100)
            .queue(function(next) {
                $(this).toggleClass('icon-loupe icon-loupe-hover');
                next();
            })
            .fadeIn(100);
    }


});