document.addEventListener("DOMContentLoaded", () => {
    // Initialize Hero Slider
    const heroSwiper = new Swiper(".hero-slider", {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    // Initialize Products Slider
    const productsSwiper = new Swiper(".products-slider", {
        slidesPerView: "auto",
        spaceBetween: 15,
        navigation: {
            nextEl: ".slider-nav-next",
            prevEl: ".slider-nav-prev",
        },
        // Responsive settings
        breakpoints: {
            320: { slidesPerView: 2, spaceBetween: 10 },
            576: { slidesPerView: 2, spaceBetween: 15 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            992: { slidesPerView: 4, spaceBetween: 15 },
            1200: { slidesPerView: 4, spaceBetween: 15 },
        },
    });

    // Auto-update year in footer
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
