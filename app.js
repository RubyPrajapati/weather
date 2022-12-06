
const weatherApi={
    key: "9fd293664d5345f7e1acb55bc1bf5e0b",
    baseurl: "https://api.openweathermap.org/data/2.5/weather"

}
const searchinputBox =document.getElementById("input-box");

//Event Listner Function on keypress

searchinputBox.addEventListener('keypress',(event)=>{
    if(event.keyCode == 13){
        console.log(searchinputBox.value);
        getweatherReport(searchinputBox.value);
    }
    
});

//get weather report

function getweatherReport(city){
    fetch(`${weatherApi.baseurl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather =>{
        return weather.json();
    }).then(showWeatherReport);
}

//show weather report

function showWeatherReport(weather){
    console.log(weather);

    let city=document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature=document.getElementById('temp');
    
    temperature.innerHTML =`${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp=document.getElementById('min-max');
    minMaxTemp.innerText=`${Math.floor(weather.main.temp-min)}&deg;C (min)/ ${Math.cell(weather.min.temp-max)}&deg;C (max)`;

    let weatherType=document.getElementById('weather');
    weatherType.innerText=`${weather.weather[0].main}`;

    let date=document.getElementById('date');
    let todayDate=new Date();
    date.innerText=dateManage(todayDate);

    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('https://cardinalwxservice.com/wp-content/uploads/2019/04/maxresdefault-3.jpg')";
        
    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2019/05/29/09/41/sky-4237062__340.jpg')";
        
    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/57423616/photo/woman-walking-through-park.jpg?s=612x612&w=0&k=20&c=HR-DK8jMricqFtYXAVejJXTpqv6ZVhxeO87Fh2oIo-A=')";
        
    }     else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('https://images.firstpost.com/wp-content/uploads/2022/10/Weather-Forecast-rain-Weather-Weather-Update-Weather-Alert-Weather-Report-Monsoon-2022-Monsoon-Monsoon-Rain.png?impolicy=website&width=1200&height=800')";
        
    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('https://d.newsweek.com/en/full/1956691/winter-forest-landscape-snow-covered-trees.jpg')";
    
    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1qBVOIwNXcOuNKjc51sVGVVAwF_jOIazVQ&usqp=CAU')";
        
    } 
}

//date manage

function dateManage(dateArg){
    let days=['sunday','monday','tuesday','thrusday','friday','saturday'];
    let months=['jan','feb','Mar','Apr','May','June','Jul','Aug','Sep','Oct','Nov','Dec'];
    let year=dateArg.getfullYear();
    let month=months[dateArg.getMonth()];
    let date=dateArg.getDate();
    let day=days[dateArg.getDay()];
    return `${date} ${month} (${day}) ${year}`;
}


//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
