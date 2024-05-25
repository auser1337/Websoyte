window.addEventListener('load', function () {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.documentElement.classList.add('dark-mode');
    } else {
        document.documentElement.classList.remove('dark-mode');
    }
});

const toggleButton = document.querySelector('.dark-mode-toggle');

toggleButton.addEventListener('click', function () {
    document.documentElement.classList.toggle('dark-mode');

    localStorage.setItem('dark-mode', document.documentElement.classList.contains('dark-mode').toString());
});