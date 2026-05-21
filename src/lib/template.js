// Port of assets/js/main.js into React-friendly init/cleanup pair.
// Global plugin libs (jQuery, GSAP, ScrollTrigger, SplitText, Swiper, AOS,
// lightGallery, Masonry) are loaded via <script> tags in index.html.

const g = () => window;

let globalHandlersBound = false;
let perPageSwipers = [];

function $$() {
  return g().jQuery;
}

export function bindGlobalHandlers() {
  if (globalHandlersBound) return;
  const $ = $$();
  if (!$) return;
  globalHandlersBound = true;

  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  // Mobile Menu — append toggles + delegated handlers
  $(".cs_nav").each(function () {
    if ($(this).find(".cs_munu_toggle").length === 0) {
      $(this).append('<span class="cs_munu_toggle"><span></span></span>');
    }
  });

  $(document).on("click", ".cs_munu_toggle", function () {
    $(this).toggleClass("cs_toggle_active").siblings(".cs_nav_list").slideToggle();
  });

  $(document).on("click", ".cs_icon_btn", function () {
    $(".cs_side_header").addClass("active");
  });

  $(document).on("click", ".cs_close, .cs_side_header_overlay", function () {
    $(".cs_side_header").removeClass("active");
  });

  // Dropdown toggles on click for nested menu items (mobile)
  $(document).on("click", ".menu-item-has-children", function (e) {
    // Avoid toggling when clicking the inner <a> with real href on desktop
    const $this = $(this);
    $(".menu-item-has-children").not($this).removeClass("active");
    $this.toggleClass("active");
  });

  // Sticky header
  let lastScrollTop = 0;
  $(window).on("scroll.constrSticky", function () {
    const $header = $(".cs_sticky_header");
    if (!$header.length) return;
    const headerHeight = $header.outerHeight() + 30;
    const windowTop = $(window).scrollTop();
    if (windowTop >= headerHeight) {
      $header.addClass("cs_gescout_sticky");
    } else {
      $header.removeClass("cs_gescout_sticky cs_gescout_show");
    }
    if ($header.hasClass("cs_gescout_sticky")) {
      if (windowTop < lastScrollTop) {
        $header.addClass("cs_gescout_show");
      } else {
        $header.removeClass("cs_gescout_show");
      }
    }
    lastScrollTop = windowTop;
  });

  // Modal video
  $(document).on("click", ".cs_video_open", function (e) {
    e.preventDefault();
    let video = $(this).attr("href");
    video = video.split("?v=")[1].trim();
    $(".cs_video_popup_container iframe").attr(
      "src",
      `https://www.youtube.com/embed/${video}`,
    );
    $(".cs_video_popup").addClass("active");
  });
  $(document).on(
    "click",
    ".cs_video_popup_close, .cs_video_popup_layer",
    function (e) {
      $(".cs_video_popup").removeClass("active");
      $("html").removeClass("overflow-hidden");
      $(".cs_video_popup_container iframe").attr("src", "about:blank");
      e.preventDefault();
    },
  );

  // Accordion
  $(document).on("click", ".cs_accordian .cs_accordian_header", function () {
    const $item = $(this).parent();
    $item.siblings().find(".cs_accordian_body").slideUp();
    $item.siblings().find(".cs_accordian_header").removeClass("active cs_icon");
    $(this).toggleClass("active cs_icon");
    $(this).next(".cs_accordian_body").slideToggle();
  });

  // Scroll-up button click
  $(document).on("click", ".cs_scrollup", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 0);
  });

  // Scroll-up visibility + sticky section + parallax on scroll
  $(window).on("scroll.constrCommon resize.constrCommon", function () {
    const scroll = $(window).scrollTop();
    if (scroll >= 350) {
      $(".cs_scrollup").addClass("cs_scrollup_show");
    } else {
      $(".cs_scrollup").removeClass("cs_scrollup_show");
    }
    requestAnimationFrame(updateParallax);
    Sticky_sec();
  });

  // Card hover delegated on document for dynamic content
  $(document).on("mousemove", ".cs-hover-card-anim", function (e) {
    const magic = this.querySelector(".magic");
    if (!magic) return;
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    magic.style.left = `${x - magic.offsetWidth / 2}px`;
    magic.style.top = `${y - magic.offsetHeight / 2}px`;
  });
  $(document).on("mouseout", ".cs-hover-card-anim", function () {
    const magic = this.querySelector(".magic");
    if (magic) {
      magic.style.left = "0%";
      magic.style.top = "0%";
    }
  });

  // GSAP global config (one time)
  if (g().gsap && g().ScrollTrigger) {
    g().gsap.registerPlugin(g().ScrollTrigger, g().ScrollToPlugin);
    g().gsap.config({ nullTargetWarn: false });
  }
}

