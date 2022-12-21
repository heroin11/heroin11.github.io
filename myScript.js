
window.addEventListener('scroll',scrollFn);
window.addEventListener('load',scrollFn);

let scrollBox = document.querySelectorAll('.scrollAni');

let animationStartLine = 200;

function scrollFn()
{
  for(let i = 0; 1< scrollBox.length; i++)
  {
    if(scrollBox[i].getBoundingClientRect().top + animationStartLine < window.innerHeight)
    {
      scrollBox[i].classList.add('show');
    }
  }
}