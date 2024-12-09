async function fetchData(){
    let city= document.getElementById("cityName").value;

    const weatherData =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7aee35e132691031e15ed04f1df57ccd&units=metric`);
    const jsonData =  await weatherData.json();
    //console.log(jsonData);
    document.getElementById("temp").innerHTML=jsonData.main.temp;
    document.getElementById("humid").innerHTML=jsonData.main.humidity;
    document.getElementById("ws").innerHTML=jsonData.wind.speed;
    document.getElementById("feels_like").innerHTML=jsonData.main.feels_like;
    document.getElementById('cityName').value='';


}
fetchData();