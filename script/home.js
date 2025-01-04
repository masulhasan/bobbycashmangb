document.addEventListener('DOMContentLoaded', function() {
    const circle = document.querySelector('.hover-circle');
    const videoSection = document.querySelector('.video-section');
    
    document.addEventListener('mousemove', function(e) {
        circle.style.left = e.clientX + 'px';
        circle.style.top = e.clientY + 'px';
    });

    videoSection.addEventListener('mouseenter', function() {
        circle.style.width = '150px';
        circle.style.height = '150px';
    });

    videoSection.addEventListener('mouseleave', function() {
        circle.style.width = '0';
        circle.style.height = '0';
    });
});