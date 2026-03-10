
document.addEventListener("DOMContentLoaded", function () {
    
    let tabs = document.querySelectorAll(".location-tabs .tab-item");
    let mapIframe = document.getElementById("map-iframe"); 

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {

            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
            
  
            let cityName = this.innerText.trim(); 

            if (cityName === "FRANKFURT AM MAIN") {
                mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163720.83687532038!2d8.801373832524604!3d50.12113817041018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f477096c5%3A0x422435029b0c600!2z2YHYsdin2YbZg9mB2YjYsdiq2Iwg2KPZhNmF2KfZhtmK2Kc!5e0!3m2!1sar!2sma!4v1773112143828!5m2!1sar!2sma"
            } else if (cityName === "STUTTGART") {
                mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d168265.38161569374!2d9.342024075711594!3d48.7790916631318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799db34c1ad8fd3%3A0x79d5c11c7791cfe4!2z2LTYqtmI2KrYutin2LHYqtiMINij2YTZhdin2YbZitin!5e0!3m2!1sar!2sma!4v1773110244890!5m2!1sar!2sma";
                
            } else if (cityName === "ESSEN") {
                mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159164.5567716258!2d7.180806691690971!3d51.44078191516325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c2b796abf639%3A0x6a00e111a4ad2c9d!2z2KXYs9mG2Iwg2KPZhNmF2KfZhtmK2Kc!5e0!3m2!1sar!2sma!4v1773110328923!5m2!1sar!2sma" ; 
            } else if (cityName === "DORTMUND") {
                mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158931.0011875914!2d7.635050960778061!3d51.507768929406794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b91760bff07a11%3A0x427f28131548750!2z2K_ZiNix2KrZhdmI2YbYr9iMINij2YTZhdin2YbZitin!5e0!3m2!1sar!2sma!4v1773114623655!5m2!1sar!2sma"
            }
        });
    });

});