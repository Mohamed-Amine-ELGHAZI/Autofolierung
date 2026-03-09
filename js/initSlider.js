// 1. Array dyal les données
const slidesData = [
    {
        img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&q=80&w=1200",
        title: "FAHRZEUG FOLIEREN",
        tag: "LAMBORGHINI"
    },
    {
        img: "https://wrapping.md-exclusive-cardesign.com/wp-content/uploads/2021/08/Porsche-718-Cayman-GT4-Lackschutzfolierung-mit-XPEL-Ultimate-Plus-PPF-Teilfolierung-MD-exclusive-cardesign-Autofolierung-NRW-16.jpg",
        title: "AUTOFOLIERUNG",
        tag: "PORSCHE"
    },
    {
        img: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=1200",
        title: "WERBETECHNIK",
        tag: "TESLA"
    },
    {
        img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&q=80&w=1200",
        title: "SCHEIBENTÖNUNG",
        tag: "MERCEDES"
    }
];

let currentIndex = 0;
const track = document.getElementById('sliderTrack');
const dotsContainer = document.getElementById('dotsContainer');
const currentCount = document.getElementById('currentCount');
const totalCount = document.getElementById('totalCount');
const sliderContainer = document.getElementById('sliderContainer'); // Zdnaha bash n-capturiw swipe
let autoPlayInterval;

// 2. Fonction li katsawb l'HTML w t7to fl paja
function initSlider() {
    let slidesHtml = '';
    let dotsHtml = '';

    slidesData.forEach((slide, index) => {
        // n9addo tsawer
        slidesHtml += `
            <div class="slide ${index === 0 ? 'active' : ''}">
                <img src="${slide.img}" alt="${slide.tag}">
                <div class="slide-info">
                    <div class="slide-title">${slide.title}</div>
                    <div class="slide-tag">${slide.tag}</div>
                </div>
            </div>
        `;
        // n9addo n9ati ltht
        dotsHtml += `<div class="dot ${index === 0 ? 'active' : ''}" onclick="goToSlide(${index})"></div>`;
    });

    track.innerHTML = slidesHtml;
    dotsContainer.innerHTML = dotsHtml;
    
    // Nktbo total dyal tsawer
    totalCount.innerText = ` / 0${slidesData.length}`;
    
    updateSliderPosition();
    startAutoPlay(); // Kanbdaew timer dyal t9lab oumatik
}

// 3. Fonction li kat7rek slider l index jdid
function updateSliderPosition() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    // Update active class
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentIndex);
        if(dots[index]) dots[index].classList.toggle('active', index === currentIndex);
    });

    // ila makansh slides n7bsso
    if(slides.length === 0) return;
    
    const slideWidth = slides[0].offsetWidth;
    const gap = 20; 
    const containerWidth = sliderContainer.offsetWidth;
    
    // Formula bash tji tswira dima fl weste
    const centerOffset = (containerWidth - slideWidth) / 2;
    const translation = -(currentIndex * (slideWidth + gap)) + centerOffset;
    track.style.transform = `translateX(${translation}px)`;

    // Update Counter (ex: 01, 02...)
    if(currentCount) currentCount.innerText = `0${currentIndex + 1}`;
}

// 4. Fonction dyal l'as'hom (Arrows)
function moveSlide(direction) {
    currentIndex += direction;
    
    // Idy daz lkhr y3awd mn lawl, wila rj3 9bl lawl ymchi lkhr
    if (currentIndex >= slidesData.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = slidesData.length - 1;
    
    updateSliderPosition();
    resetAutoPlay(); // n-zero l'we9t bash maytqlebsh bzera yalah klika l'user
}

// 5. Fonction dyal n9ati (Dots)
function goToSlide(index) {
    currentIndex = index;
    updateSliderPosition();
    resetAutoPlay();
}

// 6. AUTO-PLAY 
function startAutoPlay() {
    autoPlayInterval = setInterval(() => {
        moveSlide(1); 
    }, 6000); 
}

function resetAutoPlay() {
    clearInterval(autoPlayInterval); 
    startAutoPlay();
}

// =========================================
// 7. SWIPE EVENTS (Jdid) - T7rak b sbe3 fl Mobile
// =========================================
let touchStartX = 0;
let touchEndX = 0;

sliderContainer.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

sliderContainer.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50; // Ch7al khasso yjer bash t7seb swipa (50px)
    
    if (touchEndX < touchStartX - swipeThreshold) {
        // Swipa lissar (Jerr lissar -> ychouf tswira li mn be3d)
        moveSlide(1);
    }
    
    if (touchEndX > touchStartX + swipeThreshold) {
        // Swipa limen (Jerr limen -> yrje3 l tswira li 9bel)
        moveSlide(-1);
    }
}

// Window resize event bash n-caluliw chhal khaso yt7rak 3la hsab l'ecran
window.addEventListener('resize', updateSliderPosition);

// Lancéew code!
initSlider();