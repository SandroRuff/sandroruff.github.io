const infoWindow = document.querySelector('.info-window');
const info = document.querySelector('.info-window .notify');
const infoText = document.querySelector('.info-window .notify p');
const elementsInProgress = document.querySelectorAll('.in-progress');
const elementsInProgressLength = elementsInProgress.length;

// Events
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
    info.style.width = '55vw';
  } else {
    info.style.width = '100%';
  }
  setTimeout(() => {
    infoText.style.opacity = 1;
    document.body.style.pointerEvents = 'auto';
  }, 800);
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
