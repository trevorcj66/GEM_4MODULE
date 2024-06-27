document.do
const igla = document.getElementById('igla')

function iglaRotate() {
    igla.style.transform = 'rotate(30deg)'
}

setTimeout(iglaRotate, 500)

const disk = document.getElementById('disk')

function diskVisibleDisplay() {
    disk.style.display = 'block'
}

setTimeout(diskVisibleDisplay, 1500)

function diskVisible() {
    disk.style.opacity = '1'
}

setTimeout(diskVisible, 1750)

const song = document.getElementById('song')
const screenInner = document.getElementById('screenInner')

disk.addEventListener('click', () => {
    song.play()
    disk.classList.add('diskRotate')
    screenInner.style.opacity = '1'
})