function updateParallax() {
  const $ = $$();
  if (!$) return;
  const $parallax = $(".background-parallax");
  const $image = $(".parallax-image img");
  const windowWidth = $(window).width();

  if (windowWidth <= 1024) return;
  if ($parallax.length === 0 || $image.length === 0) return;

  const scroll = $(window).scrollTop();
  const windowHeight = $(window).height();

  $parallax.each(function () {
    const $this = $(this);
    const offset = $this.offset().top;
    const height = $this.outerHeight();
    if (scroll + windowHeight > offset && scroll < offset + height) {
      const translate = (scroll - offset) * 0.3;
      $this.find(".parallax-image").css("transform", `translateY(${translate}px)`);
    }
  });

  const imgWidth = $image.width();
  const imgHeight = $image.height();
  if (windowWidth / windowHeight > imgWidth / imgHeight) {
    $image.addClass("too-wide").removeClass("too-tall");
  } else {
    $image.addClass("too-tall").removeClass("too-wide");
  }
}

function Sticky_sec() {
  const $ = $$();
  if (!$) return;
  const mq = window.matchMedia ? window.matchMedia("(min-width: 1400px)") : null;
  const rightChild = $(".sticky-box-child");
  const stickyWrap = $(".stickysec-wrap");
  const scrollingContent = $(".scolling-content");

  if (!rightChild.length || !stickyWrap.length || !scrollingContent.length) return;

  rightChild.removeClass("sticky-section absolute-position fixed-position");

  if (mq && mq.matches) {
    rightChild.addClass("sticky-section");
    const scroll = $(window).scrollTop();
    const topContent = stickyWrap.offset().top - 25;
    const sectionHeight = scrollingContent.outerHeight();
    const rightHeight = rightChild.outerHeight();
    const bottomContent = topContent + sectionHeight - rightHeight - 45;

    if (scroll > topContent && scroll < bottomContent) {
      rightChild
        .removeClass("absolute-position")
        .addClass("fixed-position")
        .css({ top: "25px", bottom: "auto" });
    } else if (scroll >= bottomContent) {
      rightChild
        .removeClass("fixed-position")
        .addClass("absolute-position")
        .css({ top: "auto", bottom: "45px" });
    } else {
      rightChild
        .removeClass("fixed-position absolute-position")
        .css({ top: "auto", bottom: "auto" });
    }
  } else {
    rightChild
      .removeClass("sticky-section absolute-position fixed-position")
      .css({ top: "auto", bottom: "auto" });
  }
}

