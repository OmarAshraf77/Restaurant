let boxs = document.getElementsByClassName('box2')

setInterval(() => {
    boxs[0].style.background = '#691616'    
    boxs[0].style.transition = '1s'    
}, 2000);

setInterval(() => {
    boxs[0].style.background = '#1a1a1a'
}, 4000);