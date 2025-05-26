let next = document.querySelector('.next')
let previous = document.querySelector('.previous')

next.addEventListener('click', function(){
    let BGimage = document.querySelectorAll('.BGimage')
    document.querySelector('.slide').appendChild(BGimage[0])
})

previous.addEventListener('click', function(){
    let BGimage = document.querySelectorAll('.BGimage')
    document.querySelector('.slide').prepend(BGimage[BGimage.length - 1]) // here the length of items = 6
})