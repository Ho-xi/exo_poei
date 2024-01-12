var draggable = document.querySelector("#draggable")
var dropper = document.querySelector("#dropper")

dropper.addEventListener('dragover', (event) => {
    event.preventDefault()
})

dropper.addEventListener('dragenter', (event) => {
    dropper.style.backgroundColor = 'white'
})

dropper.addEventListener('dragleave', (event) => {
    dropper.style.backgroundColor = 'dodgerblue'
})