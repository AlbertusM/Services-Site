document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

const btn = document.getElementById("goBtn");
    btn.addEventListener("click", () => {
      document.body.classList.add("slide-out");
      setTimeout(() => {
        window.location.href = "portfolio.html";
      }, 600); // matches transition duration
    });