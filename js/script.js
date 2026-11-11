document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       REVEAL ANIMATIONS
       ===================================================== */

    const revealElements = document.querySelectorAll(".reveal");

    // Проверяем поддержку IntersectionObserver
    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("is-visible");

                    observer.unobserve(entry.target);

                }

            });

        }, {
            threshold: 0.12,
            rootMargin: "0px 0px -30px 0px"
        });


        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    } else {

        // Fallback для старых браузеров
        revealElements.forEach(element => {
            element.classList.add("is-visible");
        });

    }


    /* =====================================================
       REDUCED MOTION
       ===================================================== */

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    if (prefersReducedMotion.matches) {

        revealElements.forEach(element => {
            element.classList.add("is-visible");
        });

    }


    /* =====================================================
       CURRENT YEAR
       ===================================================== */

    // При необходимости можно автоматически менять год
    // в футере, заменив текст на элемент с id="copyrightYear".

    const copyrightYear = document.getElementById("copyrightYear");

    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }


});