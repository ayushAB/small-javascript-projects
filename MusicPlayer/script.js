
const songs =[
    {
        name:"Love The Way You Lie",
        src:"LoveTheWayYouLie.mp3"
    },
    {
        name:"Love The Way You Lie",
        src:"LoveTheWayYouLie.mp3"
    },
    {
        name:"Love The Way You Lie",
        src:"LoveTheWayYouLie.mp3"
    },
    {
        name:"Love The Way You Lie",
        src:"LoveTheWayYouLie.mp3"
    },
    {
        name:"Love The Way You Lie",
        src:"LoveTheWayYouLie.mp3"
    }
];
const audio = document.createElement('audio');
const songName = document.getElementById('song_name');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const progressBar= document.getElementById('progress_Bar');
const audioCurrentTime= document.getElementById('current_time');
const audioFullTime= document.getElementById('full_length');
const songListDiv= document.getElementById('song_list');
document.body.appendChild(audio);

selectedSong(0);

function selectedSong(index){
songName.innerText = songs[index].name;
audio.setAttribute('src',songs[index].src);
}

function hidePlayButton(){
    play.classList.add('hidden');
    pause.classList.remove('hidden');
}
function hidePauseButton(){
    pause.classList.add('hidden');
    play.classList.remove('hidden');
}
play.addEventListener('click',function(){
    audio.play();
    hidePlayButton();
    audioFullTime.innerText = (audio.duration / 60).toFixed(2);
});

pause.addEventListener('click',function(){
    audio.pause();
    hidePauseButton();
});

audio.addEventListener('timeupdate',()=>{
    audioCurrentTime.innerText = (audio.currentTime / 60).toFixed(2);
    let percentcomplete = (audio.currentTime/audio.duration) * 100;
    progressBar.style.width = percentcomplete + '%';
})

audio.addEventListener('ended',()=>{
     hidePauseButton();
});

function playSelectedSong(index){
    selectedSong(index);
    audio.play();
    const play = document.getElementById('play_'+index);
    const pause = document.getElementById('pause_'+index);
    pause.classList.remove('hidden');
    play.classList.add('hidden');
    hidePlayButton();
}
function pauseSelectedSong(index){
    selectedSong(index);
    audio.pause();
    const play = document.getElementById('play_'+index);
    const pause = document.getElementById('pause_'+index);
    pause.classList.add('hidden');
    play.classList.remove('hidden');

    hidePauseButton();
}

songList();
function songList(){

    for(let i=0;i<songs.length; i++ ){
       const div = document.createElement('div');
       div.className = "h-12 w-72 mb-3 bg-white rounded-xl flex items-center justify-between px-2";
       div.innerHTML = `
       <div class="pl-2">
       ${songs[i].name}
       </div>
       <div id="play_${i}" onclick="playSelectedSong(${i})" class="h-10 w-10 play-icon-color-red">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <div id="pause_${i}" onclick="pauseSelectedSong(${i})" class="h-10 w-10 play-icon-color-red hidden" >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
       `;
       songListDiv.appendChild(div);
    }
}