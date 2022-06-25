const counts = document.getElementById('value')
const decrease = document.querySelector("decrease")
const increase = document.querySelector("increase")
const reset = document.querySelector("reset")

const btns = document.querySelectorAll('.btn')

// e.currentTarget.classList and styles.contains()
// contains is a new method or  something
let count = 0
btns.forEach(btn => {
    btn.addEventListener('click', function(e) {
       console.log(e.currentTarget.classList)
       const styles = e.currentTarget.classList
       if(styles.contains('decrease')) {
         count--
       }else if(styles.contains('increase')) {
        count++
       } else {
        count = 0
       } if( count > 0) {
        value.style.color = 'green'
       }
       if( count < 0) {
        value.style.color = 'red'
       }
       if( count === 0) {
        value.style.color = 'blue'
       }
       value.textContent = count;
       
    })
   
});