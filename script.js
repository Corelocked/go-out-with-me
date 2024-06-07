document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const gif = document.getElementById('gif');
    const container = document.querySelector('.container');
    const h1 = document.getElementById('proposal-text');

    let noClicks = 0;

    yesBtn.addEventListener('click', async (event) => {
        event.preventDefault();
        gif.src = 'pizza.gif';
        h1.textContent = 'I love you';
        yesBtn.remove();
        noBtn.remove();

        // Send the number of no clicks to the server
        try {
            const response = await fetch('http://127.0.0.1:5000/send_email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ no_clicks: noClicks }),
            });
            const result = await response.json();
            console.log(result.message);
        } catch (error) {
            console.error('Error:', error);
        }
    });

    noBtn.addEventListener('mouseover', (event) => {
        noClicks += 1;
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
