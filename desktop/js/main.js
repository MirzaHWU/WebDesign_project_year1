const img1 = document.querySelector('.img1') 
const img2 = document.querySelector('.img2') 
const img3 = document.querySelector('.img3') 

const img1Text = document.querySelector('.img1Text');
const img2Text = document.querySelector('.img2Text');
const img3Text = document.querySelector('.img3Text');

// const leftIndicator = document.querySelector('.left-indecator');
// const rightIndicator = document.querySelector('.right-indecator');

let a = 0;


function myFunction () {
    
    setTimeout(() => {
        autoScroll()
        requestAnimationFrame(myFunction); 
    }, 3000);
    
}

requestAnimationFrame(myFunction);

function autoScroll() {
    if(a === 0) {
        img2.scrollIntoView()
        changeElementOpacities(0, 1, 0, 0, 0);
        a++
    } else if(a === 1) {
        img3.scrollIntoView()
        changeElementOpacities(0, 0, 1, 0, 0);
        a++
    } else if(a === 2) {
        img1.scrollIntoView()
        changeElementOpacities(1, 0, 0, 0, 0);
        a++
    } else {
        a = 0;
        autoScroll()
    }
}


function changeElementOpacities(txt1, txt2, txt3, indL, indR) {

    img1Text.style.transition = 'opacity 0.7s';
    img1Text.style.opacity = txt1 + "";

    img2Text.style.transition = 'opacity 0.7s';
    img2Text.style.opacity = txt2 + "";

    img3Text.style.transition = 'opacity 0.7s';
    img3Text.style.opacity = txt3 + "";

    // leftIndicator.style.transition = 'opacity 0.3s';
    // leftIndicator.style.opacity = indL + "";

    // rightIndicator.style.transition = 'opacity 0.3s';
    // rightIndicator.style.opacity = indR + "";
}