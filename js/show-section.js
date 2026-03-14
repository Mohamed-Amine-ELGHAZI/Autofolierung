document.addEventListener("DOMContentLoaded", function () {
    const triggers = document.querySelectorAll('.explore-flex');

    function animateNumbers(contentDiv) {
        const statNums = contentDiv.querySelectorAll('.stat-num');
        if (statNums.length === 0) return;

        statNums.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target')); 
            const duration = 1500; 
            const step = target / (duration / 16); 
            let current = 0;

            
            stat.innerText = '0';

            
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
        });
    }

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', function () {
            const arrow = this.querySelector('.custom-arrow');
            let contentDiv = null;

            if (this.closest('.explore-shape')) {
                contentDiv = document.querySelector('.toggle-content');
            } else if (this.closest('.bottom-section')) {
                contentDiv = this.closest('.bottom-section').nextElementSibling;
            }

            if (contentDiv && contentDiv.classList.contains('toggle-content')) {
                
                arrow.classList.toggle('rotate-arrow');

                if (contentDiv.classList.contains('show-content')) {
                    contentDiv.classList.remove('show-content');
                    contentDiv.style.maxHeight = null; 
                } else {
                    
                    contentDiv.classList.add('show-content');
                    contentDiv.style.maxHeight = contentDiv.scrollHeight + 100 + "px"; 
                    animateNumbers(contentDiv);
                }
            }
        });
    });
});
