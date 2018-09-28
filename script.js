const infoWindow = document.querySelector('.info-window');
const elementsInProgress = document.querySelectorAll('.in-progress');
const elementsInProgressLength = elementsInProgress.length;

const hideInfoWindow = function() {
  infoWindow.style.opacity = 0;
  setTimeout(() => {
    infoWindow.style.visibility = 'hidden';
  }, 400);
};

for (let i = 0; i < elementsInProgressLength; i++) {
  elementsInProgress[i].addEventListener('click', () => {
    infoWindow.style.visibility = 'visible';
    infoWindow.style.opacity = 1;
  });
}

infoWindow.addEventListener('click', () => {
  hideInfoWindow();
});

addEventListener('keydown', e => {
  if (e.keyCode === 27) {
    hideInfoWindow();
  }
});
