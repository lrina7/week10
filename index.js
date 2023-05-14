let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
  offset = offset + 256;
  if (offset > 1024) {
    offset = 0;
  }
  sliderLine.styly.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function(){
  offset = offset - 256;
  if (offset < 0) {
    offset = 1024;
  }
  sliderLine.styly.left = -offset + 'px';
});


//первое задание
function sayLove () {
  console.log('I love JavaScript!');
}
sayLove(); 
