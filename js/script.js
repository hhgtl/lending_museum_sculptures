'use strict';

document.querySelectorAll('.acordeon').forEach(item => {
    item.addEventListener('click', () => {
        const arrowAnim = item.querySelector('.acordeon-img');
        let content = item.nextElementSibling;
        
        if(content.style.maxHeight) {
           content.style.maxHeight = null;
           content.classList.remove('show');
           arrowAnim.classList.remove('animate-start');
           arrowAnim.classList.add('animate-end');
           
        } else {
            content.style.maxHeight = content.scrollHeight + 'px'
            content.classList.add('show');
            arrowAnim.classList.remove('animate-end');
            arrowAnim.classList.add('animate-start');
            
        }
        
    })
})


