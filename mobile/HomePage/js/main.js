var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const img1 = document.querySelector('.main-Img .images .img1');
const img2 = document.querySelector('.main-Img .images .img2');
const img3 = document.querySelector('.main-Img .images .img3');

const img1Text = document.querySelector('.img1Text');
const img2Text = document.querySelector('.img2Text');
const img3Text = document.querySelector('.img3Text');

const leftIndicator = document.querySelector('.left-indecator');
const rightIndicator = document.querySelector('.right-indecator');

let isimg1InView = true;
let isimg2InView = false;
let isimg3InView = false;

document.querySelector('.main-Img  .images').addEventListener("scroll", () => {
    if (isInViewport(img1) && !isInViewport(img2) && !isimg1InView) {
        setTimeout(() => {
            changeElementOpacities(1,0,0,0,1);
            console.log("img1")
        }, 300);

    } else if (isInViewport(img2) && !isInViewport(img3) && !isimg2InView) {
        setTimeout(() => {
            changeElementOpacities(0,1,0,1,1);
            console.log("img2")
        }, 300);

    } else if (isInViewport(img3) && !isInViewport(img1) && !isimg3InView) {
        setTimeout(() => {
            changeElementOpacities(0,0,1,1,0);
            console.log("img3")
        }, 300);

    }
});

function changeElementOpacities(txt1, txt2, txt3, indL, indR) {

    isimg1InView = Boolean(txt1) ;
    isimg2InView = Boolean(txt2);
    isimg3InView = Boolean(txt3);

    img1Text.style.transition = 'opacity 0.3s';
    img1Text.style.opacity = txt1 + "";

    img2Text.style.transition = 'opacity 0.3s';
    img2Text.style.opacity = txt2 + "";

    img3Text.style.transition = 'opacity 0.3s';
    img3Text.style.opacity = txt3 + "";

    leftIndicator.style.transition = 'opacity 0.3s';
    leftIndicator.style.opacity = indL + "";

    rightIndicator.style.transition = 'opacity 0.3s';
    rightIndicator.style.opacity = indR + "";
}
