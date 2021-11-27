const projects = [
    {
        name:'Movie App',
        img_path:'images/movie_app.PNG',
        overview:'',
        url:'movie-app'
    },
    {
        name:'Poke Dex',
        img_path:'images/pokedex.PNG',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'PokeDex'
    },
    {
        name:'Weather App',
        img_path:'images/weather_app.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'WeatherApp'
    },
    {
        name:'Music Player',
        img_path:'images/music_player.PNG',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'MusicPlayer'
    },
    {
        name:'Mobile Nav Design',
        img_path:'images/mobile_nav.PNG',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'mobile-nav'
    },
    {
        name:'Github Profile App',
        img_path:'images/github_profile.PNG',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'GithubProfile'
    },
    {
        name:'HoverBoard App',
        img_path:'images/hover_board.PNG',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'HoverBoard'
    },
    {
        name:'Calculator',
        img_path:'images/calculator.PNG',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'Calculator'
    },
    {
        name:'Blink Effect',
        img_path:'images/blink.PNG',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'Blink'
    },
    {
        name:'Color Flipper',
        img_path:'images/color_flipper.PNG',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'ColorFlipper'
    },
    {
        name:'Count Down Timer',
        img_path:'images/count_down.PNG',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'CountDownTimer'
    },
    {
        name:'Counter',
        img_path:'images/counter.PNG',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'Counter'
    },
    {
        name:'Darkmode Toggle',
        img_path:'images/dark_mode.PNG',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'DarkmodeToggle'
    },
    {
        name:'Notes',
        img_path:'images/notes.PNG',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'Notes'
    },
    {
        name:'Password Viewer',
        img_path:'images/password_viewr.PNG',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'PasswordViewer'
    },
    {
        name:'Side Navigation',
        img_path:'images/side_nav.PNG',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'SideNav'
    },
    {
        name:'Toast',
        img_path:'images/toast.PNG',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'Toast'
    },
    {
        name:'Typing Effect',
        img_path:'images/typing_effect.PNG',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'TypingEffect'
    },
    {
        name:'NFT Card Design',
        img_path:'images/desktop-design.jpg',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'nft-preview-card-component-main'
    },
];
document.getElementById('count').innerText = "("+ projects.length + ")";
const showProjects = () => {
    const mainDiv = document.getElementById('main');
    projects.forEach((project) => {
        const element = document.createElement('a');
        element.href = project.url
        element.className = 'relative group flex flex-col items-center shadow-2xl bg-white rounded';
        element.innerHTML =`
        <div class="absolute h-full p-5 w-full bg-white transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-90 flex justify-center items-center overflow-hidden">
        <div class=" absolute inset-0 text-center flex justify-center items-center">
         <span class="text-6xl" >VIEW<span>
        </div>
        </div>
        <div class="overflow-hidden h-96 flex justify-center bg-gray-800 px-3">
            <img class="object-contain rounded" src="${project.img_path}"/>
          </div>
          <div class="text-lg text-center text-white bg-purple-700 flex items-center justify-center font-bold capitalize w-full py-3">
            ${project.name}
          </div>
        `;
        mainDiv.append(element);
    })
}
showProjects();