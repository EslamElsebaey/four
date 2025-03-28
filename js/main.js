window.addEventListener("load", function () {
  // Preloader
  let preloader = document.querySelector(".preloader");
  preloader.style.opacity = "1";
  preloader.style.transition = "opacity 0.5s ease-out";

  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }, 100);

  document.body.classList.remove("overflowHidden");
});

document.addEventListener("DOMContentLoaded", function () {
  // Swipers

  // Projects Workflow Swiper
  const ProjectsWorkflowSwiper = new Swiper(".projects-workflow .swiper", {
    loop: true,
    autoplay: true,
    draggable: true,
    speed: 800,
    pagination: {
      el: ".projects-workflow .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".projects-workflow .swiper-button-next",
      prevEl: ".projects-workflow .swiper-button-prev",
    },

    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });

  const TechSwiper = new Swiper(".vr-tech .swiper", {
    loop: true,
    autoplay: true,
    draggable: true,
    speed: 800,
    spaceBetween: 30,
    centeredSlides: true,

    pagination: {
      el: ".vr-tech .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".vr-tech .swiper-button-next",
      prevEl: ".vr-tech .swiper-button-prev",
    },

    breakpoints: {
      350: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 2.8,
      },
    },
  });

  // Projects Workflow Swiper
  const clientsSwiper = new Swiper(".clients .swiper", {
    loop: true,
    autoplay: true,
    draggable: true,
    speed: 800,
    pagination: {
      el: ".clients .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      350: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 7,
        spaceBetween: 0,
      },
    },
  });

  //**************************************************************************************************
  //  Mobile Menu

  document.querySelector(".openNavBtn").addEventListener("click", function () {
    document.querySelector(".navigation").classList.add("show-navigation");
    document.body.classList.add("overflowHidden");
  });

  document.querySelector(".closeNavBtn").addEventListener("click", function () {
    document.querySelector(".navigation").classList.remove("show-navigation");
    document.body.classList.remove("overflowHidden");
  });

  //**************************************************************************************************

  // Change Mode

  let darkmode = localStorage.getItem("darkmode");
  const changeModeBtn = document.getElementById("changeModeBtn");

  const enableDarkmode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkmode", "active");
    changeModeBtn.querySelector(".icon").classList.add("fa-moon");
    changeModeBtn.querySelector(".icon").classList.add("text-black");
    changeModeBtn.querySelector(".icon").classList.remove("fa-sun-bright");
  };

  const disableDarkmode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkmode", null);
    changeModeBtn.querySelector(".icon").classList.remove("fa-moon");
    changeModeBtn.querySelector(".icon").classList.remove("text-black");
    changeModeBtn.querySelector(".icon").classList.add("fa-sun-bright");
  };

  if (darkmode === "active") enableDarkmode();

  changeModeBtn.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode");
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
  });
  //**************************************************************************************************

  // To Top Button

  document.querySelector(".toTopBtn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