function initSwipers() {
  const $ = $$();
  const Swiper = g().Swiper;
  const gsap = g().gsap;
  const SplitText = g().SplitText;
  if (!$ || !Swiper) return;

  // Hero Slider
  if ($(".hero-slider").length) {
    const heroSliderSwiper = new Swiper(".hero-slider", {
      speed: 1000,
      loop: true,
      autoplay: { delay: 6000, disableOnInteraction: false },
      navigation: {
        nextEl: ".hero-swiper-button-next",
        prevEl: ".hero-swiper-button-prev",
      },
      on: {
        init: function () {
          animateSlide(document.querySelector(".swiper-slide-active"));
        },
        slideChangeTransitionStart: function () {
          gsap.set(".swiper-slide .constr-splite", { clearProps: "all" });
          gsap.set(".swiper-slide .hero-subtitle", { clearProps: "all" });
          gsap.set(".swiper-slide .hero-backdrop-text", { clearProps: "all" });
          animateSlide(document.querySelector(".swiper-slide-active"));
        },
      },
    });
    perPageSwipers.push(heroSliderSwiper);

    function animateSlide(activeSlide) {
      if (!activeSlide) return;
      const activeSlideContent = activeSlide.querySelector(".constr-splite");
      const activeSlideContentBack = activeSlide.querySelector(".hero-backdrop-text");
      const activeSlideContentSecond = activeSlide.querySelector(".hero-second-splite");
      const activeSlideSubtitle = activeSlide.querySelector(".hero-subtitle");
      const activeButtons = activeSlide.querySelectorAll(".cs-couple-btn");

      if (activeSlideContent && SplitText) {
        const childSplit = new SplitText(activeSlideContent, {
          type: "lines, words",
          wordsClass: "split-child",
        });
        new SplitText(activeSlideContent, { linesClass: "split-parent" });
        gsap.from(childSplit.words, {
          duration: 0.8,
          yPercent: 50,
          rotation: 10,
          opacity: 0,
          ease: "power4.out",
          stagger: 0.05,
        });
      }
      if (activeSlideContentBack && SplitText) {
        const childSplitBack = new SplitText(activeSlideContentBack, {
          type: "lines, words",
          wordsClass: "split-child",
        });
        new SplitText(activeSlideContentBack, { linesClass: "split-parent" });
        gsap.from(childSplitBack.words, {
          duration: 1.1,
          opacity: 0,
          y: 100,
          ease: "power3.out",
        });
      }
      if (activeSlideContentSecond && SplitText) {
        const childSplitSecond = new SplitText(activeSlideContentSecond, {
          type: "lines, words",
          wordsClass: "split-child",
        });
        new SplitText(activeSlideContentSecond, { linesClass: "split-parent" });
        gsap.from(childSplitSecond.words, {
          duration: 1.5,
          opacity: 0,
          y: 100,
          ease: "power3.out",
        });
      }
      if (activeSlideSubtitle) {
        gsap.from(activeSlideSubtitle, {
          duration: 1,
          opacity: 0,
          y: 100,
          scale: 1.2,
          ease: "power3.out",
        });
      }
      if (activeButtons.length) {
        gsap.from(activeButtons, {
          duration: 0.8,
          x: 300,
          opacity: 0,
          scale: 1.5,
          ease: "power4.out",
          stagger: 0.2,
        });
      }
    }
  }

  if ($(".common-slider").length) {
    perPageSwipers.push(
      new Swiper(".common-slider", {
        effect: "fade",
        autoplay: { delay: 5000, disableOnInteraction: false },
        scrollbar: { el: ".swiper-scrollbar", hide: false },
        navigation: {
          nextEl: ".cs-ps-swiper-btn-next",
          prevEl: ".cs-ps-swiper-btn-prev",
        },
      }),
    );
  }

  if ($(".timeline-slider").length) {
    perPageSwipers.push(
      new Swiper(".timeline-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        pagination: {
          el: ".timeline-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            const dates = ["1996", "2000", "2004", "2008", "2012", "2016", "2020", "2024"];
            return `<span class="${className}"><span>${dates[index]}</span></span>`;
          },
        },
        on: {
          slideChange: function () {
            const progress = ((this.activeIndex + 1) / this.slides.length) * 100;
            const bar = document.querySelector(".timeline-progress-bar");
            if (bar) bar.style.width = `${progress}%`;
          },
        },
      }),
    );
  }

  if ($(".home1-testi-slider1").length) {
    perPageSwipers.push(
      new Swiper(".home1-testi-slider1", {
        speed: 1000,
        parallax: true,
        loop: true,
        autoplay: { delay: 5000 },
        pagination: { el: ".testi-pagination", clickable: true },
        on: {
          slideChangeTransitionStart: function () {
            gsap.set(".swiper-slide .testi-content", { clearProps: "all" });
            gsap.set(".swiper-slide .testi-user", { clearProps: "all" });
            gsap.set(".swiper-slide .testi-user img", { clearProps: "all" });

            const activeSlideContentBack = document.querySelector(
              ".swiper-slide-active .testi-user",
            );
            const activeSlideContentSecond = document.querySelector(
              ".swiper-slide-active .testi-user img",
            );
            const activeSlideMainText = document.querySelector(
              ".swiper-slide-active .testi-content",
            );
            const activeButtons = document.querySelectorAll(
              ".swiper-slide-active .testi-user img",
            );

            if (activeSlideContentBack && SplitText) {
              const childSplitBack = new SplitText(activeSlideContentBack, {
                type: "lines, words",
                wordsClass: "split-child",
              });
              new SplitText(activeSlideContentBack, { linesClass: "split-parent" });
              gsap.from(childSplitBack.words, {
                duration: 1.1,
                opacity: 0,
                y: 100,
                ease: "power3.out",
              });
            }
            if (activeSlideContentSecond && SplitText) {
              const childSplitSecond = new SplitText(activeSlideContentSecond, {
                type: "lines, words",
                wordsClass: "split-child",
              });
              new SplitText(activeSlideContentSecond, { linesClass: "split-parent" });
              gsap.from(childSplitSecond.words, {
                duration: 1.5,
                opacity: 0,
                y: 100,
                ease: "power3.out",
              });
            }
            if (activeSlideMainText) {
              gsap.from(activeSlideMainText, {
                duration: 1,
                opacity: 0,
                y: 100,
                scale: 1.2,
                ease: "power3.out",
              });
            }
            if (activeButtons.length) {
              gsap.from(activeButtons, {
                duration: 0.8,
                x: 300,
                opacity: 0,
                scale: 1.5,
                ease: "power4.out",
                stagger: 0.2,
              });
            }
          },
        },
      }),
    );
  }

  if ($(".service-slider").length) {
    perPageSwipers.push(
      new Swiper(".service-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: { el: ".srv-swiper-pagination", clickable: true },
        breakpoints: {
          1200: { slidesPerView: 3, spaceBetween: 30 },
          992: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          576: { slidesPerView: 1, spaceBetween: 10 },
          0: { slidesPerView: 1, spaceBetween: 0 },
        },
      }),
    );
  }

  if ($(".clients-slider").length) {
    perPageSwipers.push(
      new Swiper(".clients-slider", {
        slidesPerView: 5,
        spaceBetween: 30,
        breakpoints: {
          1200: { slidesPerView: 5, spaceBetween: 30 },
          992: { slidesPerView: 4, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          576: { slidesPerView: 2, spaceBetween: 10 },
          300: { slidesPerView: 1, spaceBetween: 0 },
          0: { slidesPerView: 1, spaceBetween: 0 },
        },
      }),
    );
  }
}

