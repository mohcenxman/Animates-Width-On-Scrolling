let sectionThree = document.querySelector(".three");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function() {
    if(window.scrollY >= sectionThree.offsetTop - 350) {
        console.log("Reached Section Three");
        spans.forEach((span) => {
            span.style.width = span.dataset.width; 
        });
    }
};