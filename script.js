const projects = [
    {
        name:'Weather App',
        img_path:'/images/weather_app.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'WeatherApp'
    },
    {
        name:'Weather App',
        img_path:'/images/weather_app.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'WeatherApp'
    },
    {
        name:'Weather App',
        img_path:'/images/weather_app.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'WeatherApp'
    },
    {
        name:'Weather App',
        img_path:'/images/weather_app.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'WeatherApp'
    },
    {
        name:'Weather App',
        img_path:'/images/weather_app.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'WeatherApp'
    },
    {
        name:'Weather App',
        img_path:'/images/weather_app.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'WeatherApp'
    },
    {
        name:'Weather App',
        img_path:'/images/weather_app.png',
        overview:'Simple Application build with <a href="https://www.accuweather.com">Accuweather</a> API.Used Tailwindcss for css.',
        url:'WeatherApp'
    },
];

const showProjects = () => {
    const mainDiv = document.getElementById('main');
    projects.forEach((project) => {
        const element = document.createElement('a');
        element.href = project.url
        element.className = 'relative group flex flex-col items-center shadow-2xl';
        element.innerHTML =`
        <div class="absolute h-full p-5 w-full bg-white transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100">
        <div>Overview</div>
        ${project.overview}</div>
        <div class="overflow-hidden h-96 flex justify-center">
            <img class="object-fill" src="${project.img_path}"/>
          </div>
          <div class="text-lg text-center  capitalize w-full mb-3 bg-black">
          ${project.name}
          </div>
          <div class="text-lg text-center text-white capitalize w-full mb-3">
           Weight : ${project.name}
          </div>
        `;
        mainDiv.append(element);
    })
}
showProjects();