function initFunfactCounter() {
  const gsap = g().gsap;
  if (!gsap) return;
  const count_number = gsap.utils.toArray(".cs_funfact");
  const count_id = gsap.utils.toArray(".amin_auto_count");
  if (!count_number.length && !count_id.length) return;

  count_id.forEach((num) => {
    gsap.from(num, {
      scrollTrigger: { trigger: num, start: "top center+=200", markers: false },
      delay: 0,
      innerText: 0,
      duration: 3,
      snap: { innerText: 1 },
      onUpdate: function () {
        num.innerText = Math.floor(num.innerText);
      },
    });
  });

  if (count_number.length) {
    gsap.from(count_number, {
      scrollTrigger: { trigger: count_number, start: "top center+=200", markers: false },
      duration: 0.5,
      scale: 0.1,
      opacity: 0,
      delay: 0,
      stagger: 0.1,
      ease: "elastic",
      force3D: true,
    });
  }
}

function initRevealImages() {
  const $ = $$();
  const gsap = g().gsap;
  if (!$ || !gsap) return;
  $(".animate-img-wrap").each(function () {
    const revealWrap = $(this);
    const reveal = revealWrap.find(".reveal");
    const animatedImage = revealWrap.find(".the-animated-image");
    const tl = gsap.timeline({
      scrollTrigger: { trigger: revealWrap[0], toggleActions: "play none none none" },
    });
    tl.to(reveal, { x: "100%", duration: 0.5, ease: "expoScale(0.5,7,none)" }).from(
      animatedImage,
      { scale: 1.2, duration: 0.5, ease: "expoScale(0.5,7,none)" },
      "-=0.7",
    );
  });
}

function initHeadingTitleAnim() {
  const $ = $$();
  const gsap = g().gsap;
  const SplitText = g().SplitText;
  if (!$ || !gsap || !SplitText) return;
  if (!$.exists || !$.exists(".cs-heading-with-animation")) return;

  const titles = document.querySelectorAll(".cs-heading-with-animation");
  titles.forEach((title) => {
    const delay_value = +title.getAttribute("data-delay") || 0;
    const duration_value = +title.getAttribute("data-duration") || 0.4;
    const words = title.querySelectorAll(".cs-heading");

    const anim = gsap.timeline({
      delay: delay_value,
      scrollTrigger: {
        trigger: title,
        start: "top 90%",
        toggleActions: "play none none none",
        markers: false,
      },
    });
    words.forEach((word, wordIndex) => {
      const split = new SplitText(word, { type: "chars, words" });
      const wordDelay = wordIndex * 0.15;
      split.chars.forEach((char, charIndex) => {
        anim.fromTo(
          char,
          { opacity: 0, translateY: "100%" },
          { opacity: 1, translateY: "0%", duration: duration_value, ease: "power2.out" },
          charIndex * 0.009 + wordDelay,
        );
      });
    });
  });
}

