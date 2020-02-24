animationDone = false;
isAboutCardAnimationDone = false;
isFoormCardAnimationDone = false;
isCarsCardAnimationDone = false;

const aboutSectionTrigger = document.querySelector(".about-container-trigger");
const mainSectionTrigger = document.querySelector(".main-quote");
const bestSellSectionTrigger = document.querySelector(".best-seller .car-name");
const formSectionTrigger = document.querySelector(".form-container-trigger");
const CarsSectionTrigger = document.querySelector(".cars-container-trigger");

animateOut('.about-container', 1);
window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;



    if (isInViewport(mainSectionTrigger) && !animationDone) {
        animateIn('.main-image', 1)
        animateIn('.extra-text', 2)
        animateIn('.main-quote', 2)

        animateOut('.best-sell-img', 1);
        animateOut('.best-seller', 2);

        animationDone = true;
    }
    else if (isInViewport(bestSellSectionTrigger) && animationDone) {
        animateOut('.main-image', 1);
        animateOut('.main-quote', 2);
        animateOut('.extra-text', 2);

        animateIn('.best-sell-img', 1)
        animateIn('.best-seller', 2)

        animationDone = false;
    }
});

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;


    if (isInViewport(CarsSectionTrigger) && !isCarsCardAnimationDone) {
        animateOut('.best-sell-img', 1);
        animateOut('.best-seller', 2);

        animateIn('.main-cars-container', 1)

        isCarsCardAnimationDone = true;
    }
    else if (isInViewport(bestSellSectionTrigger) && isCarsCardAnimationDone) {

        animateIn('.best-sell-img', 1)
        animateIn('.best-seller', 2)

        animateOut('.main-cars-container', 1);
        isCarsCardAnimationDone = false;
    }
});
//
window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;



    if (isInViewport(CarsSectionTrigger) && !isAboutCardAnimationDone) {
        animateOut('.about-container', 1);

        animateIn('.main-cars-container', 1)
        isAboutCardAnimationDone = true;
    }
    else if (isInViewport(aboutSectionTrigger) && isAboutCardAnimationDone) {
        animateIn('.about-container', 1)

        animateOut('.main-cars-container', 1);
        isAboutCardAnimationDone = false;
    }
});


window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;



    if (isInViewport(aboutSectionTrigger) && !isFoormCardAnimationDone) {
        animateIn('.about-container', 1)

        animateOut('.main-contact-form-container', 1);
        isFoormCardAnimationDone = true;
    }
    else if (isInViewport(formSectionTrigger) && isFoormCardAnimationDone) {

        animateOut('.about-container', 1);

        animateIn('.main-contact-form-container', 1)
        isFoormCardAnimationDone = false;
    }
});

function animateOut(element, index) {
    if (index === 1) {

        $(element).style.transition = 'all 0.5s cubic-bezier(0.47,1.64,0.41,0.8)';

        $(element).style.transform = 'scale(0.9)';
        $(element).style.filter = 'brightness(40%)';

    } else if (index === 2) {

        $(element).style.transition = 'all 0.5s cubic-bezier(0.47,1.64,0.41,0.8)';

        $(element).style.transform = 'scale(0.9)';
        $(element).style.color = '#FFAF8A';
        $(element).style.filter = 'brightness(40%)';
    }
}

function animateIn(element, index) {
    if (index === 1) {

        $(element).style.transition = 'all 0.5s cubic-bezier(0.47,1.64,0.41,0.8)';

        $(element).style.transform = 'scale(1)';
        $(element).style.filter = 'brightness(100%)';

    } else if (index === 2) {

        $(element).style.transition = 'all 0.5s cubic-bezier(0.47,1.64,0.41,0.8)';

        $(element).style.transform = 'scale(1)';
        $(element).style.color = 'rgb(252, 133, 78)';
        $(element).style.filter = 'brightness(100%)';
    }
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