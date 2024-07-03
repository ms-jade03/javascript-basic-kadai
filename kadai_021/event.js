const inputBtn = document.getElementById('btn');
const defaultText = document.getElementById('text');

inputBtn.addEventListener('click', () => {

  setTimeout(() =>{
    const changeText = document.createElement('text');
    changeText.textContent = 'ボタンをクリックしました';

    defaultText.removeChild(defaultText.firstChild);

    defaultText.appendChild(changeText);
  }, 2000);
  
});