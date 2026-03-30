document.addEventListener("DOMContentLoaded", function () {
    const triggers = document.querySelectorAll('.explore-flex');

    
    function animateNumbers(stat) {
        const target = parseInt(stat.getAttribute('data-target'));
        if (!target) return;
        
        const duration = 1500; 
        const step = target / (duration / 16); 
        let current = 0;
        
        const updateNumber = () => {
            current += step;
            if (current < target) {
                stat.innerText = Math.ceil(current);
                requestAnimationFrame(updateNumber); 
            } else {
                stat.innerText = target; 
            }
        };
        updateNumber();
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers(entry.target);
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-num').forEach(num => observer.observe(num));

    triggers.forEach((trigger) => {
    
        let contentDiv = null;
        if (trigger.closest('.explore-shape')) {
            contentDiv = document.querySelector('.toggle-content');
        } else if (trigger.closest('.bottom-section')) {
            contentDiv = trigger.closest('.bottom-section').nextElementSibling;
        }

        if (contentDiv) {
            contentDiv.style.maxHeight = contentDiv.scrollHeight + 100 + "px";
            contentDiv.classList.add('show-content');
        }

        trigger.addEventListener('click', function () {
            const arrow = this.querySelector('.custom-arrow');
            
            if (contentDiv && contentDiv.classList.contains('toggle-content')) {
                arrow.classList.toggle('rotate-arrow');

                if (contentDiv.classList.contains('show-content')) {
                    contentDiv.style.maxHeight = "0";
                    contentDiv.style.opacity = "0";
                    contentDiv.classList.remove('show-content');
                } else {
                    contentDiv.style.maxHeight = contentDiv.scrollHeight + 100 + "px";
                    contentDiv.style.opacity = "1";
                    contentDiv.classList.add('show-content');
                }
            }
        });
    });
});