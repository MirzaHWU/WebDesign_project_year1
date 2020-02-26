var inputIsHidden = true;

var isDarkMode = true;


modeSwitchIcon.addEventListener('click', () => {
    if (!isDarkMode) {
       // body.animate({ 'background-color': "#121212" }, 600);

        body.style.transition = 'background-color 0.6s';
        body.style.backgroundColor = '#121212';

        //toChangeColor.animate({ 'color': "rgb(252, 133, 78)" }, 600);

        toChangeColor.forEach(ele => {
            ele.style.transition = 'color 0.6s';
            ele.style.color = 'rgb(252, 133, 78)';
        })
        

        //whitetext.animate({ 'color': "#E3E3E3" }, 600);
        whitetext.forEach(ele => {
            ele.style.transition = 'color 0.6s';
            ele.style.color = '#E3E3E3';
    
        }) 
        
        //formFieldsToChangeColor.animate({ 'backgroundColor': "#121212" }, 600);

        formFieldsToChangeColor.style.transition = 'background-color 0.6s';
        formFieldsToChangeColor.style.backgroundColor = '#121212';

       // extraTextCircles.animate({ 'background-color': "rgb(252, 133, 78)" }, 600);

       extraTextCircles.style.transition = 'background-color 0.6s';
        extraTextCircles.style.backgroundColor = 'rgb(252, 133, 78)';

        //learnMoreButton.animate({ 'background-color': "rgb(252, 133, 78)" }, 600);

        learnMoreButton.style.transition = 'background-color 0.6s';
        learnMoreButton.style.backgroundColor = 'rgb(252, 133, 78)';

        //headerBlurDark.animate({ 'opacity': "1" }, 600);

        headerBlurDark.style.transition = 'opacity 0.6s';
        headerBlurDark.style.opacity = '1';

       // headerBlurLight.animate({ 'opacity': "0" }, 600);

       headerBlurLight.style.transition = 'opacity 0.6s';
       headerBlurLight.style.opacity = '0';

       // navBar.animate({ 'color': "#E3E3E3" }, 600);

       navBar.style.transition = 'color 0.6s';
       navBar.style.color = '#E3E3E3';

        //searchIcon.animate({ 'opacity': "0" }, 300);

        searchIcon.style.transition = 'opacity 0.3s';
        searchIcon.style.opacity = '0';

        //modeSwitchIcon.animate({ 'opacity': "0" }, 300);

        modeSwitchIcon.style.transition = 'opacity 0.3s';
        modeSwitchIcon.style.opacity = '0';

        //aboutContainer.animate({ 'background-color': "#191919;" }, 600);

        aboutContainer.style.transition = 'background-color 0.6s';
        aboutContainer.style.backgroundColor = '#191919';

        //contactFormBackground.animate({ 'background-color': "#191919;" }, 600);

        contactFormBackground.style.transition = 'background-color 0.6s';
        contactFormBackground.style.backgroundColor = '#191919';

        //mainCarsContainer.animate({ 'background-color': "#191919;" }, 600);
        mainCarsContainer.forEach(ele => {
            ele.style.transition = 'background-color 0.6s';
            ele.style.backgroundColor = '#191919';
            console.log('#')
        })
       
        setTimeout(() => {
            //searchIcon.animate({ 'opacity': "1" }, 1);

            searchIcon.style.transition = 'opacity 1s';
            searchIcon.style.opacity = '1';

           // modeSwitchIcon.animate({ 'opacity': "1" }, 1);

            modeSwitchIcon.style.transition = 'opacity 1s';
            modeSwitchIcon.style.opacity = '1';

            //searchIcon.attr("src", "./assets/search-white.png");

            searchIcon.setAttribute('src', "./assets/search-white.png");

           // modeSwitchIcon.attr("src", "./assets/sun.svg");

           modeSwitchIcon.setAttribute('src', "./assets/sun.svg");
        }, 300);

        console.log("dark");
        isDarkMode = !isDarkMode;
    } else {
        //body.animate({ 'background-color': "#E3E3E3" }, 600);

        body.style.transition = 'background-color 0.6s';
        body.style.backgroundColor = '#E3E3E3';
    
       // toChangeColor.animate({ 'color': "#FF6119" }, 600);

       toChangeColor.forEach(ele => {
        ele.style.transition = 'color 0.6s';
        ele.style.color = '#FF6119';
       })
       

        //whitetext.animate({ 'color': "#121212" }, 600);
        whitetext.forEach(ele => {
            ele.style.transition = 'color 0.6s';
            ele.style.color = '#121212';
        })
        

        //formFieldsToChangeColor.animate({ 'backgroundColor': "#E3E3E3" }, 600);

        formFieldsToChangeColor.style.transition = 'background-color 0.6s';
        formFieldsToChangeColor.style.backgroundColor = '#E3E3E3';


        //learnMoreButton.animate({ 'background-color': "#FF6119" }, 600);

        learnMoreButton.style.transition = 'background-color 0.6s';
        learnMoreButton.style.backgroundColor = '#FF6119';

        //extraTextCircles.animate({ 'background-color': "#FF6119" }, 600);

        extraTextCircles.style.transition = 'background-color 0.6s';
        extraTextCircles.style.backgroundColor = '#FF6119';

       // headerBlurDark.animate({ 'opacity': "0" }, 600);

       headerBlurDark.style.transition = 'opacity 0.6s';
       headerBlurDark.style.opacity = '0';

        //headerBlurLight.animate({ 'opacity': "1" }, 600);

        headerBlurLight.style.transition = 'opacity 0.6s';
        headerBlurLight.style.opacity = '1';

        //navBar.animate({ 'color': "#121212" }, 600);

        navBar.style.transition = 'color 0.6s';
        navBar.style.color = '#121212';

       //searchIcon.animate({ 'opacity': "0" }, 300);

       searchIcon.style.transition = 'opacity 0.3s';
       searchIcon.style.opacity = '0';

        //modeSwitchIcon.animate({ 'opacity': "0" }, 300);

        modeSwitchIcon.style.transition = 'opacity 0.3s';
        modeSwitchIcon.style.opacity = '0';

        //aboutContainer.animate({ 'background-color': "#EFEFEF" }, 600);

        aboutContainer.style.transition = 'background-color 0.6s';
        aboutContainer.style.backgroundColor = '#EFEFEF';

        //contactFormBackground.animate({ 'background-color': "#EFEFEF;" }, 600);

        contactFormBackground.style.transition = 'background-color 0.6s';
        contactFormBackground.style.backgroundColor = '#EFEFEF';

        //mainCarsContainer.animate({ 'background-color': "#EFEFEF;" }, 600);

        mainCarsContainer.forEach(ele => {
            ele.style.transition = 'background-color 0.6s';
            ele.style.backgroundColor = '#EFEFEF';
        })
        

        setTimeout(() => {
            //searchIcon.animate({ 'opacity': "1" }, 1);

            searchIcon.style.transition = 'opacity 1s';
            searchIcon.style.opacity = '1';

           // modeSwitchIcon.animate({ 'opacity': "1" }, 1);

           modeSwitchIcon.style.transition = 'opacity 1s';
           modeSwitchIcon.style.opacity = '1';

            //searchIcon.attr("src", "./assets/search-black.svg");

            searchIcon.setAttribute('src', "./assets/search-black.svg");

           // modeSwitchIcon.attr("src", "./assets/sleep.png");

            modeSwitchIcon.setAttribute('src', "./assets/sleep.png");
        }, 300);


        console.log("light");
        isDarkMode = !isDarkMode;
    }
    console.log("click")
});
