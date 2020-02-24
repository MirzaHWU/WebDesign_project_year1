let userStartScrolling = new  Boolean();;

window.addEventListener('scroll', () => {

    if (userStartScrolling) {
       // navBar.animate({ 'opacity': "0" }, 300);

        navBar.style.transition = 'opacity 0.3s';
        navBar.style.opacity = '0';

       // headerBlurDark.animate({ 'opacity': "0" }, 300);

       headerBlurDark.style.transition = 'opacity 0.3s';
       headerBlurDark.style.opacity = '0';

       // headerBlurLight.animate({ 'opacity': "0" }, 300);

        headerBlurLight.style.transition = 'opacity 0.3s';
        headerBlurLight.style.opacity = '0';

        userStartScrolling = false;

        
    } else {

        setTimeout(() => {
            //navBar.animate({ 'opacity': "1" }, 300);

        navBar.style.transition = 'opacity 0.3s';
        navBar.style.opacity = '1';

        if(isDarkMode) {
            //headerBlurDark.animate({ 'opacity': "1" }, 300);

            headerBlurDark.style.transition = 'opacity 0.3s';
            headerBlurDark.style.opacity = '1';
        } else {
            //headerBlurLight.animate({ 'opacity': "1" }, 300);

            headerBlurLight.style.transition = 'opacity 0.3s';
            headerBlurLight.style.opacity = '1';
        }
        
        userStartScrolling = true;
        }, 500);

        
    }
});