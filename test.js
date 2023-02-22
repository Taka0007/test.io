// ボタンをクリックした時の処理
const button = document.querySelector('button');
button.addEventListener('click', () => {
  // 背景色を変更するアニメーションを追加
  document.querySelector('body').style.backgroundColor = '#8a3ab9';
  document.querySelector('body').style.transition = 'background-color 2s ease-in-out';

  // 図形のアニメーションを追加
  const shapes = document.querySelectorAll('.shape');
  shapes.forEach((shape, index) => {
    shape.style.animationDelay = `${index * 0.2}s`;
    shape.classList.add('animate');
  });
});
