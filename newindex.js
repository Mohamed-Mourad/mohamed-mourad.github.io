// THEME CHANGER
const themeMap = {
    dark: "light",
    light: "dark",
};

const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];

    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;


// ON SCROLL ANIMATION
const observerLEFT = new IntersectionObserver((entries) => {
    entries.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('hleft-show');
        }
    });
});
const observerDOWN = new IntersectionObserver((entries) => {
    entries.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('hdown-show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observerLEFT.observe(element));
hiddenElements.forEach((element) => observerDOWN.observe(element));


// Rubber Animation
$(".rubberBand").bind("webkitAnimationEnd mozAnimationEnd animationend", function () {
    $(this).removeClass("animated")
})

$(".rubberBand").hover(function () {
    $(this).addClass("animated");
})


// SKILL CHART
$(document).ready(function () {
    if (
        !$('#myCanvas').tagcanvas(
            {
                textColour: getComputedStyle(document.documentElement).getPropertyValue('--icon-primary'),
                outlineColour: 'transparent',
                reverse: true,
                depth: 0.8,
                maxSpeed: 0.05,
                weight: true,
            },
            'tags',
        )
    ) {
        // something went wrong hide the canvas container,
        $('#myCanvasContainer')
    }
})