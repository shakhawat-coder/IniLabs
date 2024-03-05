// ======================navbar==================
// Toggle mobile menu
let mobileMenuToggle = document.getElementById('mobile-menu-toggle');
let mobileMenu =  document.getElementById('mobile-menu');
let mobileMenuClose = document.getElementById('mobile-menu-close');
// Toggle mobile menu
mobileMenuToggle.addEventListener('click', function() {
    mobileMenu.classList.remove('hidden');
    mobileMenuToggle.classList.add('hidden')
});
// Close mobile menu
mobileMenuClose.addEventListener('click', function() {
    mobileMenu.classList.add('hidden');
    mobileMenuToggle.classList.remove('hidden')
});
// Close menu if clicked outside of the menu
document.addEventListener('click', function(event) {
    const isClickInsideNavbar = mobileMenuToggle.contains(event.target) || mobileMenu.contains(event.target);
    if (!isClickInsideNavbar && !event.target.classList.contains(mobileMenu)) {
        mobileMenu.classList.add('hidden');
        mobileMenuToggle.classList.remove('hidden')
    }
});

// =================dropdown section=============
document.addEventListener("DOMContentLoaded", function () {
    let toggles = document.querySelectorAll('.dropdown > a');

    toggles.forEach(function (toggle) {
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            let menu = toggle.nextElementSibling;

            // Hide all dropdown menus
            let menus = document.querySelectorAll('.dropdown-menu');
            menus.forEach(function (m) {
                if (m !== menu) {
                    m.classList.remove('hidden');
                }
            });

            // Toggle current dropdown menu
            menu.classList.toggle('hidden');
        });

        // Close dropdown menus if clicked outside
        document.addEventListener('click', function (event) {
            if (!toggle.parentElement.contains(event.target)) {
                toggle.nextElementSibling.classList.add('hidden');
            }
        });
    });
});

// ==================slider==================
$(document).ready(function(){
    $("#slider1").owlCarousel({
        items: 5,
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        autoplaySpeed:3000,
        autoplayTimeout: 2200,
        responsive: {
            0: {
                items: 3
            },
            768: {
                items: 5
            },
        }
    });
    $("#slider2").owlCarousel({
        items: 3,
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });
  });
// =================Nav tab=================
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabItems = document.querySelectorAll('.tab-item');

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Hide all tab items
            tabItems.forEach(item => {
                item.classList.add('hidden');
            });

            // Remove active class from all buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('bg-[#F1F3FD]',);
                btn.classList.add('bg-white');
            });

            // Show the selected tab item
            tabItems[index].classList.remove('hidden');

            // Set active class to the clicked button
            button.classList.remove('bg-white');
            button.classList.add('bg-[#F1F3FD]');
        });
    });

// =================Nav tab=================
    const catButtons = document.querySelectorAll('.cat-btn');
    const catItems = document.querySelectorAll('.cat-item');

    catButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Hide all tab items
            catItems.forEach(item => {
                item.classList.add('hidden');
            });

            // Remove active class from all buttons
            catButtons.forEach(btn => {
                btn.classList.remove('bg-[#F1F3FD]',);
                btn.classList.add('bg-white');
            });

            // Show the selected tab item
            catItems[index].classList.remove('hidden');

            // Set active class to the clicked button
            button.classList.remove('bg-white');
            button.classList.add('bg-[#F1F3FD]');
        });
    });