const apiKey="ca5b10bc7a132933bd92287ed17bd27d";
const url="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

console.dir(url);

let inp=document.querySelector(".search input");
let btn=document.querySelector(".search button");
let icon=document.querySelector(".weather-icon");
let err=document.querySelector(".error");
let weath=document.querySelector(".weather");

async function checkweather(city){
    const response=await fetch(url + city + `&appid=${apiKey}`);

    if(inp.value == ""){
        err.style.display="block";
        weath.style.display="none";
    }
    else if(response.status == 404){
        err.style.display="block";
        weath.style.display="none";
    }
    else{
        var data=await response.json();
    
    let name=document.querySelector(".city");
    name.innerHTML= data.name;
    let temp=document.querySelector(".temp");
    temp.innerHTML=Math.round(data.main.temp) +'°C';
    let humid=document.querySelector(".humid");
    humid.innerHTML=`${data.main.humidity}%`;
    let wind=document.querySelector(".wind");
    wind.innerHTML=`${Math.round(data.wind.speed)} km/h`;
    if(data.weather[0].main =="Clear"){
        icon.src="images/clear.png";
    }
    else if(data.weather[0].main =="Rain"){
        icon.src="images/.rain.png";
    }
    else if(data.weather[0].main =="Clouds"){
        icon.src="images/clouds.png";
    }
    else if(data.weather[0].main =="Mist"){
        icon.src="images/mist.png";
    }
    else if(data.weather[0].main =="Snow"){
        icon.src="images/snow.png"
    }
    else{
        icon.src="images/clear.png";
    }
    
    weath.style.display="block";
    err.style.display="none";
    } 
}

btn.addEventListener("click",function(){
    checkweather(inp.value);
})

