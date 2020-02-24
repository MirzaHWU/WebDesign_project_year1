let bestSellImgArray = [];
let currentImageIndex = 0;

const leftArrow = $(".best-sell-img .learn-more-button .arrow-left img");
const rightArrow = $(".best-sell-img .learn-more-button .arrow-right img");
const bestSellImg = $("#best-sell-img");


leftArrow.addEventListener('click', () => {
    //bestSellImg.animate({ opacity: 0 }, 600);

    bestSellImg.style.transition = 'opacity 0.6s';
    bestSellImg.style.opacity = '0';

    setTimeout(() => {
        // bestSellImg.animate({ opacity: 1 }, 600);

       bestSellImg.style.transition = 'opacity 0.6s';
       bestSellImg.style.opacity = '1';
       
       // bestSellImg.attr("src", "./assets/bestSellCars/car" + currentImageIndex + ".jpg");
       bestSellImg.setAttribute('src', "./assets/bestSellCars/car" + currentImageIndex + ".jpg");

       
        
    }, 500);

   

    

    currentImageIndex++;
    if (currentImageIndex >= 4) {
        currentImageIndex = 0;
    }

});


rightArrow.addEventListener('click', () => {
    //bestSellImg.animate({ opacity: 0 }, 600);

    bestSellImg.style.transition = 'opacity 0.6s';
    bestSellImg.style.opacity = '0';

    setTimeout(() => {
        //bestSellImg.animate({ opacity: 1 }, 600);

        bestSellImg.style.transition = 'opacity 0.6s';
        bestSellImg.style.opacity = '1';

       // bestSellImg.attr("src", "./assets/bestSellCars/car" + currentImageIndex + ".jpg");
        bestSellImg.setAttribute('src', "./assets/bestSellCars/car" + currentImageIndex + ".jpg");

        
    }, 500);

    

    currentImageIndex--;
    if (currentImageIndex <= 0) {
        currentImageIndex = 4 - 1;
    }

});
