//paralax
const bgSun = document.getElementById("sun");
const bgQueen = document.getElementById("queen");
const bgKing = document.getElementById("king");

document.addEventListener("mousemove", function (e) { MoveBackground(e); });

function MoveBackground(e) {
   let offsetX = (e.clientX / window.innerWidth * 30) - 15;
   let offsetY = (e.clientY / window.innerHeight * 10) - 5;

   bgSun.setAttribute("style", "transform: translateX( " + offsetX + "px);");
   bgQueen.setAttribute("style", "transform: translate( " + -offsetX + "px, " + -offsetY + "px);");
   bgKing.setAttribute("style", "transform: translate( " + -offsetX + "px, " + -offsetY + "px);");

}
//scrollTo
function scrollToElement(el) {
   document.getElementById(el).scrollIntoView({ block: "center", behavior: "smooth" });
}

//slider chessMasters
let slideArray = document.querySelectorAll('.slide');
const swiper = document.getElementById('swiper')

let allSlideNum = slideArray.length;
let visibleSlides = 0;
document.getElementById('all-slides').textContent = '/' + allSlideNum;

slideArray.forEach((slide) => {
   if (slide.getBoundingClientRect().left < swiper.clientWidth) {
      visibleSlides++;

   }
})
setVisibleSlide()
function setVisibleSlide() {
   document.getElementById('active-slide').innerText = visibleSlides;
}


function nextSlide() {
   slideArray = document.querySelectorAll('.slide');
   for (let i = 0; i < slideArray.length; i++) {
      const element = slideArray[i];
      if (i === 0) {
         element.classList.add('hide')
         setTimeout(() => {
            swiper.appendChild(element);
            element.classList.remove('hide')

         }, 200)

         if (visibleSlides < slideArray.length) {
            visibleSlides++;
         } else { visibleSlides = 1 }
         setVisibleSlide()
      }

   }
}
function prevSlide() {
   slideArray = document.querySelectorAll('.slide');
   for (let i = 0; i < slideArray.length; i++) {
      const element = slideArray[i];
      if (i === slideArray.length - 1) {
         swiper.insertBefore(element, slideArray[0]);

         if (visibleSlides > 1) {
            visibleSlides -= 1;
         } else { visibleSlides = 6 }
         setVisibleSlide()
      }

   }
}

setInterval(() => nextSlide(), 4000);

const sliderStages = document.getElementById('stages');

const stages = sliderStages.querySelectorAll('.stage');
stages.forEach((stage) => {
   stage.style.left = 0;
})
let stagesAllNum = stages.length - 1;

const stagesPages = document.getElementById('stages-pages');

function getPagesStages() {
   stagesPages.innerHTML = '';
   for (let index = 0; index <= stagesAllNum; index++) {
      stagesPages.innerHTML += `<div class="stage-page"></div>`
      
   }
}
getPagesStages();

const pageStages = document.querySelectorAll('.stage-page')
function setActiveStagePage(el) {
   pageStages.forEach((page) => {page.classList.remove('active')});
   pageStages[stages.length - 1 - el].classList.add('active')
}
setActiveStagePage(stagesAllNum);
function nextStage() {
   if (stagesAllNum >= 1) {


      stages.forEach((stage) => {

         stage.style.left = (parseFloat(stage.style.left) - stage.clientWidth - parseFloat(window.getComputedStyle(stage).marginRight))  + 'px';

      });
      stagesAllNum -= 1;
      setActiveStagePage(stagesAllNum)
   }


}
function prevStage() {
   if (stagesAllNum < 6) {


      stages.forEach((stage) => {

         stage.style.left = (parseFloat(stage.style.left) + stage.clientWidth + parseFloat(window.getComputedStyle(stage).marginRight))  + 'px';

      });
      stagesAllNum ++;
      setActiveStagePage(stagesAllNum)
   }
}