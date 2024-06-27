const screenVideo = document.getElementById('screenContentBlockVideo')
const videoBlock = document.getElementById('screenVideoBlock')
const videoPlay = document.getElementById('videoPlay')

screenVideo.addEventListener('click', () => {
    videoBlock.style.display = 'flex'
    videoPlay.play()
    song.pause()
})

const videoCloseButton = document.getElementById('videoCloseButton')

videoCloseButton.addEventListener('click', () => {
    videoBlock.style.display = 'none'
    videoPlay.pause()
    song.play()
})