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
            }
        });
    });
});