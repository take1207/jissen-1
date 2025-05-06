const mobileNav = $('.mobile-nav');
const pcNav = $('#pc-header');

const mobileHeight = mobileNav.outerHeight();
const pcHeight = pcNav.outerHeight();

let beforeScrollTop = 0;


$(window).scroll(function () {
    if($(".mobile-nav").css("display") === "flex"){
    const scrollTop = $(this).scrollTop();
    if ((scrollTop > beforeScrollTop) && (scrollTop > mobileHeight)) {
        mobileNav.addClass('js_hide');
    } else {
        mobileNav.removeClass('js_hide');
    }
    beforeScrollTop = scrollTop
    }else if($("#pc-header").css("display") === "flex"){
        const scrollTop = $(this).scrollTop();
        if ((scrollTop > beforeScrollTop) && (scrollTop > pcHeight)) {
            pcNav.addClass('js_hide');
        } else {
            pcNav.removeClass('js_hide');
        }
        beforeScrollTop = scrollTop
    }


})