document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('NavBar');    

    window.addEventListener('scroll', function () {    
        if (window.scrollY > 50) {
            // If scrolled down, change background color and text color
            navbar.style.background = 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(255, 177, 82, 0.9))';            
        } else {
            // If at the top, revert to original styles
             navbar.style.background = 'transparent';          
        }
    });
});

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=> {
        if(entry.isIntersecting) {
            entry.target.classList.add('story-image-r-show');
        }
    });
});

const imageInRight = document.querySelectorAll('.story-image-r');

imageInRight.forEach((el)=> {
    observer.observe(el);
});

const imageInLeft = document.querySelectorAll('.story-image-l');

imageInLeft.forEach((el)=> {
    observer.observe(el);
});
