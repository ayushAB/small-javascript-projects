const projects = [
    {
        name:'Movie App',
        img_path:'images/movie_app.png',
        overview:'',
        url:'movie-app'
    },
    {
        name:'Poke Dex',
        img_path:'images/pokedex.png',
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
        img_path:'images/music_player.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'MusicPlayer'
    },
    {
        name:'Mobile Nav Design',
        img_path:'images/mobile_nav.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'mobile-nav'
    },
    {
        name:'Github Profile App',
        img_path:'images/github_profile.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'GithubProfile'
    },
    {
        name:'Weather App',
        img_path:'images/github_profile.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'WeatherApp'
    },
    {
        name:'HoverBoard App',
        img_path:'images/hover_board.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'HoverBoard'
    },
    {
        name:'Calculator',
        img_path:'images/calculator.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'Calculator'
    },
    {
        name:'Blink Effect',
        img_path:'images/blink.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'Blink'
    },
    {
        name:'Color Flipper',
        img_path:'images/color_flipper.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'ColorFlipper'
    },
    {
        name:'Count Down Timer',
        img_path:'images/count_down.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'CountDownTimer'
    },
    {
        name:'Counter',
        img_path:'images/counter.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'Counter'
    },
    {
        name:'Darkmode Toggle',
        img_path:'images/dark_mode.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'DarkmodeToggle'
    },
    {
        name:'Notes',
        img_path:'images/notes.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'Notes'
    },
    {
        name:'Password Viewer',
        img_path:'images/password_viewr.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'PasswordViewer'
    },
    {
        name:'Side Navigation',
        img_path:'images/side_nav.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'SideNav'
    },
    {
        name:'Toast',
        img_path:'images/toast.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'Toast'
    },
    {
        name:'Typing Effect',
        img_path:'images/typing_effect.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'TypingEffect'
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