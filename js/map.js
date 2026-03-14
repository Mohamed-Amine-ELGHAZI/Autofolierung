document.addEventListener("DOMContentLoaded", function () {
  let tabs = document.querySelectorAll(".location-tabs .tab-item");
  let mapIframe = document.getElementById("map-iframe");

  const cityMaps = {
    "FRANKFURT AM MAIN":
      "https://maps.google.com/maps?q=Hanauer+Landstra%C3%9Fe+505a,+60386+Frankfurt&t=&z=13&ie=UTF8&iwloc=&output=embed",
    STUTTGART:
      "https://maps.google.com/maps?q=Stuttgart&t=&z=13&ie=UTF8&iwloc=&output=embed",
    ESSEN:
      "https://maps.google.com/maps?q=Essen&t=&z=13&ie=UTF8&iwloc=&output=embed",
    DORTMUND:
      "https://maps.google.com/maps?q=Dortmund&t=&z=13&ie=UTF8&iwloc=&output=embed",
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));

      this.classList.add("active");

      let cityName = this.dataset.city;

      if (cityMaps[cityName]) {
        let separator = cityMaps[cityName].includes("?") ? "&" : "?";
        mapIframe.src = cityMaps[cityName] + separator + "hl=de";
      }
    });
  });
});
