// const splide = new Splide(".splide", {
//     type: "loop",
//     perPage: 3,
//     focus: "center",
// });

// splide.mount();

document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide", {
        type: "loop",
        perPage: 3,
        focus: "center",
        autoplay: true,
        height: "24rem",
        breakpoints: {
            640: {
                perPage: 2,
                // gap: ".7rem",
                height: "20rem",
            },
            480: {
                perPage: 1,
                // gap: ".7rem",
                height: "20rem",
            },
        },
        // cover: true,
    });
    splide.mount();
});
