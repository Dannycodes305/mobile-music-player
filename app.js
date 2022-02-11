const musicContainer = document.querySelector('.main__container')
const prevBtn = document.querySelector('#prev')
const playBtn = document.querySelector('#play')
const fwdBtn = document.querySelector('#fwd')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress__contianer')
const title = document.querySelector('#song--title')
const artistName = document.querySelector('#artist--name')
const cover = document.querySelector('#cover')

//song titles

const songs = ['Alta Gama','Pepas','Guaracha mix' ]

//Kepp track of songs
let songIndex = 2

//Loading songs info

loadSong(songs[songIndex])

//update songs detail

function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src =`images/${song}.jpg`
    

}

function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

function prevSong(){
    songIndex--

    if(songIndex < 0) {
       songIndex =  songs.length - 1

    } 

    loadSong(songs[songIndex])

    playSong()

    
}
function fwdSong(){
    songIndex++

    if(songIndex > songs.length -1) {
        songIndex =  0
 
 
     } 
 
     loadSong(songs[songIndex])
 
     playSong()

}
//Event listeners

playBtn.addEventListener('click', () =>{
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong()
    } else{
        playSong()
    }

})

//change songs

prevBtn.addEventListener('click', prevSong)
fwdBtn.addEventListener('click', fwdSong)
