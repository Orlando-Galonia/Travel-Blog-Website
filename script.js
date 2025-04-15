const videoElements = document.querySelectorAll("video");
videoElements.forEach(video => {
    video.addEventListener("play", function () {
        videoElements.forEach(otherVideo => {
            if (otherVideo !== video) {
                otherVideo.pause();
            }
        });
    });
});

let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        header.style.top = "-160px"; // hide header
    } else {
        // Scrolling up
        header.style.top = "0"; // show header
    }
    lastScrollY = window.scrollY;
});
