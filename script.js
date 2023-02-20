var btn = document.querySelector('#esconder-mostrar')
var container = document.querySelector('.container')

btn.addEventListener('click', function () {
    if (container.style.display === 'none') {
        container.style.display = 'block'
    } else {
        container.style.display = 'none'
    }
})
