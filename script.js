

let weather={
	apiKey:"f06efb9fc4cc400992a24f1a65a6aa02", //apikey 
	        fetchWeather: function (city) {     fetch(       "https://api.openweathermap.org/data/2.5/weather?q=" + 
                   city 
                   +         
                   "&units=metric&appid=" +      this.apiKey     )
    //asking for data and response  
   .then((response) => {  //3.once we 'fetched' the api,we can make it do specific tasks using .then
        if (!response.ok) {  //response is the func parameter taken..if response is not ok then,//response recieved in boolean true or false format
          alert("No weather found."); //alert by showing a pop up box saying "weather not found"
          //throw new Error("No weather found."); //new error object created which would say no weather found when 
          //the response recieved is not true
        }
        return response.json(); //response is a constructor,return the response or all the info in the fetch url and store it in the json format
      })

	 
	//
	.then((data)=>this.displayWeather(data)); 

} ,
 /*********display the credentials on screen**********/
 displayWeather: function(data){ 
 	//access diff elements 
    const {name}=data; 
    const { icon, description } = data.weather[0]; 
  
    const {temp,feels_like,temp_min,temp_max,humidity}=data.main; 
    const {speed}=data.wind; 
    //access and assign the inner texts accordingly 
    document.querySelector(".city").innerText="Weather in "+ name;
    document.querySelector(".description").innerText=description; 
    document.querySelector(".humidity").innerText="Humidity: "+ humidity+"%"; 
    document.querySelector(".wind").innerText="Windspeed: "+speed+" Km/hr"; 
    document.querySelector(".minTemp").innerText="Min Temp: "+ temp_min+" %"; 
    document.querySelector(".maxTemp").innerText="Max Temp: "+temp_max+" %"; 
    document.querySelector(".feels").innerText="Feels: "+feels_like+ "°C";  
    document.querySelector(".temp").innerText="Temperature: "+ temp+"°C";  
    //remove the laoding part once all the info is obtained 
    document.querySelector(".weather").classList.remove("loading"); 
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')"; 
           /**********connecting the search bar text and fetchWeather function******/

 } ,

search: function () { //search function with no parameter
    this.fetchWeather(document.querySelector(".search-bar").value); //the fetch weather object should take the value written in the search bar as the input parameter
  
  }, 

} ;  
 



 /*********reading the input in the search bar**********/ 
 //through mouse click 
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();//search function should be implememted once i detect a click
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") { //call the search function when we sense the enter key being pressed
     weather.search();
    }
  });

weather.fetchWeather("Denver"); //call the function by taking the parameter as  denver