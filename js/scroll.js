$(function () {
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();

        const windowHeight = $(window).height();

        $(".scroll").each(function () {
            const boxHeight = $(this).offset().top;

            if (scroll + windowHeight > boxHeight) {
                $(this).addClass("active")
            }
        })

    })
})