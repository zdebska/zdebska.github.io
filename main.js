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
    let isPageBottom = window.scrollY + window.innerHeight === document.documentElement.scrollHeight;

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav .topbar a[href*=' + id + ']').classList.add('active');
            });
        } else if (isPageBottom && sec === sections[sections.length - 1]) {
            // If at the bottom of the page, highlight the last navigation link
            navLinks.forEach(links => links.classList.remove('active'));
            document.querySelector('header nav .topbar a:last-child').classList.add('active');
        }
    });
};