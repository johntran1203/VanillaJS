const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn')
const color = document.querySelector(".color")

//get a random number

btn.addEventListener('click', function() {
    const randomNumber = random()
    
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]

})

const random= () => {
    return(Math.floor(Math.random()* colors.length))
}

