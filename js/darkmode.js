window.addEventListener('load', function () {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
});

const toggleButton = document.querySelector('.dark-mode-toggle');

toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
});