window.addEventListener('load', function () {
    const navigationHtml = `
        <button class="navigation-button" onclick="location.href='index.html'">Home</button>
        <button class="navigation-button" onclick="location.href='blogs.html'">Blogs</button>
        <button class="navigation-button" onclick="location.href='notes.html'">Notes</button>
    `;

    document.body.insertAdjacentHTML('afterbegin', navigationHtml);
});