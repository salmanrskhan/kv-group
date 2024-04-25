// Accordine
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".accordion-item");

    items.forEach((item) => {
        item.addEventListener("click", function () {
            if (!this.classList.contains("active")) {
                closeAllAccordions();
                this.classList.add("active");
            }
        });
    });

    // Open the first accordion item on load
    items[0].classList.add("active");
});

function closeAllAccordions() {
    const items = document.querySelectorAll(".accordion-item");
    items.forEach((item) => {
        item.classList.remove("active");
    });
}


// Review
$(".review_slider").owlCarousel({
    autoplay: false,
    slideSpeed: 1000,
    items: 3,
    loop: true,
    nav: true,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    margin: 20,
    dots: true,
    responsive: {
        120: {
            items: 1
        },
        320: {
            items: 1
        },
        767: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }

});



//  Trucks
function showContent(tabNumber) {
    for (let i = 1; i <= 5; i++) {
        document.getElementById('truck-cont' + i).classList.remove('active');
        document.getElementById('btn' + i).classList.remove('active');
    }

    document.getElementById('truck-cont' + tabNumber).classList.add('active');
    document.getElementById('btn' + tabNumber).classList.add('active');
}