function initAeTitle() {
  const gsap = g().gsap;
  if (!gsap) return;
  if (!document.querySelector(".ae-title h2")) return;
  gsap.fromTo(
    ".ae-title h2",
    { opacity: 0, y: 100 },
    {
      opacity: 1,
      y: 0,
      duration: 1.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".ae-title",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none none",
      },
      onComplete: () => {
        gsap.to(".ae-title h2", {
          duration: 0.2,
          repeat: -1,
          repeatDelay: 0.5,
          yoyo: true,
        });
      },
    },
  );
}

function initSkillBar() {
  const gsap = g().gsap;
  if (!gsap) return;
  const skillBars = document.querySelectorAll(".cs-skill-fill");
  if (!skillBars.length) return;
  skillBars.forEach((skillBar) => {
    const percentage = skillBar.dataset.percentage;
    gsap.to(skillBar, {
      width: `${percentage}%`,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: skillBar, start: "top 80%" },
    });
  });
}

function initDynamicBackground() {
  const $ = $$();
  if (!$) return;
  $("[data-src]").each(function () {
    const src = $(this).attr("data-src");
    $(this).css({ "background-image": "url(" + src + ")" });
  });
}

function initLightGallery() {
  const lightGallery = g().lightGallery;
  if (!lightGallery) return;
  const galleryDiv = document.getElementById("static-thumbnails");
  if (!galleryDiv) return;
  lightGallery(galleryDiv, {
    selector: ".item a",
    addClass: "lg-custom-thumbnails",
    animateThumb: true,
    zoomFromOrigin: true,
    allowMediaOverlap: true,
    toggleThumb: true,
  });
}

function initMasonry() {
  const $ = $$();
  if (!$ || !$.fn || !$.fn.masonry) return;
  if (!$(".blog-grid").length) return;
  $(".blog-grid").masonry({
    itemSelector: ".masonry-item",
    columnWidth: ".grid-sizer",
    percentPosition: true,
    gutter: 30,
  });
}

function initComingSoon() {
  if (!document.getElementById("comming-section")) return;
  const targetDate = new Date("2025-08-31T00:00:00").getTime();
  function updateCountdown() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;
    if (timeRemaining <= 0) {
      const c = document.getElementById("countdown");
      if (c) c.textContent = "The event is here!";
      clearInterval(interval);
      return 0;
    } else {
      const months = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 30.44));
      const days = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24),
      );
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
      const set = (id, v) => {
        const el = document.getElementById(id);
        if (el) el.textContent = v;
      };
      set("months", months);
      set("days", days);
      set("hours", hours);
      set("minutes", minutes);
      set("secound", seconds);
    }
  }
  const interval = setInterval(updateCountdown, 1000);
  updateCountdown();
  return () => clearInterval(interval);
}

let coomingCleanup = null;

export function initPage() {
  const gsap = g().gsap;
  const ScrollTrigger = g().ScrollTrigger;
  const ScrollToPlugin = g().ScrollToPlugin;
  const AOS = g().AOS;

  if (gsap && ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    gsap.config({ nullTargetWarn: false });
  }

  if (ScrollTrigger && ScrollTrigger.getAll) {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }

  initDynamicBackground();
  initSwipers();
  initFunfactCounter();
  initRevealImages();
  initHeadingTitleAnim();
  initAeTitle();
  initSkillBar();
  initLightGallery();
  initMasonry();

  if (coomingCleanup) {
    coomingCleanup();
    coomingCleanup = null;
  }
  const cl = initComingSoon();
  if (cl) coomingCleanup = cl;

  if (AOS) {
    AOS.init({
      offset: -350,
      delay: 0,
      easing: "ease",
      once: true,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
    AOS.refresh();
  }

  if (ScrollTrigger && ScrollTrigger.refresh) {
    setTimeout(() => ScrollTrigger.refresh(), 100);
  }
}

export function cleanupPage() {
  const ScrollTrigger = g().ScrollTrigger;
  if (ScrollTrigger && ScrollTrigger.getAll) {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  }
  perPageSwipers.forEach((s) => {
    try {
      s.destroy(true, true);
    } catch {}
  });
  perPageSwipers = [];
  if (coomingCleanup) {
    coomingCleanup();
    coomingCleanup = null;
  }
}
