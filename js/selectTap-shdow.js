    function selectTab(el, percent, tintValue) {
            document.querySelectorAll('.tab-group').forEach(g => {
                g.classList.remove('active');
                g.querySelector('.tab-bg').setAttribute('fill', '#000000');
            });

            el.classList.add('active');
            el.querySelector('.tab-bg').setAttribute('fill', '#df8c18');

            document.getElementById('percentLabel').textContent = percent;

            const carImg = document.getElementById('carImage');
            const brightness = 1 - tintValue * 0.6;
            carImg.style.filter = `brightness(${brightness})`;
        }