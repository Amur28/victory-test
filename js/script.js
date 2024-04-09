// const promoSwiper = new Swiper('.swiper-promo', {
//     slidesPerView: 1,
//     loop: true,
//     navigation: {
//         nextEl: '.swiper-promo-button-next',
//     },
// })

const servicesSwiper = new Swiper('.swiper-services', {
    slidesPerView: 3,
    spaceBetween: 25,
    navigation: {
        nextEl: '.swiper-services-button-next',
        prevEl: '.swiper-services-button-prev',
    },
    breakpoints: {
        360: {
            slidesPerView: 3,
        },
        300: {
            slidesPerView: 1.5,
            spaceBetween: 20,
            scrollbar: {
                el: '.swiper-services-scrollbar',
            }
        }
    }
})

const specialistsSwiper = new Swiper('.specialists__list', {
    slidesPerView: 3,
    breakpoints: {
        360: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
        300: {
            navigation: {
                nextEl: '.swiper-specialists-button-next',
                prevEl: '.swiper-specialists-button-prev',
            },
            scrollbar: {
                el: '.swiper-specialists-scrollbar',
            },
            slidesPerView: 1.3,
            spaceBetween: 20,
        }
    }
})

const reviewsThumbsSwiper = new Swiper('.swiper-reviews-thumbs', {
    slidesPerView: 'auto',
    direction: 'vertical',
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-reviews-thumbs-next',
        prevEl: '.swiper-reviews-thumbs-prev',
    }
})

const reviewsSwiper = new Swiper('.swiper-reviews', {
    slidesPerView: 1,
    thumbs: {
        swiper: reviewsThumbsSwiper,
        autoScrollOffset: 1,
    },
    breakpoints: {
        360: {
            slidesPerView: 1,
            direction: 'horizontal',
        },
        300: {
            slidesPerView: 3,
            direction: 'vertical',
            spaceBetween: 10,
        }
    }
})