(function (){
    const CloseBanners = document.querySelectorAll(".c-banner__close");
    CloseBanners.forEach( CloseBanner => {
         CloseBanner.addEventListener('click', event => {
            const banner = event.target.parentNode;
            banner.classList.add("collapsed"); 

            banner.addEventListener("transitionend", function(event){
                if(event.target === this){
                    this.remove();
                }
            })

            
         })
    })
})();