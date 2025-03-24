/* Hero Slider */
document.addEventListener("DOMContentLoaded", function() {
    new Swiper(".heroSwiper", {
        effect: "fade",
        fadeEffect: {
            crossFade: !0
        },
        autoplay: {
            delay: 4e3,
            disableOnInteraction: !1
        },
        slidesPerView: 1,
        spaceBetween: 0,
        loop: !0,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: !0
        },
        on: {
            init: function(t) {
                let n = document.querySelectorAll("#swiper-pager a");
                n.forEach((e, n) => {
                    e.addEventListener("click", function(e) {
                        e.preventDefault(), t.slideTo(n)
                    })
                }), e(t)
            },
            slideChange: function(t) {
                e(t)
            }
        }
    });

    function e(e) {
        if (!e) return;
        let t = document.querySelectorAll("#swiper-pager a"),
            n = e.realIndex;
        t.forEach((e, t) => {
            t === n ? e.classList.add("active") : e.classList.remove("active")
        })
    }
});
/* End Hero Slider */