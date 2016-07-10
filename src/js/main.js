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


    //== Menu block modification
    var toggleMenuOnce = $(document).outerWidth() > 768;

    if (!toggleMenuOnce) {
        moveMenuOut();
    }
    changeMenu();

    // Event handler on window.resize
    function changeMenu() {
        $(window).resize(function() {
            toggleMenu();
        });
    }

    // Toggle news when change medium size
    function toggleMenu() {

        if ($(document).outerWidth() <= 746 && toggleMenuOnce) {
            moveMenuOut();
            toggleMenuOnce = false;
        }
        if ($(document).outerWidth() > 746 && !toggleMenuOnce) {
            moveMenuIn();
            toggleMenuOnce = true;
        }
    }

    // Move .news into .basic-stn
    function moveMenuOut() {
        $('.menu-nav')
            .addClass('menu-dropdown')
            .add($('.menu-nav').prev())
            .prependTo($('.menu-toggle'))
    }

    // Move news into container of .product
    function moveMenuIn() {
        $('.menu-nav')
            .removeClass('menu-dropdown')
            .add($('.menu-nav').prev())
            .insertAfter('.menu-top>.language');
    }

    $('.menu-trigger').click(function() {
       $(this).next().slideToggle(400);
    });

    $(window).resize(function(){
        if ($(document).outerWidth() > 746) {
            $('.menu-nav').removeAttr('style');
            $('.menu-basic').removeAttr('style');
        }
    });

});