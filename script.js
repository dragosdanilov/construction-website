// const header = document.querySelector("header");
// const sectionOne = document.querySelector(".home-intro");

// $(function () {
//     $(document).scroll(function () {
//         var $nav = $(".header");
//         $nav.toggleClass("scrolled", $(this).scrolltop() > $nav.height());
//     });
// });

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})