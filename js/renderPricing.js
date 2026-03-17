
        const carPricingData = [
            { category: "KLEINWAGEN", doors: "3-Türer", image: "image/card/image.png", description: "Alle Fahrzeuge<br>mit 3 Scheiben", price: "120 €", oldPrice: "180 €" },
            { category: "KLEINWAGEN", doors: "5-Türer", image: "image/card/pattern-9.png", description: "mit 3 Scheiben<br>+ Dreiecksfenster", price: "250 €", oldPrice: "160 €" },
            { category: "KOMBI", doors: "5-Türer", image: "image/card/pattern-20.png", description: "Alle Fahrzeuge<br>mit 7 Scheiben", price: "220 €", oldPrice: "350 €" },
            { category: "LIMOUSINE", doors: "5-Türer", image: "image/card/pattern-21.png", description: "Alle Fahrzeuge<br>mit 5 Scheiben", price: "220 €", oldPrice: "350 €" },
            { category: "SUV", doors: "5-Türer", image: "image/card/pattern-22.png", description: "Alle Fahrzeuge<br>mit 7 Scheiben", price: "220 €", oldPrice: "350 €" },
            { category: "KLEINBUS", doors: "5-Türer", image: "image/card/pattern-23.png", description: "mit 3 Scheiben<br>+ Dreiecksfenster", price: "300 €", oldPrice: "450 €" },
            { category: "KLEINTRANSPORTER", doors: "5-Türer", image: "image/card/pattern-24.png", description: "Alle Fahrzeuge<br>mit 7 Scheiben", price: "ab 240 €", oldPrice: "" },
            { category: "COUPÉ", doors: "2-Türer", image: "image/card/pattern-25.png", description: "Alle Fahrzeuge<br>mit 5 Scheiben", price: "ab 200 €", oldPrice: "" },
            { category: "COUPÉ", doors: "2-Türer", image: "image/card/image.png", description: "Alle Fahrzeuge<br>mit 3 Scheiben", price: "240 €", oldPrice: "" }
        ];

        let currentSlide = 0; 

        function renderPricing() {
            const grid = document.getElementById('dynamic-pricing-grid');
            let html = carPricingData.map((car, index) => `
                <div class="price-card" id="card-${index}">
                    <div class="card-top-tab"><span>${car.category}</span></div>
                    <div class="card-body">
                        <p class="card-doors">${car.doors}</p>
                        <div class="card-divider"></div>
                        <img class="card-car-img" src="${car.image}" alt="${car.category}" 
                             onerror="this.src='https://placehold.co/160x70/1e1e1e/888?text=Auto'">
                        <p class="card-desc">${car.description}</p>
                        <div class="card-price">${car.price}</div>
                        <div class="card-old-price">${car.oldPrice || '&nbsp;'}</div>
                        <a href="#" class="card-cta">Kostenlose Beratung</a>
                    </div>
                    <div class="card-bottom-tab"><span>Scheibentönung</span></div>
                </div>
            `).join('');

            
            html += `
                <div class="slider-controls2">
                    <button class="slider-btn" onclick="prevSlide()">&#8592;</button>
                    <button class="slider-btn" onclick="nextSlide()">&#8594;</button>
                </div>

                <div class="pricing-cta-banner">
                    <div class="banner-text">
                        <h3>SCHEIBEN<br>TÖNEN<br><span>IN FRANKFURT</span></h3>
                    </div>
                    <img src="image/pattern-2.png" alt="Scheiben Tönen Frankfurt">
                </div>
            `;

            grid.innerHTML = html;
            updateSlider(); 
        }

        
        function updateSlider() {
            const cards = document.querySelectorAll('.price-card');
            const isMobile = window.innerWidth <= 900;

            cards.forEach((card, index) => {
                if (isMobile) {
                   
                    if (index === currentSlide) {
                        card.style.display = 'flex';
                        card.style.animation = 'fadeSlideIn 0.4s ease forwards';
                    } else {
                        card.style.display = 'none';
                    }
                } else {
                   
                    card.style.display = 'flex';
                    card.style.animation = 'none';
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % carPricingData.length;
            updateSlider();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + carPricingData.length) % carPricingData.length;
            updateSlider();
        }

   
        window.addEventListener('resize', updateSlider);
        
       
        document.addEventListener('DOMContentLoaded', renderPricing);