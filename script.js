document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const gif = document.getElementById('gif');
    const container = document.querySelector('.container');
    const h1 = document.getElementById('proposal-text');

    yesBtn.addEventListener('click', (event) => {
        event.preventDefault();
        gif.src = 'pizza.gif';
    yesBtn.remove();
    noBtn.remove();
    });

    yesBtn.addEventListener('click', (event) => {
        event.preventDefault();
        h1.textContent = 'I love you';
    });

    noBtn.addEventListener('mouseover', (event) => {
        const containerRect = container.getBoundingClientRect();
        const maxX = containerRect.width - noBtn.offsetWidth;
        const maxY = containerRect.height - noBtn.offsetHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;

        event.target.style.cursor = 'not-allowed';

        const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        yesBtn.style.fontSize = (currentSize + 5) + 'px';
    });

});
