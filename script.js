document.addEventListener('DOMContentLoaded', () => {
    const proxyForm = document.getElementById('proxy-form');
    const urlInput = document.getElementById('url-input');
    const resultDiv = document.getElementById('result');

    proxyForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const url = urlInput.value;
        if (url.trim() === '') {
            alert('Please enter a valid URL.');
            return;
        }

        try {
            const response = await fetch(`/proxy?url=${encodeURIComponent(url)}`);
            const data = await response.text();
            resultDiv.innerHTML = data;
        } catch (error) {
            resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        }
    });
});

