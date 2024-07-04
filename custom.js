document.addEventListener("DOMContentLoaded", function () {
  // * for active link
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", function () {
      document.querySelectorAll("nav ul li a").forEach((link) => {
        link.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

  // * mobile-menu

  const hamburgger = document.querySelector(".hamburgger");
  const mobilemenu = document.querySelector(".navigation");
  const icons = document.querySelectorAll(".hamburgger i");

  hamburgger.addEventListener("click", function () {
    const isVisible = mobilemenu.getAttribute("data-visible");
    if (isVisible === "true") {
      mobilemenu.setAttribute("data-visible", "false");
      icons[0].setAttribute("data-visible", "true");
      icons[1].setAttribute("data-visible", "false");
    } else {
      mobilemenu.setAttribute("data-visible", "true");
      icons[0].setAttribute("data-visible", "false");
      icons[1].setAttribute("data-visible", "true");
    }
  });

  //*scrolling
  window.addEventListener('scroll', function () {
    var nav = document.querySelector('.site-navigation');
    if (window.scrollY >= 50) {
      if (!nav.classList.contains('nav')) {
        nav.classList.add('nav');
      }
    } else {
      if (nav.classList.contains('nav')) {
        nav.classList.remove('nav');
      }
    }
  });




  const banner = document.querySelectorAll(".banner");
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");
  let currentIndex = 0;

  // Show the first banner initially
  banner[currentIndex].classList.add("active");

  function showBanner(index) {
    banner.forEach(banner => banner.classList.remove("active"));
    banner[index].classList.add("active");
  }

  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % banner.length;
    showBanner(currentIndex);
  });

  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + banner.length) % banner.length;
    showBanner(currentIndex);
  });


});