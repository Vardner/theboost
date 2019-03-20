setTimeout(function(){$('[data-carousel=banners]').owlCarousel({
    loop:true,
    nav: false,
    dots: true,
    items: 1,
    autoWidth: false,
    smartSpeed: 500,
    autoplay: true,
    autoplayHoverPause: true,
    dotsContainer: '.banners__carousel-dots'
})}, 100);

setTimeout(function () {
    $('[data-carousel=projects], [data-carousel=products]').owlCarousel({
        items: 1,
        margin: 60,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: [
            '<svg width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M16.1957 3.89514L16.4826 3.61642L16.2039 3.3295L14.6415 1.72128L14.3628 1.4344L14.0759 1.71306L1.72131 13.7127L1.4259 13.9996L1.7213 14.2865L14.0759 26.2869L14.3629 26.5656L14.6416 26.2787L16.2039 24.6701L16.4826 24.3832L16.1957 24.1045L5.79356 13.9996L16.1957 3.89514Z" fill="white" stroke="white" stroke-width="0.8"/>\n' +
            '</svg>\n',
            '<svg width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M1.80434 24.1049L1.51741 24.3836L1.79614 24.6705L3.35848 26.2787L3.63717 26.5656L3.92407 26.2869L16.2787 14.2873L16.5741 14.0004L16.2787 13.7135L3.92409 1.71307L3.63715 1.43437L3.35845 1.72131L1.79612 3.32986L1.51745 3.61677L1.80434 3.89546L12.2064 14.0004L1.80434 24.1049Z" fill="white" stroke="white" stroke-width="0.8"/>\n' +
            '</svg>'
        ]
    });
},100);

setTimeout(function () {
    $('[data-carousel=news]').owlCarousel({
        nav: true,
        items: 2,
        margin: 40,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        dots: false,
        navText: [
            '<svg width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M16.1957 3.89514L16.4826 3.61642L16.2039 3.3295L14.6415 1.72128L14.3628 1.4344L14.0759 1.71306L1.72131 13.7127L1.4259 13.9996L1.7213 14.2865L14.0759 26.2869L14.3629 26.5656L14.6416 26.2787L16.2039 24.6701L16.4826 24.3832L16.1957 24.1045L5.79356 13.9996L16.1957 3.89514Z" fill="white" stroke="white" stroke-width="0.8"/>\n' +
        '</svg>\n',
            '<svg width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M1.80434 24.1049L1.51741 24.3836L1.79614 24.6705L3.35848 26.2787L3.63717 26.5656L3.92407 26.2869L16.2787 14.2873L16.5741 14.0004L16.2787 13.7135L3.92409 1.71307L3.63715 1.43437L3.35845 1.72131L1.79612 3.32986L1.51745 3.61677L1.80434 3.89546L12.2064 14.0004L1.80434 24.1049Z" fill="white" stroke="white" stroke-width="0.8"/>\n' +
        '</svg>'
        ]
    });
},100);

