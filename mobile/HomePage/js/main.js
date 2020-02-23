function $(selector) {

    return document.querySelector(selector);
}




//Create Cards Dynamically
$(".main-Img").addEventListener("click", function () {

    let card = document.createElement("div");
    card.className = "card";

    let cardImg = document.createElement("img");
    cardImg.src = "./assets/main_img.jpg";
    cardImg.className = "card_img"

    let cardText = document.createElement("img");
    cardText.className = "card_txt"
    cardText.innerHTML = "Test"

    //card.appendChild(cardImg);
    card.appendChild(cardText);

    $(".cards").appendChild(card);



    console.log("done")
}); 
