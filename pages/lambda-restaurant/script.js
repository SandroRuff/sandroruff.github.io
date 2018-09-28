const btn_go_up = document.querySelector('.go-up-btn');

window.onscroll = () => {
  if (document.documentElement.scrollTop > 400) {
    btn_go_up.style.opacity = '1';
  } else {
    btn_go_up.style.opacity = '0';
  }
};

btn_go_up.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});
