/* 
----  Functions for styling CV page  -----
----    Author: Zdebska Kateryna     -----
*/

// Show and hide sidebar
function ShowSidebar() {
    document.querySelector(".fixed-header nav ul.sidebar").style.display = "block";
    document.querySelector(".burgrButton").style.display = "none";
}
function HideSidebar() {
    document.querySelector(".fixed-header nav ul.sidebar").style.display = "none";
    document.querySelector(".burgrButton").style.display = "block";
}

// Highlight the current navigation link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav .topbar a');
window.onscroll = () => {
    let isPageBottom = (window.innerHeight + window.scrollY) >= document.body.offsetHeight;

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            document.querySelector('header nav .topbar a[href*=' + id + ']').classList.add('active');
        }
    });

    // Check if the user has scrolled to the bottom of the page
    if (isPageBottom) {
        // Remove active class from all nav links
        navLinks.forEach(links => links.classList.remove('active'));
        // Add active class to the last navigation link (assuming it's the link to the "Contact" section)
        document.querySelector('header nav .topbar a[href="#personal-info"]').classList.add('active');
    }
};