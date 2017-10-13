$(document).ready(function() {

    $('body').on('click', 'nav a', function(e) {
        $.scrollTo($($(this).attr('href')), {duration : 500, offset: {'top': -100}});
        e.preventDefault();
    });

    $('body').on('click', '.mobile-menu-list a', function(e) {
        $('html').removeClass('mobile-menu-open');
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
        $('.mobile-menu-list a').each(function() {
            var curBlock = $(this).attr('href');
            if ($(curBlock).offset().top < (scroll + curHeight)) {
                $('.mobile-menu-list li.active').removeClass('active');
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

    var isAnimation = false;
    $('body').on('click', '.wrapper .welcome-logos a', function(e) {
        if (!isAnimation) {
            isAnimation = true;
            var curIndex = $('.wrapper .welcome-logos a').index($(this));
            $('.wrapper .welcome-detail').eq(curIndex).css({'display': 'block'});
            $('.wrapper .welcome-detail').eq(curIndex).find('.welcome-detail-logo').eq(curIndex).css({'opacity': 0});
            $('.wrapper .welcome-detail').eq(curIndex).find('.welcome-detail-logo a img').css({'opacity': 0});
            $('.wrapper .welcome-detail').eq(curIndex).find('.welcome-detail-text').css({'opacity': 0, 'top': -50});
            $('.wrapper .welcome-detail').eq(curIndex).find('.welcome-detail-close').css({'opacity': 0});
            var curLeft = $('.wrapper .welcome-detail').eq(curIndex).find('.welcome-detail-logo-bg').offset().left;
            var curWidth = $('.wrapper .welcome-detail').eq(curIndex).width();
            var curSize = (curWidth - curLeft) * 2;
            $('.wrapper .welcome-detail').eq(curIndex).find('.welcome-detail-logo').eq(curIndex).animate({'opacity': 1}, 300, function() {
                $('.wrapper .welcome-detail').eq(curIndex).find('.welcome-detail-logo-bg').css({'width': 0, 'height': 0, 'border-radius': '50%'}).animate({'width': curSize, 'height': curSize, 'border-radius': '0%'}, 500, function() {
                    $('.wrapper .welcome-detail').eq(curIndex).find('.welcome-detail-logo a img').animate({'opacity': .1}, 300, function() {
                        $('.wrapper .welcome-detail').eq(curIndex).find('.welcome-detail-text').animate({'opacity': 1, 'top': 0}, 300, function() {
                            $('.wrapper .welcome-detail').eq(curIndex).find('.welcome-detail-close').animate({'opacity': 1}, 300, function() {
                                isAnimation = false;
                            });
                        });
                    });
                });
            });

            $('.header-bg .welcome-detail').eq(curIndex).css({'display': 'block'});
            $('.header-bg .welcome-detail').eq(curIndex).find('.welcome-detail-logo').eq(curIndex).css({'opacity': 0});
            $('.header-bg .welcome-detail').eq(curIndex).find('.welcome-detail-logo a img').css({'opacity': 0});
            $('.header-bg .welcome-detail').eq(curIndex).find('.welcome-detail-text').css({'opacity': 0, 'top': -50});
            $('.header-bg .welcome-detail').eq(curIndex).find('.welcome-detail-close').css({'opacity': 0});
            $('.header-bg .welcome-detail').eq(curIndex).find('.welcome-detail-logo').eq(curIndex).animate({'opacity': 1}, 300, function() {
                $('.header-bg .welcome-detail').eq(curIndex).find('.welcome-detail-logo-bg').css({'width': 0, 'height': 0, 'border-radius': '50%'}).animate({'width': curSize, 'height': curSize, 'border-radius': '0%'}, 500, function() {
                    $('.header-bg .welcome-detail').eq(curIndex).find('.welcome-detail-logo a img').animate({'opacity': .1}, 300, function() {
                        $('.header-bg .welcome-detail').eq(curIndex).find('.welcome-detail-text').animate({'opacity': 1, 'top': 0}, 300, function() {
                            $('.header-bg .welcome-detail').eq(curIndex).find('.welcome-detail-close').animate({'opacity': 1}, 300);
                        });
                    });
                });
            });
        }
        e.preventDefault();
    });

    $('body').on('click', '.wrapper .welcome-detail-close', function(e) {
        if (!isAnimation) {
            isAnimation = true;
            var curIndex = $('.wrapper .welcome-detail-close').index($(this));
            $('.wrapper .welcome-detail').eq(curIndex).find('.welcome-detail-close').animate({'opacity': 0}, 300, function() {
                $('.wrapper .welcome-detail').eq(curIndex).find('.welcome-detail-text').animate({'opacity': 0, 'top': -50}, 300, function() {
                    $('.wrapper .welcome-detail').eq(curIndex).find('.welcome-detail-logo a img').animate({'opacity': 0}, 300, function() {
                        $('.wrapper .welcome-detail').eq(curIndex).find('.welcome-detail-logo-bg').animate({'width': 0, 'height': 0, 'border-radius': '50%'}, 500, function() {
                            $('.wrapper .welcome-detail').eq(curIndex).find('.welcome-detail-logo').eq(curIndex).animate({'opacity': 0}, 300, function() {
                                $('.wrapper .welcome-detail').eq(curIndex).css({'display': 'none'});
                                isAnimation = false;
                            });
                        });
                    });
                });
            });

            $('.header-bg .welcome-detail').eq(curIndex).find('.welcome-detail-close').animate({'opacity': 0}, 300, function() {
                $('.header-bg .welcome-detail').eq(curIndex).find('.welcome-detail-text').animate({'opacity': 0, 'top': -50}, 300, function() {
                    $('.header-bg .welcome-detail').eq(curIndex).find('.welcome-detail-logo a img').animate({'opacity': 0}, 300, function() {
                        $('.header-bg .welcome-detail').eq(curIndex).find('.welcome-detail-logo-bg').animate({'width': 0, 'height': 0, 'border-radius': '50%'}, 500, function() {
                            $('.header-bg .welcome-detail').eq(curIndex).find('.welcome-detail-logo').eq(curIndex).animate({'opacity': 0}, 300, function() {
                                $('.header-bg .welcome-detail').eq(curIndex).css({'display': 'none'});
                            });
                        });
                    });
                });
            });
        }
        e.preventDefault();
    });

    $('body').on('click', '.wrapper .welcome-detail-logo a:not(.welcome-detail-logo-link)', function(e) {
        if (!isAnimation) {
            isAnimation = true;
            var curDetail = $(this).parents().filter('.welcome-detail');
            var newIndex = curDetail.find('.welcome-detail-logo').index($(this).parent());
            if (newIndex == 1) {
                var curIndex = 0;
            } else {
                var curIndex = 1;
            }

            $('.wrapper .welcome-detail').eq(curIndex).find('.welcome-detail-close').animate({'opacity': 0}, 300, function() {
                $('.wrapper .welcome-detail').eq(curIndex).find('.welcome-detail-text').animate({'opacity': 0, 'top': -50}, 300, function() {
                    $('.wrapper .welcome-detail').eq(curIndex).find('.welcome-detail-logo a img').animate({'opacity': 0}, 300, function() {
                        $('.wrapper .welcome-detail').eq(curIndex).find('.welcome-detail-logo-bg').animate({'width': 0, 'height': 0, 'border-radius': '50%'}, 500, function() {
                            $('.wrapper .welcome-detail').eq(curIndex).find('.welcome-detail-logo').eq(curIndex).animate({'opacity': 0}, 300, function() {
                                $('.wrapper .welcome-detail').eq(curIndex).css({'display': 'none'});
                                $('.wrapper .welcome-detail').eq(newIndex).css({'display': 'block'});
                                $('.wrapper .welcome-detail').eq(newIndex).find('.welcome-detail-logo').eq(newIndex).css({'opacity': 0});
                                $('.wrapper .welcome-detail').eq(newIndex).find('.welcome-detail-logo a img').css({'opacity': 0});
                                $('.wrapper .welcome-detail').eq(newIndex).find('.welcome-detail-text').css({'opacity': 0, 'top': -50});
                                $('.wrapper .welcome-detail').eq(newIndex).find('.welcome-detail-close').css({'opacity': 0});
                                var curLeft = $('.wrapper .welcome-detail').eq(newIndex).find('.welcome-detail-logo-bg').offset().left;
                                var curWidth = $('.wrapper .welcome-detail').eq(newIndex).width();
                                var curSize = (curWidth - curLeft) * 2;
                                $('.wrapper .welcome-detail').eq(newIndex).find('.welcome-detail-logo').eq(newIndex).animate({'opacity': 1}, 300, function() {
                                    $('.wrapper .welcome-detail').eq(newIndex).find('.welcome-detail-logo-bg').css({'width': 0, 'height': 0, 'border-radius': '50%'}).animate({'width': curSize, 'height': curSize, 'border-radius': '0%'}, 500, function() {
                                        $('.wrapper .welcome-detail').eq(newIndex).find('.welcome-detail-logo a img').animate({'opacity': .1}, 300, function() {
                                            $('.wrapper .welcome-detail').eq(newIndex).find('.welcome-detail-text').animate({'opacity': 1, 'top': 0}, 300, function() {
                                                $('.wrapper .welcome-detail').eq(newIndex).find('.welcome-detail-close').animate({'opacity': 1}, 300, function() {
                                                    isAnimation = false;
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });

            $('.header-bg .welcome-detail').eq(curIndex).find('.welcome-detail-close').animate({'opacity': 0}, 300, function() {
                $('.header-bg .welcome-detail').eq(curIndex).find('.welcome-detail-text').animate({'opacity': 0, 'top': -50}, 300, function() {
                    $('.header-bg .welcome-detail').eq(curIndex).find('.welcome-detail-logo a img').animate({'opacity': 0}, 300, function() {
                        $('.header-bg .welcome-detail').eq(curIndex).find('.welcome-detail-logo-bg').animate({'width': 0, 'height': 0, 'border-radius': '50%'}, 500, function() {
                            $('.header-bg .welcome-detail').eq(curIndex).find('.welcome-detail-logo').eq(curIndex).animate({'opacity': 0}, 300, function() {
                                $('.header-bg .welcome-detail').eq(curIndex).css({'display': 'none'});
                                $('.header-bg .welcome-detail').eq(newIndex).css({'display': 'block'});
                                $('.header-bg .welcome-detail').eq(newIndex).find('.welcome-detail-logo').eq(newIndex).css({'opacity': 0});
                                $('.header-bg .welcome-detail').eq(newIndex).find('.welcome-detail-logo a img').css({'opacity': 0});
                                $('.header-bg .welcome-detail').eq(newIndex).find('.welcome-detail-text').css({'opacity': 0, 'top': -50});
                                $('.header-bg .welcome-detail').eq(newIndex).find('.welcome-detail-close').css({'opacity': 0});
                                var curLeft = $('.wrapper .welcome-detail').eq(newIndex).find('.welcome-detail-logo-bg').offset().left;
                                var curWidth = $('.wrapper .welcome-detail').eq(newIndex).width();
                                var curSize = (curWidth - curLeft) * 2;
                                $('.header-bg .welcome-detail').eq(newIndex).find('.welcome-detail-logo').eq(newIndex).animate({'opacity': 1}, 300, function() {
                                    $('.header-bg .welcome-detail').eq(newIndex).find('.welcome-detail-logo-bg').css({'width': 0, 'height': 0, 'border-radius': '50%'}).animate({'width': curSize, 'height': curSize, 'border-radius': '0%'}, 500, function() {
                                        $('.header-bg .welcome-detail').eq(newIndex).find('.welcome-detail-logo a img').animate({'opacity': .1}, 300, function() {
                                            $('.header-bg .welcome-detail').eq(newIndex).find('.welcome-detail-text').animate({'opacity': 1, 'top': 0}, 300, function() {
                                                $('.header-bg .welcome-detail').eq(newIndex).find('.welcome-detail-close').animate({'opacity': 1}, 300);
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });

        }
        e.preventDefault();
    });

    $('body').on('click', '.video-link', function(e) {
        $('html').addClass('video-window-open');

        $.ajax({
            type: 'POST',
            url: $(this).attr('href'),
            dataType: 'html',
            cache: false
        }).done(function(html) {
            var curWidth = $('.video-window-content').width();
            var curHeight = $('.video-window-content').height();
            html = html.replace("width='1280' height='720'", "width='" + curWidth + "' height='" + curHeight + "'").replace("width=1280&height=720", "width=" + curWidth + "&height=" + curHeight);
            $('.video-player').html(html);
        });

        e.preventDefault();
    });

    $(document).on('click', function(e) {
        if ($(e.target).hasClass('video-window')) {
            $('html').removeClass('video-window-open');
            $('.video-player').html('');
        }
    });

    $('body').on('keyup', function(e) {
        if (e.keyCode == 27) {
            $('html').removeClass('video-window-open');
            $('.video-player').html('');
        }
    });

    $('body').on('click', '.video-window-close', function(e) {
        $('html').removeClass('video-window-open');
        $('.video-player').html('');
        e.preventDefault();
    });

    $(window).on('resize', function() {
        $('html').removeClass('video-window-open');
        $('.video-player').html('');
    });

    $('body').on('click', '.mobile-menu-link', function(e) {
        $('html').addClass('mobile-menu-open');
        e.preventDefault();
    });

    $('body').on('click', '.mobile-menu-close', function(e) {
        $('html').removeClass('mobile-menu-open');
        e.preventDefault();
    });

});