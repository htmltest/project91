$(document).ready(function() {

    $('body').on('click', 'nav a', function(e) {
        $.scrollTo($($(this).attr('href')), {duration : 500, offset: {'top': -100}});
        e.preventDefault();
    });

    $('.header-bg-inner').html($('.wrapper').html());
    $('.header-bg-inner').find('section[id]').removeAttr('id');

    $(window).on('load resize scroll', function() {
        var scroll = $(window).scrollTop();
        $('.header-bg-inner').css({
            '-webkit-transform' : 'translateY(-' + scroll + 'px)',
            '-moz-transform'    : 'translateY(-' + scroll + 'px)',
            '-mz-transform'     : 'translateY(-' + scroll + 'px)',
            '-0-transform'      : 'translateY(-' + scroll + 'px)',
            'transform'         : 'translateY(-' + scroll + 'px)'
        });

        var curHeight = $(window).height() / 3;
        $('nav a').each(function() {
            var curBlock = $(this).attr('href');
            if ($(curBlock).offset().top < (scroll + curHeight)) {
                $('nav li.active').removeClass('active');
                $(this).parent().addClass('active');
            }
        });
    });

    $('body').on('click', '.gallery-list-item a', function(e) {
        var curItem = $(this).parent();
        if (!curItem.hasClass('active')) {
            var curPreviewList = curItem.parents().filter('.gallery-list');
            curPreviewList.find('.gallery-list-item.active').removeClass('active');
            curItem.addClass('active');
            var curIndex = curPreviewList.find('.gallery-list-item').index(curItem);
            var curGallery = curPreviewList.parents().filter('.gallery');
            curGallery.find('.gallery-big-list').slick('slickGoTo', curIndex);
        }
        e.preventDefault();
    });

    $('.wrapper .gallery-list-inner-series').slick({
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        asNavFor: '.header-bg .gallery-list-inner-series'
    });

    $('.header-bg .gallery-list-inner-series').slick({
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        asNavFor: '.wrapper .gallery-list-inner-series'
    });

    $('.wrapper .gallery-list-inner-movies').slick({
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        asNavFor: '.header-bg .gallery-list-inner-movies'
    });

    $('.header-bg .gallery-list-inner-movies').slick({
        dots: false,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        asNavFor: '.wrapper .gallery-list-inner-movies'
    });

    $('.wrapper .gallery-big-list-series').slick({
        dots: false,
        infinite: false,
        fade: true,
        speed: 2000,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        asNavFor: '.header-bg .gallery-big-list-series'
    });

    $('.header-bg .gallery-big-list-series').slick({
        dots: false,
        infinite: false,
        fade: true,
        speed: 2000,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        asNavFor: '.wrapper .gallery-big-list-series'
    });

    $('.wrapper .gallery-big-list-movies').slick({
        dots: false,
        infinite: false,
        fade: true,
        speed: 2000,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        asNavFor: '.header-bg .gallery-big-list-movies'
    });

    $('.header-bg .gallery-big-list-movies').slick({
        dots: false,
        infinite: false,
        fade: true,
        speed: 2000,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        asNavFor: '.wrapper .gallery-big-list-movies'
    });

    $('body').on('click', '.welcome-logos a', function(e) {
        var curIndex = $('.welcome-logos a').index($(this));
        $('.welcome-detail-bg').eq(curIndex).show();
        $('.welcome-detail').eq(curIndex).show();
        e.preventDefault();
    });

    $('body').on('click', '.welcome-detail-close', function(e) {
        var curIndex = $('.welcome-detail-close').index($(this));
        $('.welcome-detail').eq(curIndex).hide();
        $('.welcome-detail-bg').eq(curIndex).hide();
        e.preventDefault();
    });

    $('body').on('click', '.welcome-detail-logo a:not(.welcome-detail-logo-link)', function(e) {
        $('.welcome-detail').hide();
        $('.welcome-detail-bg').hide();
        var curDetail = $(this).parents().filter('.welcome-detail');
        var curIndex = curDetail.find('.welcome-detail-logo').index($(this).parent());
        $('.welcome-detail-bg').eq(curIndex).show();
        $('.welcome-detail').eq(curIndex).show();
        e.preventDefault();
    });

});