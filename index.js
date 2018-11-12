var x = 10
var y = 10
var backgrounds = [
  'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'
]
var counter = document.getElementById("count-down")
function countDown() {
  setTimeout(function() {
    if(x > 0) {
      counter.innerHTML = x
      counter.classList.remove(backgrounds[x])
      counter.classList.add(backgrounds[x - 1])
      x -= 1
      countDown()
    } else {
      counter.innerHTML = "BLAST OFF!"
      counter.classList.remove(backgrounds[x])
      counter.classList.add('dark-mode')
      blastOff()    
    }
  }, 1000)
}

function blastOff() {
  setTimeout(function() {
    if( y === 0) {
      counter.innerHTML = 'All done, thanks for playing, please disperse, nothing to see here folks!'
      counter.style.backgroundColor = '#FFFFFF'
      counter.style.color = '#000000'
      counter.classList.remove('count-down', 'dark-mode', 'alt-dark-mode')
      counter.classList.add('all-done')
    } else if(counter.classList.contains('dark-mode')) {
      counter.classList.remove('dark-mode')
      counter.classList.add('alt-dark-mode')
      blastOff()
    } else {
      counter.classList.remove('alt-dark-mode')
      counter.classList.add('dark-mode')
      blastOff()
    }
    y -= 1
  }, 300)
}

window.addEventListener('load', function() {
  countDown()
})
