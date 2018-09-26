const infoWindow = document.querySelector('.info-window');
const elementsInProgress = document.querySelectorAll('.in-progress');
const elementsInProgressLength = elementsInProgress.length;

const hideInfoWindow = function() {
  infoWindow.classList.add('-hidden');
};

for (let i = 0; i < elementsInProgressLength; i++) {
  elementsInProgress[i].addEventListener('click', () => {
    infoWindow.classList.remove('-hidden');
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
