const infoWindow = document.querySelector('.info-window');
const info = document.querySelector('.info-window .notify');
const infoText = document.querySelector('.info-window .notify p');
const elementsInProgress = document.querySelectorAll('.-in-progress');
const elementsInProgressLength = elementsInProgress.length;

// INFO WINDOW
const hideInfoWindow = function() {
  infoText.style.opacity = 0;
  setTimeout(() => {
    info.style.width = 0;
    infoWindow.style.opacity = 0;
    setTimeout(() => {
      infoWindow.style.visibility = 'hidden';
    }, 400);
  }, 400);
};

const showInfoWindow = function() {
  document.body.style.pointerEvents = 'none';
  infoWindow.style.visibility = 'visible';
  infoWindow.style.opacity = 1;
  if (document.documentElement.scrollWidth >= 640) {
    info.style.width = '40vw';
  } else {
    info.style.width = '100%';
  }
  setTimeout(() => {
    infoText.style.opacity = 1;
    document.body.style.pointerEvents = 'auto';
  }, 400);
};

// Events Listeners
for (let i = 0; i < elementsInProgressLength; i++) {
  elementsInProgress[i].addEventListener('click', () => showInfoWindow());
}

infoWindow.addEventListener('click', () => {
  hideInfoWindow();
});

addEventListener('keydown', e => {
  if (e.keyCode === 27) {
    hideInfoWindow();
  }
});

// // PAGE SLIDER
// const navElements = document.querySelectorAll('header li');
// const pages = document.querySelectorAll('.page');
// let currentPage = 1; // Start Current Page

// const movePages = function(clickedNavElement) {
//   // Click On Not Current Page
//   if (currentPage != clickedNavElement) {
//     document.body.style.pointerEvents = 'none';
//     navElements[currentPage].classList.remove('-active');
//     navElements[clickedNavElement].classList.add('-active');
//     let isNearestPage = Math.pow(clickedNavElement - currentPage, 2) > 1; // Boolean
//     // Hide Current Page
//     pages[currentPage].style.opacity = 0;
//     // Show Clicked Page Outside
//     pages[clickedNavElement].style.visibility = 'visible';
//     // Move Current Page
//     pages[clickedNavElement].style.left = 0;
//     // Move Clicked Page
//     if (clickedNavElement < currentPage) {
//       // From LEFT to RIGHT
//       pages[currentPage].style.left = '100%';
//       if (isNearestPage) {
//         pages[currentPage - 1].style.left = '100%';
//       }
//     } else if (currentPage < clickedNavElement) {
//       // From RIGHT to LEFT
//       pages[currentPage].style.left = '-100%';
//       if (isNearestPage) {
//         pages[currentPage + 1].style.left = '-100%';
//       }
//     }
//     // Show Current Page Outside
//     setTimeout(() => {
//       pages[currentPage].style.visibility = 'hidden';
//       pages[currentPage].style.opacity = 1;
//       // Set New Current Page
//       currentPage = clickedNavElement;
//       document.body.style.pointerEvents = 'auto';
//     }, 750);
//   }
// };
// // Add Event Listeners For All Nav Elements In Header
// for (let i = 0; i < navElements.length; i++) {
//   navElements[i].addEventListener('click', () => movePages(i));
// }

const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger-wrapper');
const close = document.querySelector('.close');
const sidebarMenuElements = document.querySelectorAll('.sidebar ul a');
const panelMenu = document.querySelector('.panel ul');
const panelMenuElements = document.querySelectorAll('.panel ul a');
const panelLogo = document.querySelector('.panel .logo');
const slidesMain = document.querySelectorAll('.slide');
const projectPointers = document.querySelectorAll('#projects .pointer');
const projectSlides = document.querySelectorAll('#projects .link');

// Sidebar Move
const showSidebar = function() {
  if (screen.width < 768) {
    sidebar.classList.add('-visible-sidebar');
    panelLogo.classList.add('-hidden');
  }
};

const hideSidebar = function() {
  if (screen.width < 768) {
    sidebar.classList.remove('-visible-sidebar');
    panelLogo.classList.remove('-hidden');
  }
};

hamburger.addEventListener('click', () => showSidebar());
close.addEventListener('click', () => hideSidebar());

// Show Navigation Menu

const showNavMenu = function() {
  if (screen.width >= 768) {
    if (panelMenu.classList.contains('-visible-nav-menu')) {
      panelMenu.classList.remove('-visible-nav-menu');
      hamburger.style.backgroundColor = 'rgba(51, 51, 51, 0.75)';
    } else {
      panelMenu.classList.add('-visible-nav-menu');
      hamburger.style.backgroundColor = 'rgba(51, 51, 51, 0.9)';
    }
  }
};

hamburger.addEventListener('click', () => showNavMenu());

// Move Main Slides
let currentSlide = 0;

const moveSlide = function(selectedSlide, slides) {
  if (selectedSlide !== currentSlide) {
    slides[selectedSlide].classList.remove('-active');
    slides[currentSlide].classList.add('-active');
    if (selectedSlide - currentSlide > 0) {
      slides[currentSlide].classList.replace('-current', '-before');
      for (let i = currentSlide + 1; i < selectedSlide; i++) {
        slides[i].classList.replace('-after', '-before');
      }
      slides[selectedSlide].classList.replace('-after', '-current');
    } else {
      slides[currentSlide].classList.replace('-current', '-after');
      for (let i = currentSlide - 1; i > selectedSlide; i--) {
        slides[i].classList.replace('-before', '-after');
      }
      slides[selectedSlide].classList.replace('-before', '-current');
    }
    currentSlide = selectedSlide;
  }
};

for (let i = 0; i < sidebarMenuElements.length; i++) {
  sidebarMenuElements[i].addEventListener('click', () => {
    moveSlide(i, slidesMain);
    hideSidebar();
  });
  panelMenuElements[i].addEventListener('click', () => moveSlide(i, slidesMain));
}
panelLogo.addEventListener('click', () => moveSlide(0, slidesMain));

addEventListener('keydown', e => {
  if ((e.keyCode === 38) & (currentSlide - 1 > -1)) {
    moveSlide(currentSlide - 1, slidesMain);
  }
  if ((e.keyCode === 40) & (currentSlide + 1 < 4)) {
    moveSlide(currentSlide + 1, slidesMain);
  }
});

// Move Projects

let currentProject = 0;

const switchProject = function(selectedProject) {
  if (selectedProject !== currentProject) {
    projectSlides[currentProject].classList.replace('-activeProject', '-hiddenProject');
    projectSlides[selectedProject].classList.replace('-hiddenProject', '-activeProject');
    currentProject = selectedProject;
  }
};

for (let i = 0; i < projectPointers.length; i++) {
  projectPointers[i].addEventListener('click', () => switchProject(i));
}
