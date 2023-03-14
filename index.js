// trrgeting the items
let music = document.querySelector("audio")
let img = document.querySelector("img")
let playtButton = document.querySelector("#play")
let inputRange = document.querySelector("input")
let next_song = document.querySelector("#next-song")
let prev = document.querySelector("#perivious-song")
let forward = document.querySelector("#forward")
let backward = document.querySelector("#backward")
let songName = document.querySelector("#song-name")
let artist = document.querySelector("#artist")
let move = document.querySelector("#move")
let current = document.querySelector('#current')
let full = document.querySelector('#full')

let plylist = document.querySelector("#plybtn");
// console.log(lists);
// let overlay = document.querySelector(".modal-overlay")
// let closebtn = document.querySelector("#closetarget");


let Songs = [{
    id: 0,
    artist: "AR Rahman",
    songName: "Idhu Naal",
    Music: "./audio/Idhu Naal - Video Song _ Achcham Yenbadhu Madamaiyada _ A R Rahman _ STR_ Manjima _ Gautham Menon(M4A_128K).m4a",
    img: "./img/download (1).jpeg",
    Move: "Idhu Naal.Achcham Yenbadhu Madamaiyada _ A R Rahman _ STR_ Manjima _ Gautham Menon.mp3"

},

{
    id: 1,
    artist: "AR Rahman",
    songName: "Thalli pogathey",
    Music: "./audio/Thalli Pogathey - Official Single _ Achcham Yenbadhu Madamaiyada _ A R Rahman _ Lyric Video(MP3_320K).mp3",
    img: "./img/images.jpeg",
    Move: "Thalli Pogathey - Official Single _ Achcham Yenbadhu Madamaiyada _ A R Rahman _ Lyrics.mp3"

},

{
    id: 2,
    artist: "Amitabh",
    songName: "Kesariya thera",
    Music: "./audio/Kesariya (Dance Mix) - Brahmāstra _ Amitabh B _ Ranbir _ Alia _ Pritam _ Shashwat _ Antara(MP3_320K).mp3",
    img: "./img/images (1).jpeg",
    Move: "Kesariya (Dance Mix) - Brahmāstra _ Amitabh B _ Ranbir _ Alia _ Pritam _ Shashwat _ Antara.mp3"

},
{
    id: 3,
    artist: "AR Rahman",
    songName: "Ennodu-Nee-Irundhal",
    Music: "./audio/Ennodu-Nee-Irundhal.mp3",
    img: "./img/images (2).jpeg",
    Move: "Ennodu-Nee-Irundhal.mp3"
},
{
    id: 4,
    artist: "Thaman",
    songName: "Kalasala Kalasala",
    Music: "./audio/Osthe - Kalasala Kalasala Tamil Video _ STR_ Thaman(MP3_128K).mp3",
    img: "./img/images (3).jpeg",
    Move: "Osthe - Kalasala Kalasala Tamil.mp3"
},
]


//onloadedmetadata means assign the audio duration input range
music.onloadedmetadata = function () {
    inputRange.max = music.duration;

}
window.addEventListener("DOMContentLoaded", () => {

    music.src = Songs[count].Music;
    songName.innerText = Songs[count].songName;
    artist.innerText = Songs[count].artist
    img.src = Songs[count].img;
    move.innerText = Songs[count].Move

})

let count = 0;
next_song.addEventListener("click", (e) => {
    time()
    count++
    if (count == 5) {
        count = 0
        confirm("Do you want to play again")
    }
    music.src = Songs[count].Music;
    img.src = Songs[count].img;
    songName.innerText = Songs[count].songName;
    artist.innerText = Songs[count].artist
    move.innerText = Songs[count].Move
    music.play();
    playtButton.classList.add("fa-pause")
    playtButton.classList.remove("fa-play")
    setInterval(() => {
        inputRange.value = music.currentTime;
    }, 500)


    //check song length
})

//play button functionality
playtButton.addEventListener("click", (e) => {
    time()
    if (playtButton.classList.contains("fa-pause")) {
        music.pause()
        playtButton.classList.remove("fa-pause")
        playtButton.classList.add("fa-play")
    }
    else {
        music.play()
        playtButton.classList.add("fa-pause")
        playtButton.classList.remove("fa-play")
    }
    //setinterval calculate
    setInterval(() => {
        inputRange.value = music.currentTime;
    }, 500)
})

prev.addEventListener("click", (e) => {
    time()
    count--
    // if (count == -1) {
    //     alert("")
    // }
    music.src = Songs[count].Music;
    img.src = Songs[count].img;
    move.innerText = Songs[count].Move
    songName.innerText = Songs[count].songName;
    artist.innerText = Songs[count].artist
    music.play();
    playtButton.classList.add("fa-pause")
    playtButton.classList.remove("fa-play")
    setInterval(() => {
        inputRange.value = music.currentTime;
    }, 500)

    //check song length
})

function time() {
    setInterval(() => {
        show()
    }, 1000)
}

function show() {
    CurrenntMin = Math.floor(music.currentTime / 60)
    curretSec = Math.floor(music.currentTime - (CurrenntMin * 60))

    durationMin = Math.floor(music.duration / 60)
    durationSec = Math.floor(music.duration - (durationMin * 60))

    if (CurrenntMin < 10) {
        CurrenntMin = "0" + CurrenntMin
    }
    if (curretSec < 10) {
        curretSec = "0" + curretSec
    }
    if (durationMin < 10) {
        durationMin = "0" + durationMin
    }
    if (durationSec < 10) {
        durationSec = "0" + durationSec
    }
    current.innerText = `${CurrenntMin}:${curretSec}`
    full.innerText = `${durationMin}:${durationSec}`
}




// input range value assign to audio currenTime;
inputRange.addEventListener("input", () => {
    music.play();
    music.currentTime = inputRange.value
    playtButton.classList.remove("fa-play")
    playtButton.classList.add("fa-pause")
})

//forward functionality
forward.addEventListener("click", () => {
    music.currentTime = music.currentTime + 10;
})

//backward functionality
backward.addEventListener("click", () => {
    music.currentTime = music.currentTime - 10;
})
let div = document.querySelector(".lists")
plylist.addEventListener('click', (e) => {
    div.classList.toggle('lists1')

    if (e.target.innerText === "Play Lists") {
        e.target.innerText = "Close"
    }
    else if (e.target.innerText === "Close") {
        e.target.innerText = "Play Lists";
    }

})

// closebtn.addEventListener("click",() => {
//     overlay.classList.add('modal-overlay')
//     overlay.classList.remove('modal-overlay1')
// })

//all songs
let ul = document.querySelector(".all-songs")
for (let i = 0; i < Songs.length; i++) {
    let li = document.createElement("li")
    li.setAttribute("id", i)
    li.innerText = Songs[i].songName
    ul.appendChild(li)
}


let li = document.querySelectorAll("li")

for (let i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (e) => {
        for (let i = 0; i < Songs.length; i++) {
            if (e.target.id == Songs[i].id) {
                playtButton.classList.add("fa-pause")
                playtButton.classList.remove("fa-play")
                music.src = Songs[i].Music
                songName.innerText = Songs[i].songName;
                artist.innerText = Songs[i].artist
                // image.src = Songs[i].img
                move.innerText = Songs[count, i].Move
                img.src = Songs[count, i].img;
                music.play()
                show()
                setInterval(() => {
                    inputRange.value = music.currentTime;
                    show()
                }, 500)
            }
        }
    })
}