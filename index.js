



var element = document.getElementsByClassName("spanHead1");
var element1 = document.getElementsByClassName("spanHead2");
var element2 = document.getElementsByClassName("spanHead3");
// console.log(element2);
var element3 = document.getElementsByClassName("headerPTag");
var element4 = document.getElementsByClassName("headButton");


setInterval(() => {
  element1[0].classList.remove("noOpacity");
}, 250);
setInterval(() => {
  element2[0].classList.remove("noOpacity");
}, 400);
setInterval(() => {
  element3[0].classList.remove("noOpacity");
}, 550);
setInterval(() => {
  element4[0].classList.remove("noOpacity");
}, 750);



var aboutSection = document.getElementById("whiteAbout");




let observer = new IntersectionObserver(updates => {
  updates.forEach(update => {
    // console.log(update)
      if (update.isIntersecting) {
          update.target.classList.add('visible');
      }
      //  else {
      //     update.target.classList.remove('visible');
      // }
  });
}, { threshold: 0 });


var element8 = document.querySelectorAll(".element");
// var element10 = document.getElementById("thirdSection");
// console.log(element8)
element8.forEach(element =>{
  observer.observe(element);
})
//  observer.observe(element10);


 var sideBar = document.getElementsByClassName("sideBarMenu")[0];
// Hamburger Menu Functions
 function showSideBar(){
  console.log("hello")
  sideBar.classList.add("show");
}
function closeSideBar(){
   sideBar.classList.add("close");
   setTimeout(()=>{
     sideBar.classList.remove("show");
     sideBar.classList.remove("close");
     
  },400)
 }



// setInterval(() => {
//     element1[0].classList.remove("noOpacity");
//     element2[0].classList.remove("noOpacity");
//     element3[0].classList.remove("noOpacity");
//     element4[0].classList.remove("noOpacity");
//   }, 500);

// setInterval(()=>{
//  element[0].classList.add("fullOpacity");
//  element1[0].classList.add("fullOpacity");
//  element2[0].classList.add("fullOpacity");
// },500)
