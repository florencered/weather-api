console.log("working"); 
let weather={ //storing req API Creds
	//api key to access the weather,store the req creds as objects
	"apikey": "f06efb9fc4cc400992a24f1a65a6aa02",
	//func to fetch the info  
	//func called fetchWeather 
	//we will make an api call by using the fetch
	fetchWeather: function(city){ //when we search for city,the info would be stored
		fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid="+this.apiKey)
		.then((response)=>response.json()) //when we fetch the info then the response should be stored in the json format 
		.then((data)=>console.log(this.displayWeather(data)));
//use this whenever referring to diff objects in a class

	},  
	//display the weather
	displayWeather:function(data){ 
		const {name}=data; 
		const {icon,description}=data.weather[0]; 
		const {temp,humidity}=data.main; 
		const {speed}=data.wind; 
		//const {whatever we want to make a variable,whose key values would change acc} = accessing the keys through the data 
		//objects of the data stored in the variable format so that they can vary 
		//logging the object turned variables accordingly 
		console.log(name,icon,description,temp,humidity,speed);
		document.querySelector(".city").innerText="Weather in" + name; 
		document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png"
		document.querySelector(".temp").innerText=temp+"degree celcius"; 
		document.quesrySelector(".humidity").innerText="Humidity: " + humidity + "%"; 
		document.querySelector(".wind").innerText="Wind speed: "+ speed+"km/hr";  
		document.querySelector(".weather").classList.remove(".loading");

//class list=objects of declared class declared as elements,remove..rem,remove all features of loading as well

	} 
	search:function(){
 this.fetchWeather(document.querySelector(".searchbar").value );
} 

}; 
//search key press listener 
document.querySelector(".search button btn").addEventListener("click",function(){
	weather.search(); // search function called
}); 
document.querySelector(".searchbar").addEventListener('keyup',function(event){ //listen to whenever the key is released
	if (event.key=="Enter"){  //trace the events wherein the keyup wa for enter 
		weather.search();

	}
})
