const header = document.querySelector('#header');

window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;

    if (scrollPos > 200) {
        header.classList.add('fixed');
    } else {
         header.classList.remove('fixed');
    }
});


const linkDate = document.querySelectorAll('a[href="#"]');
linkDate.forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault();

        const blockId = anchor.getAttribute('href');
        document.querySelector('', blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}) 
    
