document.addEventListener("DOMContentLoaded", function () {

    const allButtons = document.querySelectorAll('.trigger-btn');

    allButtons.forEach(btn => {
        btn.addEventListener('click', function () {

            const arrow = this.querySelector('.custom-arrow');
            if (arrow) arrow.classList.toggle('rotate-arrow');

        
            let sectionToToggle = null;
            let currentParent = this.parentElement;

            while (currentParent && currentParent.tagName !== 'BODY') {
                let next = currentParent.nextElementSibling;

                while (next) {
                    if (next.classList.contains('toggle-content')) {
                        sectionToToggle = next;
                        break;
                    }
                    next = next.nextElementSibling;
                }

                if (sectionToToggle) break;
                currentParent = currentParent.parentElement;
            }

            if (sectionToToggle) {
                sectionToToggle.classList.toggle('show-content');

                if (sectionToToggle.classList.contains("show-content")) {
                  
                    setTimeout(() => {
                        sectionToToggle.style.maxHeight = sectionToToggle.scrollHeight + "px";
                    }, 200);

               
                    const stats = sectionToToggle.querySelectorAll(".stat-num");
                    stats.forEach(stat => {
                        if (stat.dataset.counted) return; 
                        stat.dataset.counted = "true";

                        const target = +stat.dataset.target;
                        stat.innerText = "0";
                        let current = 0;
                        const increment = Math.ceil(target / 200); 

                        const updateCounter = () => {
                            current += increment;
                            if (current > target) current = target;
                            stat.innerText = current;
                            if (current < target) requestAnimationFrame(updateCounter);
                        }

                        updateCounter();
                    });

                } else {
                    sectionToToggle.style.maxHeight = "0px";
                }
            }

        });
    });
});