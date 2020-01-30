
const body = $("body");
const mainQuote = $(".main-quote");
const navBar =  $(".header");
const searchIcon = $(".searchBox img");
const modeSwitchIcon = $(".icon-mode-switch img");
const extraText = $(".extra-text");
const extraTextCircles = $(".extra-text .circle");

var inputIsHidden = true;

searchIcon.click(function () {
    if (!inputIsHidden) {
        $(".input").animate({
            'width': '0px',
            'opacity': '0%'
        }, 175);
        inputIsHidden = !inputIsHidden;
    } else {
        $(".input").animate({
            'width': '180px',
            'opacity': '1000%'
        }, 175);
        inputIsHidden = !inputIsHidden;
    }
    console.log("click")
});



var isDarkMode = true;

modeSwitchIcon.click(function () {
    if (!isDarkMode) {
        body.animate({ 'background-color': "#121212" }, 600);
        mainQuote.animate({ 'color': "#FFAF8A;" }, 600);
        extraText.animate({ 'color': "#FFAF8A" }, 600);
        extraTextCircles.animate({ 'background-color': "#FFAF8A" }, 600);

        navBar.animate({ 'color': "#E3E3E3" }, 600);

        searchIcon.animate({ 'opacity': "0" }, 300);
        modeSwitchIcon.animate({ 'opacity': "0" }, 300);

        setTimeout(() => {
            searchIcon.animate({ 'opacity': "1" }, 1);
            modeSwitchIcon.animate({ 'opacity': "1" }, 1);

            searchIcon.attr("src","./assets/search-white.png");
            modeSwitchIcon.attr("src","./assets/sun.svg");
        }, 300);
        
        console.log("dark");
        isDarkMode = !isDarkMode;
    } else {
        body.animate({ 'background-color': "#E3E3E3" }, 600);
        mainQuote.animate({ 'color': "#FF6119" }, 600);
        extraText.animate({ 'color': "#FF6119" }, 600);
        extraTextCircles.animate({ 'background-color': "#FF6119" }, 600);

        navBar.animate({ 'color': "#121212" }, 600);

        searchIcon.animate({ 'opacity': "0" }, 300);
        modeSwitchIcon.animate({ 'opacity': "0" }, 300);

        setTimeout(() => {
            searchIcon.animate({ 'opacity': "1" }, 1);
            modeSwitchIcon.animate({ 'opacity': "1" }, 1);

            searchIcon.attr("src","./assets/search-black.svg");
            modeSwitchIcon.attr("src","./assets/sleep.png");
        }, 300);
        

        console.log("light");
        isDarkMode = !isDarkMode;
    }
    console.log("click")
});


const controller = new ScrollMagic.Controller();

const mainImage = $(".main-image img");

const mainImageAnim = TweenMax.fromTo(mainImage, 3, { boxShadow: '2px 2px 23px -4px rgba(0,0,0,1)' }, { boxShadow: '2px 2px 23px -4px rgba(0,0,0,0)' });


let backgroundAnim = new ScrollMagic.Scene({
    duration: 600,
    triggerElement: mainImage,
    triggerHook: 0
})
    // .addIndicators()
    .setTween(mainImageAnim)
    .addTo(controller);

