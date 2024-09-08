"use strict"

window.onload = function () {

   //? меню бургер

   const menuButton = document.querySelector('.header__menu-button');
   const headerList = document.querySelector('.header__list');
   const body = document.body;

   menuButton.addEventListener('click', function() {
      if(!menuButton.classList.contains('_active')) {
         menuButton.classList.toggle('_active');
         headerList.classList.toggle('_active');
         body.classList.toggle('_lock');
      } else {
         menuButton.classList.remove('_active');
         headerList.classList.remove('_active');
         body.classList.remove('_lock');
      }
   });

   // ?scroll page

   const buttonsScroll = document.querySelectorAll('#button-scroll[data-goto]');
   if(buttonsScroll.length > 0) {
      buttonsScroll.forEach(buttonScroll => {
         buttonScroll.addEventListener("click", onButtonClick);
      });

      function onButtonClick(e) {
         const buttonScroll = e.target;
         if (buttonScroll.dataset.goto && document.querySelector(buttonScroll.dataset.goto)) {
            const gotoBlock = document.querySelector(buttonScroll.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;
            menuButton.classList.remove('_active');
            headerList.classList.remove('_active');
            body.classList.remove('_lock');

            window.scrollTo({
               top: gotoBlockValue,
               behavior: "smooth"
            });
            e.preventDefault();
         }
      }
   }

   // ?swiper-screen

   const swiper = new Swiper('.swiper-screen', {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
   
      navigation: {
      nextEl: '.swiper-screen__button-prev',
      prevEl: '.swiper-screen__button-next',
      },
   });

   // ?parallax

   if(window.innerWidth > 950) {
      document.querySelector('.about').classList.add('parallax');

      const parallax = document.querySelector('.parallax');
      const content = document.querySelector('.block-about__column');
      const img = document.querySelector('.block-about__img-container img');

      const forImg = 15;

      const speed = 0.05;

      let positionX = 0;
      let coordXprocent = 0;

      function setMouseParallaxStyle() {
         const distX = coordXprocent - positionX;

         positionX = positionX + (distX * speed);

         img.style.cssText = `transform: translateX(${positionX / forImg}%);`;

         requestAnimationFrame(setMouseParallaxStyle);
      }
      setMouseParallaxStyle();

      parallax.addEventListener("mousemove", function (e) {
         const parallaxWidth = parallax.offsetWidth;

         const coordX = e.pageX - parallaxWidth / 2;

         coordXprocent = coordX / parallaxWidth * 100;
      });
   }

   //? табы

   const tabsBtn = document.querySelectorAll(".tab-layout");
   const tabsContent = document.querySelectorAll(".tab-content__img");

   tabsBtn.forEach(function (content) {
      content.addEventListener("click", function () {
         let currentBtn = content;
         let tabId = currentBtn.getAttribute("data-tab");
         let currentTab = document.querySelector(tabId);

         if (!currentBtn.classList.contains('_active')) {
            tabsBtn.forEach(function (content) {
               content.classList.remove('_active')
            });

            tabsContent.forEach(function (content) {
               content.classList.remove('_active')
            });

            currentBtn.classList.add('_active');
            currentTab.classList.add('_active');
         }
      })
   });
}