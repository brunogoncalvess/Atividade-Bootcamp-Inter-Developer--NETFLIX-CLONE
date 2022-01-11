$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

const closeMenu1 = document.getElementById('close1')
const closeMenu2 = document.getElementById('close2')
const closeMenu3 = document.getElementById('close3')
const closeMenu4 = document.getElementById('close4')
const checkbox = document.getElementById('side-menu')

closeMenu1.addEventListener('click', ()=> {
    checkbox.checked = false
})
closeMenu2.addEventListener('click', ()=> {
    checkbox.checked = false
})
closeMenu3.addEventListener('click', ()=> {
    checkbox.checked = false
})
closeMenu4.addEventListener('click', ()=> {
    checkbox.checked = false
})