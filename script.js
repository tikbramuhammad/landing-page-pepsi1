function imgSlider(aniything) {
  document.querySelector('.pepsi').src = aniything;
}

function changeBgColor(color) {
  const container = document.querySelector('.container');
  container.style.background = color;
}

function menuToggle(){
  const toggleMenu = document.querySelector('.toggle-menu');
  const navigation = document.querySelector('.navigation');
  toggleMenu.classList.toggle('active');
  navigation.classList.toggle('active');
}