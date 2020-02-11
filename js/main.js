
const body = $("body");
const mainQuote = $(".main-quote");
const navBar = $(".header");
const searchIcon = $(".searchBox img");
const modeSwitchIcon = $(".icon-mode-switch img");
const extraText = $(".extra-text");
const extraTextCircles = $(".extra-text .circle");
const headerBlurDark = $(".header-blur-dark");
const headerBlurLight = $(".header-blur-light");
const toChangeColor = $(".toChangeColor");
const learnMoreButton = $(".learn-more-button button"); 
const aboutContainer = $(".about-container");
const whitetext = $(".toChangeColorWhite"); 
const contactFormBackground = $(".main-contact-form-container"); 
const formFieldsToChangeColor = $(".formFieldsToChangeColor");
const mainCarsContainer = $(".main-cars-container .car-category"); 

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

        toChangeColor.animate({ 'color': "rgb(252, 133, 78)" }, 600);
        whitetext.animate({ 'color': "#E3E3E3" }, 600);

        formFieldsToChangeColor.animate({ 'backgroundColor': "#121212" }, 600);

        extraTextCircles.animate({ 'background-color': "rgb(252, 133, 78)" }, 600);
        learnMoreButton.animate({ 'background-color': "rgb(252, 133, 78)" }, 600);

        headerBlurDark.animate({ 'opacity': "1" }, 600);
        headerBlurLight.animate({ 'opacity': "0" }, 600);

        navBar.animate({ 'color': "#E3E3E3" }, 600);

        searchIcon.animate({ 'opacity': "0" }, 300);
        modeSwitchIcon.animate({ 'opacity': "0" }, 300);

        aboutContainer.animate({ 'background-color': "#191919;" }, 600);
        contactFormBackground.animate({ 'background-color': "#191919;" }, 600);
        mainCarsContainer.animate({ 'background-color': "#191919;" }, 600);

        setTimeout(() => {
            searchIcon.animate({ 'opacity': "1" }, 1);
            modeSwitchIcon.animate({ 'opacity': "1" }, 1);

            searchIcon.attr("src", "./assets/search-white.png");
            modeSwitchIcon.attr("src", "./assets/sun.svg");
        }, 300);

        console.log("dark");
        isDarkMode = !isDarkMode;
    } else {
        body.animate({ 'background-color': "#E3E3E3" }, 600);
        
        toChangeColor.animate({ 'color': "#FF6119" }, 600);
        whitetext.animate({ 'color': "#121212" }, 600);

        formFieldsToChangeColor.animate({ 'backgroundColor': "#E3E3E3" }, 600);


        learnMoreButton.animate({ 'background-color': "#FF6119" }, 600);
        extraTextCircles.animate({ 'background-color': "#FF6119" }, 600);

        headerBlurDark.animate({ 'opacity': "0" }, 600);
        headerBlurLight.animate({ 'opacity': "1" }, 600);

        navBar.animate({ 'color': "#121212" }, 600);

        searchIcon.animate({ 'opacity': "0" }, 300);
        modeSwitchIcon.animate({ 'opacity': "0" }, 300);

        aboutContainer.animate({ 'background-color': "#EFEFEF" }, 600);
        contactFormBackground.animate({ 'background-color': "#EFEFEF;" }, 600);
        mainCarsContainer.animate({ 'background-color': "#EFEFEF;" }, 600);

        setTimeout(() => {
            searchIcon.animate({ 'opacity': "1" }, 1);
            modeSwitchIcon.animate({ 'opacity': "1" }, 1);

            searchIcon.attr("src", "./assets/search-black.svg");
            modeSwitchIcon.attr("src", "./assets/sleep.png");
        }, 300);


        console.log("light");
        isDarkMode = !isDarkMode;
    }
    console.log("click")
});


const controller = new ScrollMagic.Controller();

const mainImage = $(".main-image img");

const mainImageAnim = TweenMax.fromTo(mainImage, 3, { boxShadow: '2px 2px 23px -4px rgba(0,0,0,1)' }, { boxShadow: '2px 2px 23px -4px rgba(0,0,0,0)' });
const headerBlur = $(".header-blur");


let backgroundAnim = new ScrollMagic.Scene({
    duration: 600,
    triggerElement: mainImage,
    triggerHook: 0
})
    // .addIndicators()
    .setTween(mainImageAnim)
    .addTo(controller);








    
let userStartScrolling = true;

$(window).scroll(function () {

    if (userStartScrolling) {
        navBar.animate({ 'opacity': "0" }, 300);
        headerBlurDark.animate({ 'opacity': "0" }, 300);
        headerBlurLight.animate({ 'opacity': "0" }, 300);
        userStartScrolling = false;

        
    }

    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function () {
        navBar.animate({ 'opacity': "1" }, 300);
        if(isDarkMode) {
            headerBlurDark.animate({ 'opacity': "1" }, 300);
        } else {
            headerBlurLight.animate({ 'opacity': "1" }, 300);
        }
        
        userStartScrolling = true;
    }, 500));
});



let bestSellImgArray = [];
let currentImageIndex = 0;



const leftArrow = $(".best-sell-img .learn-more-button .arrow-left img");
const rightArrow = $(".best-sell-img .learn-more-button .arrow-right img");
const bestSellImg = $("#best-sell-img");

leftArrow.click(() => {
    bestSellImg.animate({ opacity: 0 }, 600);

    setTimeout(() => {
        bestSellImg.attr("src", "./assets/bestSellCars/car" + currentImageIndex + ".jpg");
        console.log("bestSellCars/car" + currentImageIndex + ".jpg");
    }, 300);

    bestSellImg.animate({ opacity: 1 }, 600);

    currentImageIndex++;
    if (currentImageIndex >= 4) {
        currentImageIndex = 0;
    }

});

rightArrow.click(() => {
    bestSellImg.animate({ opacity: 0 }, 600);

    setTimeout(() => {
        bestSellImg.attr("src", "./assets/bestSellCars/car" + currentImageIndex + ".jpg");
    }, 300);

    bestSellImg.animate({ opacity: 1 }, 600);

    currentImageIndex--;
    if (currentImageIndex <= 0) {
        currentImageIndex = 4 - 1;
    }

});
