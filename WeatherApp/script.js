const API_KEY ="7e179daa96cd8ecfaddee9208cb1a067";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      console.log('not supported');
    }
  }

  function showPosition(position) {
    fetch(API_URL+`?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
       const card = createCard(data);
       document.body.innerHTML = card;
    });
  }

  function createCard(data){
      return `
    <div class="container bg-purple-800 flex flex-col justify-end items-end text-white mx-auto max-w-3xl shadow rounded pb-4 bg-contain bg-no-repeat" style="background-image: url('https://media1.giphy.com/media/13qyRZ4VeiJ2nK/giphy.gif?cid=ecf05e4731h9h8hkojsglw32m63gdtg23uumu5t7w902rhfh&rid=giphy.gif&ct=g');">
    <div class="mt-2 p-4 text-center">
      <span class="text-4xl font-thin">${data.name}, ${data.sys.country}</span>
    </div>
    <div class="text-center text-xl text-grey-light p-4">
      <span>${data.weather[0].main}</span>
    </div>
    <div class="flex justify-center">
      <div class="text-center p-2">
          <div class="text-lg text-grey-light">
              <span class="text-right">${data.main.temp_min}˚F</span>
              <span class="text-center text-5xl text-white mx-6  font-thin">${data.main.temp}˚F</span>
              <span class="text-left">${data.main.temp_max}˚F</span>
            </div>
          <div class="text-grey-light tracking-wide text-lg mt-2">
           ${getDate()}
          </div>
        </div>
    </div>
  </div>`;

  }

  function getDate(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = mm + '/' + dd + '/' + yyyy;
    return today;
  }
  getLocation();