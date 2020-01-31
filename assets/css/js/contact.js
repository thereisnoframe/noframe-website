window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  loader.className += ' hidden';
});

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.setAttribute(
    'style',
    `top: ${e.pageY + 2}px; left:${e.pageX + 2}px;`
  );
});

const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    cursor.classList.add('animated');
  });
});

links.forEach(link => {
  link.addEventListener('mouseleave', () => {
    cursor.classList.remove('animated');
  });
});