


animationDone = false;
isAboutCardAnimationDone = false;
isFoormCardAnimationDone = false;
isCarsCardAnimationDone = false;

const aboutSectionTrigger = document.querySelector(".about-container-trigger");
const mainSectionTrigger = document.querySelector(".main-quote");
const bestSellSectionTrigger = document.querySelector(".best-seller .car-name");
const formSectionTrigger = document.querySelector(".form-container-trigger"); 
const CarsSectionTrigger = document.querySelector(".cars-container-trigger");

animateAboutCardsOut();
window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;

    console.log(scroll)

    if (isInViewport(mainSectionTrigger) && !animationDone) {
        animateTopCardsIn();
        animateBottomCardsOut();
        animationDone = true;
    }
    else if ( isInViewport(bestSellSectionTrigger) && animationDone) {
        animateTopCardsOut();
        animateBottomCardsIn();
        animationDone = false;
    } 
});

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;

    console.log(scroll)

    if (isInViewport(CarsSectionTrigger) && !isCarsCardAnimationDone) {
        animateBottomCardsOut();
       animateCarsCardsIn();
       isCarsCardAnimationDone = true;
    }
    else if ( isInViewport(bestSellSectionTrigger) && isCarsCardAnimationDone) {
        console.log("s")
        animateBottomCardsIn();
       animateCarsCardsOut();
       isCarsCardAnimationDone = false;
    } 
});

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;

    console.log(scroll)

    if (isInViewport(CarsSectionTrigger) && !isAboutCardAnimationDone) {
        animateAboutCardsOut();
        animateCarsCardsIn();
        isAboutCardAnimationDone = true;
    }
    else if ( isInViewport(aboutSectionTrigger) && isAboutCardAnimationDone) {
        animateAboutCardsIn();
        animateCarsCardsOut();
        isAboutCardAnimationDone = false;
    } 
});



window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;

    console.log(scroll)

    if (isInViewport(aboutSectionTrigger) && !isFoormCardAnimationDone) {
        animateAboutCardsIn();
       animateFormCardsOut();
       isFoormCardAnimationDone = true;
    }
    else if ( isInViewport(formSectionTrigger) && isFoormCardAnimationDone) {
        console.log("s")
        animateAboutCardsOut();
       animateFormCardsIn();
       isFoormCardAnimationDone = false;
    } 
});

function animateTopCardsOut() {
    const mainImage = anime({
        targets: '.main-image',
        scale: 0.9,
        filter: 'brightness(40%)',
    });
    const mainQuote = anime({
        targets: '.main-quote, .extra-text',
        scale: 0.9,
        color: '#FFAF8A',
        filter: 'brightness(40%)',
    });

}

function animateTopCardsIn() {
    const mainImage = anime({
        targets: '.main-image',
        scale: 1,
        filter: 'brightness(100%)',
    });

    const mainQuote = anime({
        targets: '.main-quote, .extra-text',
        scale: 1,
        color: 'rgb(252, 133, 78)',
        filter: 'brightness(100%)',
    });

}


function animateBottomCardsOut() {
    const mainImage = anime({
        targets: '.best-sell-img',
        scale: 0.9,
        filter: 'brightness(40%)',
    });
    const mainQuote = anime({
        targets: '.best-seller',
        scale: 0.9,
        color: '#FFAF8A',
        filter: 'brightness(40%)',
    });

}

function animateBottomCardsIn() {
    const mainImage = anime({
        targets: '.best-sell-img',
        scale: 1,
        filter: 'brightness(100%)',
    });

    const mainQuote = anime({
        targets: '.best-seller',
        scale: 1,
        color: 'rgb(252, 133, 78)',
        filter: 'brightness(100%)',
    });

}

function animateAboutCardsOut() {
    
    const mainImage = anime({
        targets: '.about-container',
        scale: 0.9,
        filter: 'brightness(40%)',
    });
}

function animateAboutCardsIn() {
    const mainImage = anime({
        targets: '.about-container',
        scale: 1,
        filter: 'brightness(100%)',
    });

}

function animateFormCardsOut() {
    
    const mainImage = anime({
        targets: '.main-contact-form-container',
        scale: 0.9,
        filter: 'brightness(40%)',
    });
}

function animateFormCardsIn() {
    const mainImage = anime({
        targets: '.main-contact-form-container',
        scale: 1,
        filter: 'brightness(100%)',
    });

}

function animateCarsCardsOut() {
    
    const mainImage = anime({
        targets: '.main-cars-container',
        scale: 0.9,
        filter: 'brightness(40%)',
    });
}

function animateCarsCardsIn() {
    const mainImage = anime({
        targets: '.main-cars-container',
        scale: 1,
        filter: 'brightness(100%)',
    });

}


var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};