document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const gif = document.getElementById('gif');
    const container = document.querySelector('.container');
    const h1 = document.getElementById('proposal-text');
    let noAttempts = 0;

    const sendNoAttempts = async (noAttempts) => {
        try {
            const response = await fetch('http://127.0.0.1:5000/track_attempt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ no_attempts: noAttempts })
            });
            const result = await response.json();
            console.log(result.message);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

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

        noAttempts++;
    });

    yesBtn.addEventListener('click', (event) => {
        event.preventDefault();
        gif.src = 'pizza.gif';
        h1.textContent = 'I love you';
        yesBtn.remove();
        noBtn.remove();
        sendNoAttempts(noAttempts);
    });
});
