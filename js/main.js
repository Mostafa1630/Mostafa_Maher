let sidbar = document.querySelector(".sidbar");
let closeSidbar = document.querySelector(".close-sidbar");
let openSidar = document.querySelector(".open-sidbar");

//Opensidbar
openSidar.addEventListener("click", () => {
  sidbar.classList.add("active");
});
//Close sidbar
closeSidbar.addEventListener("click", () => {
  sidbar.classList.remove("active");
});
//Close Sidbar If Scroll
addEventListener("scroll", () => {
  sidbar.classList.remove("active");
});

// Start Switcher Actions

const switcherToggle = document.querySelector(".style-switcher-toggle");
const switcher = document.querySelector(".style-switcher");

switcherToggle.addEventListener("click", () => {
  switcher.classList.toggle("open");
});

window.addEventListener("scroll", () => {
  switcher.classList.remove("open");
});
// End Switcher Actions


// Scroll Sections 
let allSections=Array.from(document.querySelectorAll('section'));
let linksSidbar=document.querySelectorAll('.sidbar ul li a');
addEventListener('scroll',()=>{
  allSections.forEach((section,index)=>{
      if(window.scrollY>=section.offsetTop-200 && window.scrollY<allSections[index+1].offsetTop-200){
        linksSidbar.forEach((link)=>{
              link.classList.remove('active');
              if(link.getAttribute('data-section')==section.id){
                  link.classList.add('active');
              }
          })
      }
  })
})




// Start Colors Actions
const altertnateStyle = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  altertnateStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}
// End Colors Actions
// Start Theme Light And Dark
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  document.querySelector(".day-night .lad").classList.toggle("fa-sun");
  document.querySelector(".day-night .lad").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contains("dark")) {
    document.querySelector(".day-night .lad").classList.add("fa-sun");
    document.querySelector(".day-night .lad").classList.remove("fa-moon");
  } else {
    document.querySelector(".day-night .lad").classList.add("fa-moon");
    document.querySelector(".day-night .lad").classList.remove("fa-sun");
  }
});
// End Theme Light And Dark

//Progress
let sectionSkills = document.querySelector(".skills");
let allspanProg = document.querySelectorAll(".prog span");
addEventListener("scroll", () => {
  if (scrollY >= sectionSkills.offsetTop - 350) {
    allspanProg.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
});




// Create Age Dyanmic
let ageOfBrithday=document.querySelector('.info-box .age');
let mybirthday=new Date('16 Mar 2003');
let dateNowDay=new Date();
let myage=dateNowDay.getTime()- mybirthday.getTime();
ageOfBrithday.textContent=Math.floor(myage/1000/365/24/60/60);
// To file Portfilo By Projects In Data

// let pojectsContant = document.querySelector(".projects-content");

// let getAllProjects;


// fetch("js/projects.json")
//   .then((res) => res.json())
//   .then((projects) => {
//     for (let i = 0; i < projects.length; i++) {
//       pojectsContant.innerHTML += `<div class="box all active ${projects[i].category}">
//         <div class="image">
//           <img src="${projects[i].img}" alt="" />
//         </div>
//         <div class="text-content">
//           <h2>${projects[i].name}</h2>
//           <div class="info">
//             <a href="${projects[i].code}" target="_blank"><i class="fa-brands fa-github"></i> <span>Git repo</span></a>
//             <a href="${projects[i].review}" target="_blank"><i class="fas fa-satellite-dish"></i> <span>Live</span></a>
//           </div>
//         </div>
//       </div>`;
//     }
//     getAllProjects = document.querySelectorAll(".projects-content .box");
//   });

let getAllProjects = document.querySelectorAll(".projects-content .box");

let listProjects=document.querySelectorAll('.list-portfolio li');
listProjects.forEach((li)=>{
    li.addEventListener('click',()=>{
        listProjects.forEach((e)=>e.classList.remove('active'));
        li.classList.add('active');
        getAllProjects.forEach((e)=>{
            if(e.classList.contains(`${li.getAttribute('data-name')}`)){
                e.classList.remove('active');
                e.classList.remove('hidden');
                setTimeout(()=>{
                    e.classList.add('active');
                },.1)
            }else{
                e.classList.add('hidden')
                e.classList.remove('active');
            }
        })
    })
})

// Select Btn Arrow Up

let btnUp = document.getElementById("btn-up");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 130) {
    btnUp.classList.add("active");
  } else {
    btnUp.classList.remove("active");
  }
});

btnUp.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
