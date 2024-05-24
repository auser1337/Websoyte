window.addEventListener('load', function () {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }
});

const toggleButton = document.querySelector('.dark-mode-toggle');

toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});