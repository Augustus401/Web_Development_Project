const currentFile = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav ul li a').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === currentFile) {
        link.classList.add('active');
    }
});


document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.className = 'nav-ripple';
        const rect = link.getBoundingClientRect();
        ripple.style.left = (e.clientX - rect.left) + 'px';
        ripple.style.top  = (e.clientY - rect.top)  + 'px';
        link.appendChild(ripple);
        ripple.addEventListener('animationend', () => ripple.remove());
    });
});