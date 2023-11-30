gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let tabsContainer = document.querySelector('.services');

let baseHeight = tabsContainer.offsetHeight;
let calculatedHeight = tabsContainer.offsetHeight;

let tl = gsap.timeline({
 scrollTrigger: {
   trigger: ".cardsContainer",
   pin: true,
   pinSpacing: true,
   // markers: true,
   start: `top-=${(calculatedHeight - baseHeight) + 70}px top`, // when the top of the trigger hits the top of the viewport
   end: "+=2000", // end after scrolling 1000px beyond the start
   scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
 }
});


tabsContainer.addEventListener('click', function(e){
   // ScrollTrigger.refresh();
   setTimeout(() => {
   calculatedHeight = tabsContainer.offsetHeight;
   tl = gsap.timeline({
   scrollTrigger: {
   start: `top-=${(calculatedHeight - baseHeight) + 70}px top`
 }
   });
ScrollTrigger.refresh();
console.log(tl);
   }, 1000);
})



tl.to('.card1',{
 yPercent:0,
 opacity: 1
}) 

tl.from('.card2', {
 yPercent:75,
 opacity: 0,
}) 

tl.to('.card1',{
 scale:0.91,
 yPercent:-0.5,
 opacity: 0.7
}, "-=0.3") 

tl.to('.card2', {
 yPercent:0,
 opacity: 1
}) 

tl.from('.card3', {
 yPercent:75,
 opacity: 0,
}) 

tl.to('.card2',{
 scale:0.94,
 yPercent:-0.4,
 opacity: 0.7
}, "-=0.3") 

tl.to('.card3', {
 yPercent:0,
 opacity: 1
}) 

tl.from('.card4', {
 yPercent:75,
 opacity: 0,
}) 

tl.to('.card3',{
 scale:0.97,
 yPercent:-0.3,
 opacity: 0.7
}, "-=0.3") 

tl.to('.card4', {
 yPercent:0,
 opacity: 1
}) 

tl.to('.card4', {});