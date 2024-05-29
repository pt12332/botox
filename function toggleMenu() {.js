function toggleMenu() {
    var links = document.querySelectorAll('.navbar a:not(.icon)');
    links.forEach(function(link) {
        link.classList.toggle('active');
    });
}
